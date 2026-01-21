//Függvényes megoldás
function Tanyer(szin, meret){
    this.szin = szin;
    this.meret = meret;
}
function NagyTanyer(szin){
    Tanyer.call(this, szin, "nagy")
}
Object.setPrototypeOf(NagyTanyer.prototype, Tanyer.prototype);

function KisTanyer(szin){
    Tanyer.call(this, szin, "kis")
}
Object.setPrototypeOf(KisTanyer.prototype, Tanyer.prototype);

const tanyer1 = new KisTanyer("lila");
console.log(tanyer1);
const tanyer2 = new KisTanyer("zöld");
console.log(tanyer2);
const tanyer3 = new NagyTanyer("réz");
console.log(tanyer3);

function Uveg(){

}

const uveg = new Uveg();
console.log(uveg);

//Osztályos megoldás

class TanyerOsztaly{
    constructor(szin, meret){
        this.szin = szin;
        this.meret = meret;
    }
}
class NagyTanyerOsztaly extends TanyerOsztaly{
    constructor(szin){
        super(szin, "nagy")
    }
}
class KisTanyerOsztaly extends TanyerOsztaly{
    constructor(szin){
        super(szin, "kis")
    }
}

const classtanyer1 = new KisTanyerOsztaly("ezüst");
console.log(classtanyer1);
const classtanyer2 = new KisTanyerOsztaly("arany");
console.log(classtanyer2);
const classtanyer3 = new NagyTanyerOsztaly("fehér");
console.log(classtanyer3);

class UvegOsztaly {

}

const classuveg = new UvegOsztaly();
console.log(classuveg);