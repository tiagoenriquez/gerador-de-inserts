class Inserts {
    /** @private @type{string} */ tabela;
    /** @private @type{string[]} */ dados;
    /** @private @type{string[]} */ chaves;
    /** @private @type{string[][]} */ tuplas;
    /** @private @type{string} */ comandoSql;

    /**
     *  
     * @param {string} tabela 
     * @param {string} dados 
     */
    constructor(tabela, dados) {
        this.tabela = tabela;
        this.dados = dados.split('\n');
        this.setChaves();
        this.setTuplas();
        this.setComandoSql();
    }

    /**
     * @private
     */
    setChaves() {
        this.chaves = this.dados[0].split('\t');
    }

    /**
     * @private
     */
    setTuplas() {
        const tuplas = [];
        this.dados.slice(1, dados.length).forEach((dado) => {
            tuplas.push(dado.split('\t'));
        });
        this.tuplas = tuplas;
    }

    /**
     * @private
     */
    setComandoSql() {
        let comandoSql = '';
        this.tuplas.forEach((tupla) => {
            comandoSql += `insert into ${this.tabela} (${this.chaves.join(', ')}) values ('${tupla.join("', '")}');` + '\n';
        });
        this.comandoSql = comandoSql;
    }

    /**
     * 
     * @returns {string}
     */
    getComandoSql() {
        return this.comandoSql;
    }
}