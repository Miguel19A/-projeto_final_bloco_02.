import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('tb_categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, unique: true})
    nome: string;

    @Column({nullable: true})
    descricao: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}

