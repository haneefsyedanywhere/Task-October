import lenderDB from './lenderDB';
import {toggleOptions,selectOption} from './helperFunction';

const lenderContainer = document.querySelector('.rates__lender tbody');

const rateYears = document.querySelector('#rate__yearsInput');
const yearDropDown = document.querySelector('#rate__yearsDropDown');

const ratePrice = document.querySelector('#rate__price');
const priceDropDown = document.querySelector('#rate__priceDropDown');

const rateSortBy = document.querySelector('.dropDown__sortByValue');
const rateSortByValue = document.querySelector('.dropDown__sortByValue span');
const sortByDropDown = document.querySelector('#rate__sortByDropDown');

const rates = document.querySelector('.rates');
const results = document.querySelector('.results');

const yearsOptions = [].slice.call(document.querySelectorAll('#rate__yearsDropDown li'));
const priceOptions = [].slice.call(document.querySelectorAll('#rate__priceDropDown li'));
const sortOptions = [].slice.call(document.querySelectorAll('#rate__sortByDropDown li'));

const nextPage = document.querySelector('#rates__nextPage');
const prevPage = document.querySelector('#rates__prevPage');
let start = 0,end = 8,dataToShow=[];
export default function(){

    function generateTemplate(container){
        container.innerHTML="";
        dataToShow=lenderDB.slice(start,end);
        dataToShow.map((data)=>{
            let template = `
            <tr>
                <td>
                    <img src="${data.lenderName.logo}" alt="" width="110px" height="42px">
                    <p>${data.lenderName.info}</p>
                </td>
                <td>
                    <p>${data.lenderAPR.apr}</p>
                    <p>${data.lenderAPR.date}</p>
                </td>
                <td>
                    <p>${data.lenderRate.rate}</p>
                    <p>${data.lenderRate.point}</p>
                    <p>${data.lenderRate.lock}</p>
                </td>
                <td>
                <p>${data.lenderFees.price}</p>
                <p>${data.lenderFees.point}</p>
                <p>${data.lenderFees.lock}</p>
                </td>
                <td>
                    <p>${data.lenderQuestions.number}</p>
                    <p>${data.lenderQuestions.comment}</p>
                </td>
                <td>
                    <button class="btn_tertiary rates__submit" onclick="viewNextSection()">NEXT</button>
                </td>
            </tr>
            <tr>
                <td colspan="6"><hr></td>
            </tr>
            `;    
            container.innerHTML += template;
        });
    }

    generateTemplate(lenderContainer);
    let loadingAnimation = `
    <tr>
        <td colspan="6">
            <div class="loadingAnimation">
                <span class="dots"></span>
                <span class="dots"></span>
                <span class="dots"></span>
            </div>
        </td>
    </tr>`;

    nextPage.addEventListener('click',()=>{
        if(start<(lenderDB.length-8)){
            start+=8;
            end+=8;
            if(prevPage.disabled) prevPage.disabled = false;
            if(start == lenderDB.length-8) nextPage.disabled = true;
            if(end>lenderDB.length){
                start = lenderDB.length-8;
                 end == lenderDB.length;
                }
                lenderContainer.innerHTML = loadingAnimation;
            setTimeout(()=>{generateTemplate(lenderContainer)},2000);    

        }else{
            console.error('Exceeding Data length');
            nextPage.disabled = true;
        }
    });
    prevPage.addEventListener('click',()=>{

        if(start>0){
            if(nextPage.disabled) nextPage.disabled = false;
            start-=8;
            end-=8;
            if(start == 0) prevPage.disabled = true;
            lenderContainer.innerHTML = loadingAnimation;
            setTimeout(()=>{generateTemplate(lenderContainer)},2000);   
        }else{
            console.error('Data length less than 0');
            prevPage.disabled = true;
        }
    });

    window.viewNextSection = function(){
        rates.classList.remove('show');
        results.classList.add('show');   
    }

    rateYears.addEventListener('click',()=>{
        toggleOptions(yearDropDown);
    });
    ratePrice.addEventListener('click',()=>{
        toggleOptions(priceDropDown);
    });
    rateSortBy.addEventListener('click',()=>{
        toggleOptions(sortByDropDown);
    });
    yearsOptions.map((option)=>{
        option.addEventListener('click',(e)=>{
            selectOption(e,rateYears);
            toggleOptions(yearDropDown);
        });
      })
    priceOptions.map((option)=>{
        option.addEventListener('click',(e)=>{
            selectOption(e,ratePrice);
            toggleOptions(priceDropDown);
        });
    });
    sortOptions.map((option)=>{
        option.addEventListener('click',(e)=>{
            rateSortByValue.innerHTML = e.target.innerHTML;
            toggleOptions(sortByDropDown);
        });
    });
    document.addEventListener('click',(e)=>{ 
        if((yearDropDown.classList.contains('show')) && e.target!==rateYears)
          toggleOptions(yearDropDown);
          if((priceDropDown.classList.contains('show')) && e.target!==ratePrice)
          toggleOptions(priceDropDown);
          if((sortByDropDown.classList.contains('show')) && e.target!==rateSortBy)
          toggleOptions(sortByDropDown);
      });

}