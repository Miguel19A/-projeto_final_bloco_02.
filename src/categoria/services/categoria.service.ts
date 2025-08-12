import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";


@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>,) { }

    async create(dados: Categoria): Promise<Categoria> {
        const categoria = this.categoriaRepository.create(dados);
        return this.categoriaRepository.save(categoria);
    }

    async findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find();
    }

    async findOne(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id },
        });
        if (!categoria) throw new Error('Categoria não encontrada');
        return categoria;
    }

    async update(id: number, dados: Categoria): Promise<Categoria> {
        const categoria = await this.findOne(id);
        return this.categoriaRepository.save({ ...categoria, ...dados });
    }

    async remove(id: number): Promise<void> {
        const categoria = await this.findOne(id);
        await this.categoriaRepository.delete(categoria);
    }

}