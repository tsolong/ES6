function test() {
    var flag = true;
    if(flag){
        var msg = 'hello';
        let content = '你好';
    }

    let content = '外层的你好';

    console.log(msg);
    console.log(content);
}

test();

function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var P = new Point();
console.log(P);

var foo = x => x * x;
console.log(foo(10));

var fooo = () => 200;
console.log(fooo());

var fooo = (x, y) => {return x + y};
console.log(fooo(10, 20));

setTimeout( () => console.log('setTimeout'), 1000);

var temp = 'ni hao';
var tempObj = {temp};
console.log(tempObj.temp);

var funA = function (x, y) {
    return {x, y};
}
console.log(funA(10, 20));

var obj1 = {
    name: 'tsolong',
    showName(){
        console.log(this.name);
    }
}
obj1.showName();