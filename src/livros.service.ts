import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {

    produtos: Livro[] = [
        new Livro("LIV001", "PROGRAMAÇÃO I", 29.20),
        new Livro("LIV002", "PROGRAMAÇÃO II", 29.21),
        new Livro("LIV003", "PROGRAMAÇÃO III", 29.23),
    ];

    obterTodos(): Livro[] {
        return this.produtos;
    }

    obterUm(id: number): Livro {
        return this.produtos[0];
    }

    criar(produto: Livro) {
        this.produtos.push(produto);
    }

    alterar(produto: Livro): Livro{
        return produto;
    }

    apagar(id: number){
        this.produtos.pop();
    }

}