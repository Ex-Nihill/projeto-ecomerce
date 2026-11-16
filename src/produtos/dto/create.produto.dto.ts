import { IsNumber, IsString } from "class-validator";

export class CreateProdutosDTO{
    @IsString({message: 'O nome do produto deve ser uma string'})
    nome: string;
    @IsString({message: 'A categoria do produto deve ser uma string'})
    categoria: string;
    @IsNumber({message: ''})
    preco: number;
}