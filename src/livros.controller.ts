import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livroService: LivrosService){}
    
    @Get()
    obterTodos(): Promise<Livro[]> {
        return this.livroService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() param): Promise<Livro> {
        return this.livroService.obterUm(param.id);
    }

    @Post()
    criarLivro(@Body() livro: Livro) {
        this.livroService.criar(livro);
    }
    
    @Put()
    alterarLivro(@Body() livro: Livro): Promise<[number, Livro[]]> {
        return this.livroService.alterar(livro);
    }

    @Delete(':id')
    deletarLivro(@Param() param){
        this.livroService.apagar(param.id);
    }
}