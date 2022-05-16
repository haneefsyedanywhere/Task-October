
export const nameValidator = function(input,containerName){
  const error = document.querySelector(`${containerName} + .inputError`);
  var regExp = /^[a-zA-Z]{3,15}$/;

    if(regExp.test(input.value)){
      input.classList.add('success');
      input.classList.remove('error');
      error.style.visibility='hidden';
      return true;
    }else{
      input.classList.remove('success');
      input.classList.add('error');
      error.style.visibility='visible';
      return false;
    }
}

export const addressValidator = function(address){
  var regExp = /^[A-Za-z0-9\s,'-\/]{3,}$/;
  const error = document.querySelector('#address + .inputError');
  if(regExp.test(address.value)){
    address.classList.add('success');
    address.classList.remove('error');
    error.style.visibility='hidden';
    return true;
  }else{
    address.classList.remove('success');
    address.classList.add('error');
    error.style.visibility='visible';
    return false; 
  }
}

export const emailValidator = function(email){
  const error = document.querySelector('#email + .inputError');
  if(email.validity.valueMissing) {
    email.classList.remove('success');
    email.classList.add('error');
    error.style.visibility='visible';
    return false;
  }
  else if (email.validity.typeMismatch) {
    email.classList.remove('success');
    email.classList.add('error');
    error.style.visibility='visible';
    return false;
  }
  else if(email.validity.valid){
    email.classList.add('success');
    email.classList.remove('error');
    error.style.visibility='hidden';
    return true;
  }
}

export const calenderValidator = function(calender){
  const error = document.querySelector('.address__date .inputError');
  if(calender.value){
    calender.classList.add('success');  
    calender.classList.remove('error');
    error.style.visibility='hidden';
    return true;
  }else{
    calender.classList.remove('success');   
    calender.classList.add('error');
    error.style.visibility='visible';
    return false;
  }
}
export const checkboxValidator = (checkBoxHolder,checkBoxName)=>{

  const error = document.querySelector(`${checkBoxName} + .inputError`);
  // console.log(error);
  if(checkBoxHolder.some(input=>input.classList.contains('checked'))){
    error.style.visibility='hidden';
    return true;
  }else{
    error.style.visibility='visible';
    return false; 
  }
}

export const dropDownValidator = (dropDown)=>{
  const error = document.querySelector('.form__dropDown .inputError');
  if(dropDown.value){
    dropDown.classList.add('success');
    dropDown.classList.remove('error');
    error.style.visibility='hidden';
    return true;
  }else{
    dropDown.classList.remove('success');   
    dropDown.classList.add('error');
    error.style.visibility='visible';
    return false
  }
}