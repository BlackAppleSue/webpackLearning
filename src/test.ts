class hello{
    
    helloText:string;

    constructor(helloText:string){
        this.helloText = helloText;
    }
    
    sayHello(){
        console.log(this.helloText)
    }

}

let test = new hello('hi');
test.sayHello();