'use strict';

let a=3;let b=5;
function f(){
console.log('func');
return a++;
return b=5;
}
f();
alert(b);alert(a);