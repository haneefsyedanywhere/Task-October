import {openSection} from './helperFunction';

export default function(){
    const sideNav = document.querySelector('.sideNav');
    const navToggleButton = document.querySelector('.toggleBtn');
    navToggleButton.addEventListener('click',()=>{
      sideNav.classList.toggle('show');
    })
    
    const navigator = [].slice.call(document.querySelectorAll('#headerRight__nav a'));
    const mainSections = [].slice.call(document.querySelectorAll('#mainSection>section'));

    navigator.map((navItem,index)=>{
      navItem.addEventListener('click',()=>{openSection(index,navigator,mainSections)});
    });

    const profileInfo = document.querySelector('.headerRight__profileInfo');
    profileInfo.addEventListener('click', ()=>{
      console.log('listening');
      profileInfo.querySelector('.headerRight__dropDown').classList.toggle('hide');
    },true);

    document.addEventListener('click',(e)=>{ 
      if(!profileInfo.querySelector('.headerRight__dropDown').classList.contains('hide') && e.target!==profileInfo)
        profileInfo.querySelector('.headerRight__dropDown ').classList.toggle('hide');
    });

    window.addEventListener("dragover",function(e){
      e = e || event;
      e.preventDefault();
    },false);
    window.addEventListener("drop",function(e){
      e = e || event;
      e.preventDefault();
    },false);

}