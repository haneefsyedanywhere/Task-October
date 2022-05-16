import {nameValidator,checkboxValidator,dropDownValidator,calenderValidator,addressValidator,emailValidator} from './validator';


export default function(){
    const firstName = document.querySelector('#firstName');
    const secondName = document.querySelector('#secondName');
    const chooseName_Submit = document.querySelector('#chooseName__next');
    const chooseName = document.querySelector('.chooseName');
    const address = document.querySelector('.address');

    firstName.addEventListener('blur',()=>{
      nameValidator(firstName,"#firstName");
    });
    secondName.addEventListener('blur',()=>{
      nameValidator(secondName,"#secondName");
    });
    chooseName_Submit.addEventListener('click',()=>{
      if(firstName.classList.contains('success') && secondName.classList.contains('success')){
        chooseName.classList.remove('show');
        address.classList.add('show')
        document.querySelector('footer').classList.toggle('hide');
      }else{
        nameValidator(firstName,"#firstName");
        nameValidator(secondName,"#secondName");
      }
    });
}