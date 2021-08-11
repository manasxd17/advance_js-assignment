const QueenAttak = class{
    constructor(p1,p2){
        this.p1 = p1;
        this.p2 = p2;
    }

    canAttack(){
        let [x1,y1] = this.p1;
        let [x2,y2] = this.p2;

        if(x1 == y1){
            console.log("Can attak")
        }

        else if(x2 == y2){
            console.log("Can attack")
        }

        else if(Math.abs(x1 - y1) == Math.abs(x2 - y2)){
            console.log("Can attack")
        }

        else{
            console.log("Cannot Attack")
        }
    }
}

const chess = new QueenAttak([10,7],[7,10])
chess.canAttack()

