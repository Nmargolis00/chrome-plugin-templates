const savebtn = document.querySelector('.save-button');
const templateDisplay = document.querySelector('.template-dispay');
let templates = [];


//Load previous saved templates from local storage



//Save input to local storage and add to empty array

function saveTemplate (){
    let templateEl = document.querySelector('#template').value;
    //Only save a unique value
    if(!templateEl.includes(templates)) {
        templates.push(templateEl);
        localStorage.setItem("templates", JSON.stringify(templates))
        console.log(templates);
    }
    displayTemplate(templates);
}

//Template literal for displaying saved information. Get something from boot strap and add in a delete buttong and a copy to clipboard button

function displayTemplate (templates) {
    templateDisplay.innerHTML = "";
    for (let index = 0; index < templates.length; index++) {
        // You need to add in how you want the data displayed
    }
}

//Loop through array to display information


//Event Listeners
saveBtn.addEventListener("click", function (){
    saveTemplate();
});