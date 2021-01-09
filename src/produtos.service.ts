import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {

    produtos: Produto[] = [
        new Produto("LIV001", "PROGRAMAÇÃO I", 29.20),
        new Produto("LIV002", "PROGRAMAÇÃO II", 29.21),
        new Produto("LIV003", "PROGRAMAÇÃO III", 29.23),
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto{
        return produto;
    }

    apagar(id: number){
        this.produtos.pop();
    }

}