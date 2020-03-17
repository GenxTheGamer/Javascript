const student = {
    ID: '21',
    Name: 'Gen',
    GPA: '3.0',
};

const id = student.ID;
const Name = student.Name;
const GPA = student.GPA;

console.log(id+Name);

//To Do this in a simpler way we do..

const {id,Name,GPA}=student;

//To rename the property
const {id,name:n,GPA}=student;
