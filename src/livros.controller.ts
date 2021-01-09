import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livroService: LivrosService){}
    
    @Get()
    obterTodos(): Livro[] {
        return this.livroService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() param): Livro {
        return this.livroService.obterUm(param.id);
    }

    @Post()
    criarProduto(@Body() produto: Livro) {
        this.livroService.criar(produto);
    }
    
    @Put()
    alterarProduto(@Body() produto: Livro): Livro {
        return this.livroService.alterar(produto);
    } 

    @Delete(':id')
    deletarProduto(@Param() param){
        this.livroService.apagar(param.id);
    }
}