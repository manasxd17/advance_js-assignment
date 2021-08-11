const QueenAttak = class{
    constructor(p1,p2){
        this.p1 = p1;
        this.p2 = p2;
    }

    canAttack(){
        let [x1,y1] = this.p1;
        let [x2,y2] = this.p2;
        if(0 <= x1,x2,y1,y2 <= 7){
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
        else{
            console.log("Check the points")
        }
    }
}

const chess = new QueenAttak([0,0],[7,7])
chess.canAttack()

