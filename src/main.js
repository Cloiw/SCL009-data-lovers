/* Manejo del DOM */

const championImg = document.getElementById("championImg");
const selectChange = document.getElementById("userSelectedTag");


selectChange.addEventListener('change', () =>{ 
   

  let selectedTag = document.getElementById("userSelectedTag").value;
  
  
 
 championImg.innerHTML = ""; //
 for(let i=0;i< window.filteringResult(selectedTag,data).length;i++){
  champName= (window.filteringResult(selectedTag,data)[i]);
  champImg= data[champName].img;

  championImg.innerHTML += `<a class="btn btn-primary" aria-pressed="true" role="button">
  <div class="card" style="width: 8rem;">
  <img id="tamaño" src="${champImg}" class="card-img-top" alt="...">
  <div class="card-body">
    <p id="textNameCard" class="card-text">${champName}</p>
  </div>
</div></a>`

 
 }
});
console.log(championImg);





 
    
    
    
    
    

        
      
   


