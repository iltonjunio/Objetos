// Definição da classe Aluno
class Aluno {
    constructor(nome, nota) {
    this.nome = nome
    this.nota = nota
    }
}

  // Arrays de nomes e notas
const nomes = ['João', 'Maria', 'Pedro', 'Ricardo', 'Lucas']
const notas = [8.5, 6.0, 9.2, 4.5, 7.0]
const alunos = []

  // Verifica se os arrays de nomes e notas têm o mesmo comprimento
if (nomes.length === notas.length) {
    // Criação dos objetos Aluno e adição ao array alunos
    for (let i = 0; i < nomes.length; i++) {
    const aluno = new Aluno(nomes[i], notas[i])
    alunos.push(aluno);
    }
} else {
    console.log("Os arrays de nomes e notas têm comprimentos diferentes.")
}

console.log(alunos)

  // Exibe apenas o nome dos alunos
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome)
}

  // Adiciona o atributo "situação" a cada objeto aluno
for (let i = 0; i < alunos.length; i++) {
    alunos[i].situacao = alunos[i].nota >= 7.0 ? 'Aprovado' : 'Reprovado'
}

  // Criação de um objeto Map a partir do array de objetos Aluno
const alunosMap = new Map();

alunos.forEach((aluno, index) => {
    alunosMap.set(index, aluno)
});

console.log(alunosMap)

  // Utiliza o método get() para obter a nota do 5º elemento do mapa
const notaQuintoAluno = alunosMap.get(4).nota
console.log(notaQuintoAluno)

  // Utiliza o método delete() para remover o 4º elemento do mapa
alunosMap.delete(3)
console.log(alunosMap)

  // Utiliza o método has() para verificar se existe algum aluno chamado "Jon Snow" no mapa
const temJonSnow = Array.from(alunosMap.values()).some(aluno => aluno.nome === "Jon Snow")

if (temJonSnow) {
    console.log("Existe um aluno chamado Jon Snow no mapa.")
} else {
    console.log("Não existe um aluno chamado Jon Snow no mapa.")
}

  // Utiliza o método keys() para obter todas as chaves do mapa
const chaves = Array.from(alunosMap.keys())
console.log(chaves)

  // Utiliza o método values() para obter todos os valores do mapa
const valores = Array.from(alunosMap.values())
console.log(valores)

  // Utiliza o método entries() para obter todas as chaves e valores do mapa
const entradas = Array.from(alunosMap.entries())

entradas.forEach(([chave, valor]) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`)
})