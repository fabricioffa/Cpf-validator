class CpfValidator {
    constructor(cpf) {
        this._cpf = cpf;
    }

    cleanCpf(cpf) { // limpa cpf
        cpf = cpf.replace(/\D+/g, '');
        this._cpf = Array.from(cpf, vl => vl = Number(vl));
    }

    isSequence(cpf) { // Supõe cpf limpo
        // this.cleanCpf(cpf); // Talvez
        const seq = this._cpf.map(vl => vl = this._cpf[0]);
        return JSON.stringify(seq) === JSON.stringify(this._cpf);
    }

    isCpfValid() {

        this.cleanCpf(this._cpf);

        if (!this._cpf.length) return console.log('Está vazio'); // Se vázio

        if (this._cpf.length !== 11) return console.log('Tamanho errado'); // Se tem mais de 11 digitos

        if (this.isSequence(this._cpf)) return console.log('É uma sequência'); // Se é seqüência



        let total = this._cpf
            .slice(0, -2)
            .reduce((ac, vl, i) => ac + vl * (10 - i), 0); // total do teste do primeiro digito de controle

        let ctrl = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);  // ajusta ctrl

        if (ctrl !== this._cpf[9]) return console.log('Primeiro número inválido'); // Verifica as duas condiç~eos de falsidade do primeiro dígito

        total = this._cpf
            .slice(0, -1)
            .reduce((ac, vl, i) => ac + vl * (11 - i), 0);   // total do teste do segundo digito de controle

        ctrl = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);   // ajusta ctrl

        if (ctrl !== this._cpf[10]) return console.log('Segundo número inválido'); // Verifica as duas condiç~eos de falsidade do segundo dígito

        return console.log("Cpf válido"); // Não é inválido
    }
}
    

const cpf = new CpfValidator('');
cpf.isCpfValid();
