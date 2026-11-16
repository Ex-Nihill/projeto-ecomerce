import { Injectable } from '@nestjs/common';
type ProdutoType = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
};
@Injectable()
export class ProdutosService {
  private readonly produtos: ProdutoType[] = [];
  constructor() {
    this.produtos.push({
      id: '1',
      nome: 'Sabonete',
      categoria: 'limpeza',
      preco: 44,
    });
    this.produtos.push({
      id: '2',
      nome: 'shampoo',
      categoria: 'limpeza',
      preco: 34,
    });
    this.produtos.push({
      id: '3',
      nome: 'Condicionador',
      categoria: 'limpeza',
      preco: 25,
    });
  }
  findAll(): { id: string; nome: string }[] {
    return this.produtos;
  }
  findOne(id: string): { id: string; nome: string } | undefined {
    return this.produtos.find((produto) => produto.id === id);
  }
  findAllByCategoria(categoria: string){
    return this.produtos.filter((produto)=>produto.categoria === categoria);
  }
  createOne(dto: Omit<ProdutoType, 'id'>){
    const id = this.produtos.length +1;
    const novoItem = ({id: `${id}`, ...dto});
    this.produtos.push(novoItem);
    return novoItem;
  }
}
