var arr= [1,'name',true,[-1,0,1]];
arr[5] = function(){alert('element');}
console.log(arr.length);

console.log(true+1);
console.log("3"+0);
console.log(5+"12");
console.log(undefined+11);

function foo(){
    var f= function(){
        return "hello";
    }
    return f;
}
var nf = foo;
console.log(nf);
console.log(nf());

var str = "";
var a;
if(a == undefined){
    str += "1";
}else{
    str += "2";
}
if(typeof(a) == undefined){
    str += "3";
}else{
    str += "4";
}
if(typeof(a) == "undefined"){
    str += "5";
}else{
    str += "6";
}
console.log(str);

var aa =1;
function foos(){
    var aa = 2;
    var bb =3;
    console.log(bb);
    cc = 4;
}
console.log(aa);
foos();
console.log(cc);

var x=1;
var y=0;
var z=0;
function add(n){n=n+1;}
y=add(x);console.log(y);
function add(n){n=n+3;}
z=add(x);console.log(z);

for(i=0,j=0;i<10,j<6;i++,j++){
    k = i+j;
}
console.log(k);

var s = [];
for (var i=1;i<10;i++){
    var ss=i;console.log(ss);
    s[i]=function(){
        console.log(ss);
    };
}
console.log(s[6]());

var xx=1;
function a(){console.log(xx);var xx=2;xx++;console.log(xx);}
function b(){console.log(xx);x++;console.log(xx);}
if(0<100<0){a();}else{b();}
if(0<100<(0+4)){console.log(111);a();}else{console.log(222);b();}