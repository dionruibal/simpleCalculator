var stack = [];

function calculator(){

}
function numberZero(){
    stack.push(0);
}
function numberOne(){
    stack.push(1);
}
function numberTwo(){
    stack.push(2);
}
function numberThree(){
    stack.push(3);
}
function numberFour(){
    stack.push(4);
}
function numberFive(){
    stack.push(5);
}
function numberSix(){
    stack.push(6);
}
function numberSeven(){
    stack.push(7);
}
function numberEight(){
    stack.push(8);
}
function numberNine(){
    stack.push(9);
}
function decimal(){
    stack.push('.');
}
function divide(){
    stack.push('/');
}
function multiply(){
    stack.push('*');
}
function minus(){
    stack.push('-');
}
function plus(){
    stack.push('+');
}
function equal(){
    var int1 = 0;
    var int2= 0;
    var str = "";
    for (var i = 0; i < stack.length; i++){
        if (stack[i] >= 0 || stack[i] <= 9){
            int1 = stack[i];
        }
        if (stack[i] == '+'){
            str = int1 + stack[i+1];
        }
        if (stack[i] == '-'){
            str = int1 - stack[i+1];
        }
        if (stack[i] == '*'){
            str = int1 * stack[i+1];
        }
        if (stack[i] == '/'){
            str = int1 / stack[i+1];
        }
    }
    while (stack.length != 0){
        stack.pop();
    }
    alert(str);
}
