class CpfValidator {
    constructor(sentCpf) {
        Object.defineProperty(this, 'cleanCpf', {
            enumerable: true,
            get: function() {
              sentCpf = sentCpf.replace(/\D+/g, '');    // Remove caracteres não números
              return Array.from(sentCpf, vl => vl = Number(vl));    // transforma em array numérico
            }
        });
    }

    isSequence(cpf) { 
        const seq = this.cleanCpf.map(vl => vl = this.cleanCpf[0]);     // Cria seqüência com primeiro índice
        return JSON.stringify(seq) === JSON.stringify(this.cleanCpf);   // Compara
    }

    isCpfValid() {

        if (!this.cleanCpf.length) return console.log('Está vazio'); // Se vázio

        if (this.cleanCpf.length !== 11) return console.log('Tamanho errado'); // Se tem mais de 11 digitos

        if (this.isSequence(this.cleanCpf)) return console.log('É uma sequência'); // Se é seqüência



        let total = this.cleanCpf
            .slice(0, -2)
            .reduce((ac, vl, i) => ac + vl * (10 - i), 0); // total do teste do primeiro digito de controle

        let ctrl = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);  // ajusta ctrl

        if (ctrl !== this.cleanCpf[9]) return console.log('Primeiro número inválido'); // Verifica as duas condiç~eos de falsidade do primeiro dígito

        total = this.cleanCpf
            .slice(0, -1)
            .reduce((ac, vl, i) => ac + vl * (11 - i), 0);   // total do teste do segundo digito de controle

        ctrl = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);   // ajusta ctrl

        if (ctrl !== this.cleanCpf[10]) return console.log('Segundo número inválido'); // Verifica as duas condiç~eos de falsidade do segundo dígito

        return console.log("Cpf válido"); // Não é inválido
    }
}

const cpf = new CpfValidator('');
console.log(cpf.isCpfValid());

console.log('someth8ing');