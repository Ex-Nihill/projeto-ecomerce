import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
  @Get()
  findAll(): { id: string; nome: string }[] {
    return this.produtosService.findAll();
  }
  @Get('filtrar')
  filtroPorCategoria(@Query('categoria') categoria: string) {
    console.log('A categoria atual é:', categoria);
    return this.produtosService.findAllByCategoria;
  }
  @Get(':id')
  findOne(@Param('id') id: string): { id: string; nome: string } | undefined {
    return this.produtosService.findOne(id);
  }
  @Post()
  createOne(
    @Body()
    corpo: {
      nome: string;
      categoria: string;
      preco: number;
    },
  ) {
    return this.produtosService.createOne(corpo);
  }
}
