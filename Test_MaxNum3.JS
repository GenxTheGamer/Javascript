
const maxNum = (a,b,c) =>{
    var n1=a>b?a:b;
    var n2=b>c?b:c;
    var n1n2 = n1>n2?n1:n2;
    return n1n2;
}

console.log(maxNum(10,314,30));
