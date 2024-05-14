class Tamagotchi {
    constructor(nome) {
        this.nome = nome;
        this.fome = 50;
        this.felicidade = 50;
        this.vivo = true;
    }

    alimentar() {
        if (!this.vivo) {
            console.log("Seu tamagotchi morreu. :(");
            return;
        }
        this.fome -= 10;
        console.log(`${this.nome} foi alimentado.`);
        this.verificarEstado();
    }

    brincar() {
        if (!this.vivo) {
            console.log("Seu tamagotchi morreu. :(");
            return;
        }
        this.felicidade += 10;
        console.log(`${this.nome} está mais feliz agora.`);
        this.verificarEstado();
    }

    passear() {
        if (!this.vivo) {
            console.log("Seu tamagotchi morreu. :(");
            return;
        }
        this.felicidade += 5;
        console.log(`${this.nome} adorou passear.`);
        this.verificarEstado();
    }

    trocarRoupa() {
        if (!this.vivo) {
            console.log("Seu tamagotchi morreu. :(");
            return;
        }
        console.log(`${this.nome} trocou de roupa.`);
    }

    verificarEstado() {
        if (this.fome >= 100 || this.felicidade <= 0) {
            this.vivo = false;
            console.log(`${this.nome} morreu.`);
        }
    }

    iniciar() {
        setInterval(() => {
            this.fome += 5;
            this.felicidade -= 5;
            this.verificarEstado();
        }, 10000);
    }
}

const prompt = require('prompt-sync')();

const nome = prompt('Digite o nome do seu tamagotchi: ');
const tamagotchi = new Tamagotchi(nome);
tamagotchi.iniciar();

console.log(`Bem-vindo ao tamagotchi ${nome}!`);
console.log("Digite 'alimentar', 'brincar', 'passear' ou 'trocar roupa' para interagir.");

while (tamagotchi.vivo) {
    const acao = prompt('O que você quer fazer? ');

    switch (acao) {
        case 'alimentar':
            tamagotchi.alimentar();
            break;
        case 'brincar':
            tamagotchi.brincar();
            break;
        case 'passear':
            tamagotchi.passear();
            break;
        case 'trocar roupa':
            tamagotchi.trocarRoupa();
            break;
        default:
            console.log("Ação inválida. Tente novamente.");
    }
}
