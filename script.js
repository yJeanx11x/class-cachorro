class cachorro{
constructor(nome,comida,sono){
        this.nome=nome
        this.comida=comida
        this.sono=sono
        this.comida=20       
}
comer(qtd){
        this.comida -= qtd
}
dormir(){
        this.sono=false
}
}

const c1=new cachorro('Bolão',8,true)
c1.comer(2)
c1.dormir()
console.log(c1)