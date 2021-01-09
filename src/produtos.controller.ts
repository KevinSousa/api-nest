import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto("LIV001", "PROGRAMAÇÃO I", 29.20),
        new Produto("LIV002", "PROGRAMAÇÃO II", 29.21),
        new Produto("LIV003", "PROGRAMAÇÃO III", 29.23),
    ];
    
    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() param): Produto {
        return this.produtos[0];
    }

    @Post()
    criarProduto(@Body() produto: Produto) {
        produto.id = 100;
        this.produtos.push(produto);
    }
    
    @Put()
    alterarProduto(@Body() produto: Produto): Produto {
        return produto;
    } 

    @Delete(':id')
    deletarProduto(@Param() param){
        this.produtos.pop();
    }
}