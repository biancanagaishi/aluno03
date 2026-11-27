
import { Aluno } from "./models/Alunos";

const aluno = new Aluno("Bianca", "12345");

console.log("===== REGISTRO DE ALUNOS =====");

// Tentando inserir nota inválida
console.log("\nTentando inserir nota inválida:");
aluno.setNota(25);

// Inserindo nota válida
console.log("\nCorrigindo a nota:");
aluno.setNota(15);

// Exibindo resultado
console.log("\n===== RESULTADO =====");

console.log("Nota final:", aluno.getNota());

console.log("Situação:", aluno.verificarAprovacao());
