function solve(list, op1,op2, op3, op4, op5) {
    'use strict';

    function executeOperation(curNumber, currentOperation) {
        if(currentOperation === 'chop') {

            return curNumber / 2;
          }
        else if(currentOperation === 'dice') {
            return Math.sqrt(curNumber)
          }
        else if(currentOperation === 'spice') {
            return curNumber + 1;
          }
        else if(currentOperation === 'bake') {
            return curNumber * 3;
          }
        else if(currentOperation1 === 'fillet') {
    
            return curNumber * 0.8;
          }
        else {
            return curNumber;
        }
        
    }

    let number = parseInt(list, 10);
    
    number = executeOperation(number, op1)
    console.log(number)
    number = executeOperation(number, op2)
    console.log(number)
    number = executeOperation(number, op3)
    console.log(number)
    number = executeOperation(number, op4)
    console.log(number)
    number = executeOperation(number, op5)
    console.log(number)

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');