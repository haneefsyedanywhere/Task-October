import {nameValidator,checkboxValidator,dropDownValidator,calenderValidator,addressValidator,emailValidator} from './validator';
import {Datepicker,MONTHS_SHORT} from './datePicker';

export default function(){
const address = document.querySelector('.address');
const chechBox = [].slice.call(document.querySelectorAll('.customCheckbox'));
const chechBoxPrimary = [].slice.call(document.querySelectorAll('.form__checkbox_primary'));
const chechBoxSecondary = [].slice.call(document.querySelectorAll('.form__checkbox_secondary'));
const address_Submit = document.querySelector('.address #addressNext');
const calender = document.querySelector('#date-input');
const email = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const dropDown = document.querySelector('.form__dropDown input');
const uploadSection = document.querySelector('.upload');
chechBox.map((box,index)=>{
  box.addEventListener('click',function(){
      box.classList.toggle('checked');
      box.classList.toggle('customChecked');
      if(index<=2)
      checkboxValidator(chechBoxPrimary,".form__checkbox_primary");
      else
      checkboxValidator(chechBoxSecondary,".form__checkbox"); 
    });
});
const d = new Datepicker(document.getElementById("date-input"), {
    first_day_of_week: "Sunday",    
    format: (d) => {
      return d.getDate() + "/" + MONTHS_SHORT[d.getMonth()] + "/"  + d.getFullYear() ;
    }
  });
email.addEventListener('blur',()=>{
  emailValidator(email);
});
addressInput.addEventListener('blur',()=>{
  addressValidator(addressInput);
});
calender.addEventListener('blur',()=>{
  calenderValidator(calender);
})

address_Submit.addEventListener('click',function(){
 
  if(emailValidator(email) && addressValidator(addressInput) && calenderValidator(calender) && dropDownValidator(dropDown) && checkboxValidator(chechBoxPrimary,".form__checkbox_primary") && checkboxValidator(chechBoxSecondary,".form__checkbox")){
    address.classList.remove('show');
    uploadSection.classList.add('show');
    document.querySelector('footer').classList.toggle('hide');
  }else{
    calenderValidator(calender);
    addressValidator(addressInput);
    emailValidator(email);
    dropDownValidator(dropDown);
    checkboxValidator(chechBoxPrimary,".form__checkbox_primary");
    checkboxValidator(chechBoxSecondary,".form__checkbox"); 
  }
 });



const optionsHolder = document.querySelector('.form__dropDown>div');
const options = [].slice.call(optionsHolder.querySelectorAll('li'));
let selectOption = (e)=>{
  dropDown.value = e.target.innerHTML;
  dropDownValidator(dropDown);
}
let toggleOptions = ()=>{
  optionsHolder.classList.toggle('hideDropDown');
}

options.map((option)=>{
  option.addEventListener('click',selectOption);
});

  dropDown.addEventListener('click',toggleOptions);
  document.addEventListener('click',(e)=>{ 
    if((!optionsHolder.classList.contains('hideDropDown')) && e.target!==dropDown)
      toggleOptions();
  });

}