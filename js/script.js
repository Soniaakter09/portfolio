// function projects(){
// fetch('')
// .than(res => res.json())
// .than(data => console.log(data))

// }
function loadProject(){
    fetch('./project.json')
    .then(res => res.json())
    .then(data => displayProject(data))
}
loadProject();

function displayProject(data) {
    const box = document.getElementById('project')

    for(const protfolio of data){
      console.log(protfolio);
        const div = document.createElement('div');
        div.innerHTML = `
    
        
      
        <div class="card" style="width: 22rem;">
          <img src="${protfolio.images}" class="card-img-top" alt="..."> 
          <h4>${protfolio.skill}</h4>  
        </div>
      

   
    
    

  
        `;
       box.appendChild(div);
    }
}