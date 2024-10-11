const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "lendário";
    } else {
        nivel = "imortal";
    }

    return { saldoVitorias, nivel };
}

function solicitarEntradas() {
    rl.question("Digite o número de vitórias (ou -1 para sair): ", (vitoriaInput) => {
        let vitorias = parseInt(vitoriaInput);
        if (vitorias === -1) {
            rl.close(); 
            return;
        }

        rl.question("Digite o número de derrotas: ", (derrotaInput) => {
            let derrotas = parseInt(derrotaInput);

            let resultado = calcularNivel(vitorias, derrotas);
            console.log(`O herói tem o saldo de ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`);

            solicitarEntradas();
        });
    });
}

solicitarEntradas();
