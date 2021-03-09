'use strict'
function Student(email,number,tuition){
    this.email=email;
    this.number=number;
    this.tuition=tuition;
    this.randomAge=Math.floor(Math.random()*24)+18;

    Student.all.push(this);
}
Student.all=[];
//studentId=0;
// Form
const form = document.getElementById('studentF');
form.addEventListener('submit',addStudent);
function addStudent(event){
    event.preventDefault();
    let stEmail = event.target.studentE.value;
    let stNumber = event.target.studentNo.value;
    let stTuition = event.target.studentT.value;
    new Student(stEmail,stNumber,stTuition);
    //renderStudentRow  
    //render local storage
    form.reset();
    
}
// table
const table =document.getElementById('studentTable');
//render Header
function renderHeader(){
    const headerRow =document.createElement('tr');
    table.appendChild(headerRow);
    const studentIdlCell=document.createElement('th');
    headerRow.appendChild(studentIdlCell);
    studentIdlCell.textContent='id';
    const studentNameCell=document.createElement('th');
    headerRow.appendChild(studentNameCell);
    studentNameCell.textContent='Name';
    const studentEmailCell=document.createElement('th');
    headerRow.appendChild(studentEmailCell);
    studentEmailCell.textContent='Email';
    const studentMobileCell=document.createElement('th');
    headerRow.appendChild(studentMobileCell);
    studentMobileCell.textContent='Mobile';
    const studentAgeCell=document.createElement('th');
    headerRow.appendChild(studentAgeCell);
    studentAgeCell.textContent='Age';
    const studentTuitionCell=document.createElement('th');
    headerRow.appendChild(studentTuitionCell);
    studentTuitionCell.textContent='Tuition';
    
}
renderHeader();
//render Row
function renderRow(){
    table.innerHTML=""
    renderHeader();
    for(let i = 0 ; i<Student.all.length;i++){
        const studentRow = document.createElement('tr')
    table.appendChild(studentRow);
    
    const idCell = document.createElement('td');
    Student.appendChild(idCell);
    idCell.textContent=

    // const nameCell = document.createElement('td');
   // Student.appendChild(nameCell);
   // nameCell.textContent=
   
   const stuEmailCell = document.createElement('td');
    Student.appendChild(stuEmailCell);
    stuEmailCell.textContent=Student.all[i].email;
    
    const mobileCell = document.createElement('td');
    Student.appendChild(mobileCell);
    mobileCell.textContent=Student.all[i].number;
    
    const ageCell = document.createElement('td');
    Student.appendChild(ageCell);
    ageCell.textContent=Student.all[i].randomAge;
    
    const tuitionCell = document.createElement('td');
    Student.appendChild(tuitionCell);
    tuitionCell.textContent=Student.all[i].tuition;
    
}

}

// local storage 
function save(){
    localStorage.setItem('students',JSON.stringify(Student.all));
}
const localStudentGet = localStorage.getItem('students');
if (localStudentGet !== null){
    const localStudentParse = JSON.parse(localStudentGet);
    for( let i = 0 ;i<localStudentParse.length;i++){
        new Student (localStudentParse[i].email,localStudentParse[i].number,localStudentParse[i].tuition)
    }
    renderRow();
}


