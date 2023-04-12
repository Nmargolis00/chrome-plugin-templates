const savebtn = document.querySelector('.save-button');
let templates = [];



//Load previous saved templates from local storage
init();

function init() {
    let savedTemplates = JSON.parse(localStorage.getItem('templates'));
    if (savedTemplates) {
        templates = savedTemplates;
    }
};

//Save input to local storage and add to empty array

function saveTemplate (){
    let templateEl = document.querySelector('#template').value;
    console.log(templateEl);
    //Only save a unique value
    if(!templateEl.includes(templates)) {
        templates.push(templateEl);
        localStorage.setItem("templates", JSON.stringify(templates))
        
    }
    console.log(templates);
}

//Template literal for displaying saved information. Get something from boot strap and add in a delete buttong and a copy to clipboard button
//* Add a title with the copy to clipboard button next to that?
function displayTemplate () {
    for (let index = 0; index < templates.length; index++) {

        let templateDisplay = $(`
        <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ${templateTitle}
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${templates.list[0]}
        <button type="button" class="btn btn-outline-primary copy-button">
      Copy to Clipboard
      </button>
      </div>
    </div>
  </div>
        `)
        $('.form-control').append(templateDisplay)
    }
}

//Copy text to clipboard
function copyText () {
    let copyTemplate = document.getElementById('templateToCopy');

    copyTemplate.select();
    copyTemplate.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTemplate.value);
    alert("Copied to Clipboard!")

}


//Event Listeners
savebtn.addEventListener("click", function (){
    saveTemplate();
});