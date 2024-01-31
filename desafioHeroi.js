class heroi{
    constructor(nick,level,classe){
        this.nick=nick
        this.level=level
        this.classe=classe
    }


    atacar(classe){
            console.log(`O char ${this.nick} está no level ${this.level} e pertence a classe dos ${this.classe}'s`);

            if(this.classe==="Guerreiro"){
                console.log(`O ${this.classe} atacou usando uma Espadassaaa`)
            } 
            else if (this.classe==="Mago"){
                console.log(`O ${this.classe} atacou usando uma Magia Negra`)
            }
            else if (this.classe==="Druida") {
                console.log(`O ${this.classe} atacou usando uma Magia da Terra`)
            }
            else if (this.classe==="Paladino"){
                console.log(`O ${this.classe} atacou usando uma Small Stone`)
            }
    }
}

let attack = new heroi ("James Hetfield", 753 , "Guerreiro")
attack.atacar()







