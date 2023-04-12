const savebtn = document.querySelector('.save-button');
let templateText = document.querySelector('#template').value;
let templateTitle = document.querySelector('#template-title').value;
let templates = [
    {
    title: `${templateTitle}`,
    text: `${templateText}`
}];

//Could be best to save it to a data base. Pocketbase is a good spot to check it out

//This would need a models folder to outline the data

//Create an object that takes in a title and text

//Add input values into that object with the correct key

//Store that locally or however chrom extension wants you to store it

//Loop through and display it as an accordian from bootstrap
//*for of loop?

//Display template literal and append


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
console.log(templateText);

    chrome.storage.local.set({ title: `${templateTitle}`, text: `${templateText}` }).then(() => {
        console.log("Value is set to " + value);
      });
      
      chrome.storage.local.get(["title", "text"]).then((result) => {
        console.log("Value currently is " + result.title);
      });
    }
//How do I save the title and the text together?


//Template literal for displaying saved information. Get something from boot strap and add in a delete buttong and a copy to clipboard button
//* Add a title with the copy to clipboard button next to that?
function displayTemplate () {
    for (let index = 0; index < templates.length; index++) {

        let templateDisplay = $(`
        <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ${templates.title[0]}
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${templates.text[0]}
        <button type="button" class="btn btn-outline-primary copy-button">
      Copy to Clipboard
      </button>
      </div>
    </div>
  </div>
        `)
        $('.savedContent').append(templateDisplay)
    }
}

//Copy text to clipboard
function copyText () {
    let copyTemplate = document.getElementById('templateToCopy');

    copyTemplate.select();
    copyTemplate.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyTemplate.value);
    alert("Copied to Clipboard!")

};


//Event Listeners
savebtn.addEventListener("click", function (){
    saveTemplate();
    displayTemplate();
});

//Will need event listener for the copy text function