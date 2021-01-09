import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtoService: ProdutosService){

    }
    
    @Get()
    obterTodos(): Produto[] {
        return this.produtoService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() param): Produto {
        return this.produtoService.obterUm(param.id);
    }

    @Post()
    criarProduto(@Body() produto: Produto) {
        this.produtoService.criar(produto);
    }
    
    @Put()
    alterarProduto(@Body() produto: Produto): Produto {
        return this.produtoService.alterar(produto);
    } 

    @Delete(':id')
    deletarProduto(@Param() param){
        this.produtoService.apagar(param.id);
    }
}