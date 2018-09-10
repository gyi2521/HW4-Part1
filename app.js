const employeeList = [
  {
    name: 'Jan',
    officeNum: '#1',
    phoneNum: '(222) 222-2222'   
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

let resultList = [];

//const userCommand = prompt("Enter you command:");

const render = function (arrResult) {
   $('#resultBoard').empty();
   // if (arrResult.length !== 0) {
     console.log(arrResult);
       for (let i = 0; i < arrResult.length; i++) {
           $('#resultBoard').append(`<div>${arrResult[i]}</div>`);
       }
   // }else{
   //     for (let i = 0; i < employeeList.length; i++) {
   //         $('#resultBoard').append(`<div>${employeeList[i]}</div>`);
   //     }
   // }
   
 }
 

const print = function () {    
  for (let i = 0; i < employeeList.length; i++) {
    //render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    resultList.push(employeeList[i].name,employeeList[i].officeNum,employeeList[i].phoneNum,'<br/>');   
  }
  render(resultList);
}

const verify = function () {
  
  const empName = $('#inputName').val();
  let verify = 'Employee Not Found'
  for(let i=0; i < employeeList.length; i++){
    if (empName === employeeList[i].name){
        verify = 'Employee Found';
        break;
     }     
   }
   render(verify);
}

const lookup = function () {
  event.preventDefault();
  const empName = $('#inputName1').val();
  for (let i=0; i < employeeList.length; i++) {
    if (empName === employeeList[i].name){
      resultList.push(empName);
      break;
    }   
  }
  render(resultList);
} 
const contains = function () {
  // const inputString = prompt('Please enter a string: ');
  for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.includes(inputString)){
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
} 
const update = function () {
  // const userName = ;
  // const userField = ;
  // const userValue = ;
  for (let i = 0; i < employeeList.length; i++) {
    if (userName === employeeList[i].name) {
      if (userField === "officeNum") {
        employeeList[i].officeNum = userValue;
      }
      else if (userField === "phoneNum") {
        employeeList[i].phoneNum = userValue;
      }
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }

} 
const add = function () {
    // const userName = ;
    // const userField = ;
    // const userValue = ;
    const newUser = {name:userName, officeNum:userField, phoneNum:userValue};
    employeeList.push(newUser);

    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
} 

const cmdDelete = function () {
    // const userName = prompt('Please enter your name:');
    for (let i = 0; i < employeeList.length; i++) {
      if(employeeList[i].name === userName){
        employeeList.splice(i, 1);
        break;
      }       
    }
    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
}

const menu = function () {
  $('.mainSection').hide();
  $('#resultBoard').empty();

  switch (this.id) {
    case 'print':       
        print(); //to display the result when a user click on 'print' on navigation
        break;
    case 'verify':
        $('#contentVerify').show();
        break;
    case 'lookup':
        $('#contentLookup').show();
        break;
    case 'contains':
        $('#contentContains').show();
        break;
    case 'update':
        $('#contentUpdate').show();
        break;
    case 'add':
        $('#contentAdd').show();
        break;
        $('#contentDelete').show();
        break;
  }
}



$('#print').on('click', menu);
$('#verify').on('click', menu);
$('#lookup').on('click', menu);
$('#contains').on('click', menu);
$('#update').on('click', menu);
$('#add').on('click', menu);
$('#delete').on('click', menu);

$('#btnPrint').on('click', print);
$('#btnVerify').on('click', verify);
$('#btnLookup').on('click', lookup);
$('#btnContains').on('click', contains);
$('#btnUpdate').on('click', update);
$('#btnAdd').on('click', add);
$('#btnDelete').on('click', cmdDelete);

$('.mainSection').hide();


