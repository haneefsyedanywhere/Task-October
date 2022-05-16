import viewUploadedFiles from './viewUploadedFiles';
import {openSection} from './helperFunction';

export default function(){
    window.findFileType = (file)=>{
        if(file.type.includes('pdf')){
          file.customType = "pdf";
        }else if(file.type.includes('jpeg')){
         file.customType = "jpg";
        }else if(file.type.includes('svg')){
          file.customType = "svg";
         }else if(file.type.includes('png')){
          file.customType = "png";
         }else if(file.type.includes('webp')){
          file.customType = "webp";
         }
      }
      const dropzone = document.querySelector('#dropZone');
      let uploadedFiles = [];
      dropzone.ondrop = function(e){
        e.preventDefault();
        this.classList.remove('dragover');
        let file = e.dataTransfer.files[0];
         findFileType(file);
         uploadedFiles.push(file); 
         viewUploadedFiles(uploadedFiles);
         console.log(uploadedFiles);
      }
      dropzone.ondragover = function(e){
        this.classList.add('dragover');
        return false;
      }
      dropzone.ondragleave = function(e){
        this.classList.remove('dragover');
        return false;
      }
      const uploadBtn = document.querySelector('#uploadBtn');
      uploadBtn.addEventListener('change', function(){
        let file = this.files[0];
         findFileType(file);
         uploadedFiles.push(file);
         viewUploadedFiles(uploadedFiles);
        console.log(uploadedFiles);
      });
      
      window.deleteFile=(fileId)=>{
        uploadedFiles.splice(fileId,1);
        viewUploadedFiles(uploadedFiles);
      }
      const whatToUpload = [].slice.call(document.querySelectorAll('.upload__whatToUpload div'));
      const viewUploadSection = [].slice.call(document.querySelectorAll('.upload__section')); 
      
      whatToUpload.map((navItem,index)=>{
        navItem.addEventListener('click',()=>{openSection(index,whatToUpload,viewUploadSection)});
      });
      const upload__next = document.querySelector('#upload__next');
      const rates = document.querySelector('.rates');
      const upload = document.querySelector('.upload');  
      upload__next.addEventListener('click',()=>{
        upload.classList.remove('show');
        rates.classList.add('show');
    });
}