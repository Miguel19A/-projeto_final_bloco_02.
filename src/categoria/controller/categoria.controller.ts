import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categoria } from "../entities/categoria.entity";



@Controller('categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Post()
    create(@Body() dados: Categoria) {
        if(!dados.nome || dados.nome.trim().length < 3) throw new NotFoundException('O nome da categoria é obrigatório e deve conter pelo menos 3 caracteres.');
        return this.categoriaService.create(dados);
    }

    @Get ()
    findAll() {
        return this.categoriaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoriaService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dados: Categoria) {
        return this.categoriaService.update(+id, dados);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.categoriaService.remove(+id);
    }
}