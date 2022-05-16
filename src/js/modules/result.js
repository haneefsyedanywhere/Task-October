import resultDB from './resultDB';
import resultData from './resultDB';
const result__CheckBoxes = [].slice.call(document.querySelectorAll('.results__rightContent li>input'));
const resultsContainer = document.querySelector('#results_content');
const customRange_primary = document.querySelector('#customRange_primary');
const customRange_secondary = document.querySelector('#customRange_secondary');

const customRange_primaryValue = document.querySelector('#customRange_primary+p');
const customRange_secondaryValue = document.querySelector('#customRange_secondary+p');

const result__next = document.querySelector('#results__next');

const results = document.querySelector('.results');
const progress = document.querySelector('.progress');
export default function(){

    result__CheckBoxes.map((checkBox,index)=>{
        checkBox.addEventListener('click',()=>{
            if(checkBox.checked && index==0){
                for(var i =1; i<=3;i++){
                    result__CheckBoxes[i].checked = true;
                }
            }else if(!checkBox.checked && index==0){
                for(var i =1; i<=3;i++){
                    result__CheckBoxes[i].checked = false;
                }
            }
            if(checkBox.checked && index==4){
                for(var i =5; i<=7;i++){
                    result__CheckBoxes[i].checked = true;
                }
            }else if(!checkBox.checked && index==4){
                for(var i =5; i<=7;i++){
                    result__CheckBoxes[i].checked = false;
                }
            }
            generateResults(resultsContainer);
        });
    });


    customRange_primary.addEventListener('input',()=>{
        customRange_primaryValue.innerHTML = customRange_primary.value;
    });
    customRange_secondary.addEventListener('input',()=>{
        customRange_secondaryValue.innerHTML = customRange_secondary.value;
    });

    result__next.addEventListener('click',()=>{
        results.classList.remove('show');
        progress.classList.add('show');
    });

    function addContent(container,data){
        let template=`
        <tr>
            <td class="results__rateType">
                <span class="${data.className}">${data.rate}</span> <span> ${data.type}</span>
            </td>
            <td class="results__fairRate">
                ${data.fairRate} <span>/ ${data.apr}</span>
            </td>
            <td class="results__points">
                ${data.points} <div class="progressBar"><p class="${data.className}" style="width: ${data.credits};"></p></div>
            </td>
            <td class="results__perMonth">
                ${data.perMonth} <div class="progressBar"><p class="${data.className}" style="width: ${data.perMonthBar};"></p></div>
            </td>
        </tr>
        `;
        container.innerHTML+=template;
    }
    function generateResults(container){
        container.innerHTML="";
        resultData.map((data)=>{
            if(result__CheckBoxes[0].checked && data.type=="fixed"){
                addContent(container,data);
            }else{
                if(result__CheckBoxes[1].checked && data.rate=="15 years"){
                    addContent(container,data);
                }
                if(result__CheckBoxes[2].checked && data.rate=="20 years"){
                    addContent(container,data);
                }
                if(result__CheckBoxes[3].checked && data.rate=="30 years"){
                    addContent(container,data);
                }
            }

            if(result__CheckBoxes[4].checked && data.type=="Adjustable"){
                addContent(container,data);
            }else{
                if(result__CheckBoxes[5].checked && data.rate=="10/1"){
                    addContent(container,data);
                }
                if(result__CheckBoxes[6].checked && data.rate=="7/1"){
                    addContent(container,data);
                }
                if(result__CheckBoxes[7].checked && data.rate=="5/1"){
                    addContent(container,data);
                }
            }

        });
    }
    generateResults(resultsContainer);
}