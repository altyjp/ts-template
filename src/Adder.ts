export default class Adder{

    private ans: number;

    constructor (val1 : number, val2 : number) {
        this.ans = val1 + val2;
    }

    getAns(){
        return this.ans;
    }

}

