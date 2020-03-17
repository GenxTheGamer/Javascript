a=[1,2,3];
b=[4,5,6];
c=[...a,...b]; //This is spread Operator
console.log(c);

//Testing
x='hi my name is '
y='\nwhat?\n'
z='my name is \n'
p='\nwho?\n'
q=' slim shady :)'
s=(x+y+z+p+z+q);
r=[...x,...y,...z,...p,...z,...q];
console.log(s);
console.log("\n")
console.log(r);
