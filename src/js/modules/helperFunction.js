export let selectOption = (e,container)=>{
    container.value = e.target.innerHTML;
}
export let toggleOptions = (container)=>{
container.classList.toggle('show');
}

export let openSection = (index,navigator,mainSections)=>{
    navigator.map((navItem)=>navItem.classList.remove('active'));
    mainSections.map((section)=>{
        console.log("IN");
        section.classList.remove('show');
    });
    mainSections[index].classList.add('show');
    navigator[index].classList.add('active');
  }