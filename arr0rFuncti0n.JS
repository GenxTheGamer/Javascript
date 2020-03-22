function getGreetingFunc(){
    return 'Welcome to javascript';
}

const getGreetingFunc1 = () => {
    return 'Welcome to Javascript';
}
const getGreetingFunc2 = () =>
    'Welcome to Javascript';

console.log(getGreetingFunc());
console.log(getGreetingFunc1());
console.log(getGreetingFunc2());

//////////////////////////////////////////////////


const student =[
    {ID:1,present: true},
    {ID:2,present: false},
    {ID:3,present: false},
    {ID:4,present: true},
];

const presentStudents = student.filter(function(student){return student.present});
console.log("\n Normal Way...");
console.log(presentStudents);

const presentStu = student.filter(student => student.present);
console.log("\n using Arrow Function =>");
console.log(presentStu);

///////////////////////////////////////////////
//Square function using arrow function

const squareFun = (n) =>
    n*n;
console.log(squareFun(2));
