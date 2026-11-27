
import { AlunoInterface } from "../interfaces/Aluno.js";

export class Alunos implements AlunoInterface {

    private nome: string;
    private matricula: string;
    private notaFinal: number;

    // Construtor
    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = 0;
    }

    // Getter
    getNota(): number {
        return this.notaFinal;
    }

    // Setter
    setNota(valor: number): void {

        if (valor < 0 || valor > 20) {
            console.log("Nota inválida! Digite uma nota entre 0 e 20.");
        } else {
            this.notaFinal = valor;
            console.log("Nota registrada com sucesso!");
        }

    }

    // Verificar aprovação
    verificarAprovacao(): string {

        if (this.notaFinal >= 10) {
            return "Aprovado!";
        } else {
            return "Reprovado!";
        }

    }

}
