const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222 222-2222'
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

const render = function (html) {
  html = '<hr />' + html;
  $('#resultBoard').html(html);
}

//created additional render function to eliminate repetition 
const renderEmployee = function (arrResult) {
  let html = '<hr />';
  for (let i = 0; i < arrResult.length; i++) {
    html += `<div><p>${arrResult[i].name}</p><p>${arrResult[i].officeNum}</p><p>${arrResult[i].phoneNum}</p></div><br />`;
  }
  $('#resultBoard').html(html);
}

const print = function () {
  renderEmployee(employeeList);
}

const verify = function () {

  const empName = $('#inputName').val();
  let verify = 'Employee Not Found'
  for (let i = 0; i < employeeList.length; i++) {
    if (empName.toLowerCase() === employeeList[i].name.toLowerCase()) {
      verify = 'Employee Found';
      break;
    }
  }
  render(verify);
}

const lookup = function () {
  let resultList = [];
  const empName = $('#inputName').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (empName.toLowerCase() === employeeList[i].name.toLowerCase()) {
      resultList.push(employeeList[i]);
      break;
    }
  }
  if (resultList.length > 0) {
    renderEmployee(resultList);
  } else {
    render('Employee Not Found');
  }
}
const contains = function () {
  let resultList = [];
  const inputString = $('#inputName').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(inputString.toLowerCase())) {
      resultList.push(employeeList[i]);
    }
  }
  if (resultList.length > 0) {
    renderEmployee(resultList);
  } else {
    render('Employee Not Found');
  }
}

const update = function () {
  let resultList = [];
  const userName = $('#inputName').val();
  const officeNum = $('#officeNum').val();
  const phoneNum = $('#phoneNum').val();
  let employeeFound = false;
  for (let i = 0; i < employeeList.length; i++) {
    if (userName.toLowerCase() === employeeList[i].name.toLowerCase()) {

      employeeList[i].officeNum = officeNum;
      employeeList[i].phoneNum = phoneNum;

      resultList.push(employeeList[i]);
      employeeFound = true;
      break;
    }
  }
  if (employeeFound) {
    renderEmployee(resultList);
  }
  else {
    render('Employee Not Found');
  }
}

const add = function () {
  const userName = $('#inputName').val();
  const officeNum = $('#officeNum').val();
  const phoneNum = $('#phoneNum').val();
  const newUser = { name: userName, officeNum: officeNum, phoneNum: phoneNum };
  employeeList.push(newUser);
  renderEmployee([newUser]);
}

const cmdDelete = function () {
  const userName = $('#inputName').val();
  let msg = 'Employee Not Found';
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === userName.toLowerCase()) {
      employeeList.splice(i, 1);
      msg = 'Employee Deleted';
      break;
    }
  }
  render(msg);
}

const menu = function () {
  $('.mainSection').addClass('hide');
  $('#resultBoard').empty();
  $('#inputName').val('');
  $('#officeNum').val('');
  $('#phoneNum').val('');

  switch (this.id) {
    case 'print':
      print(); //to display the result when a user click on 'print' on navigation
      break;
    case 'verify':
      $('#contentVerify').removeClass('hide');
      $('#empName').removeClass('hide');
      break;
    case 'lookup':
      $('#contentLookup').removeClass('hide');
      $('#empName').removeClass('hide');
      break;
    case 'contains':
      $('#contentContains').removeClass('hide');
      $('#empName').removeClass('hide');
      break;
    case 'update':
      $('#contentUpdate').removeClass('hide');
      $('#empName').removeClass('hide');
      $('#empAddUpdate').removeClass('hide');
      break;
    case 'add':
      $('#contentAdd').removeClass('hide');
      $('#empName').removeClass('hide');
      $('#empAddUpdate').removeClass('hide');
      break;
    case 'delete':
      $('#contentDelete').removeClass('hide');
      $('#empName').removeClass('hide');
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



