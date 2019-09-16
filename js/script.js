// Search filter js
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


$('.modal-toggle').on('click', function (e) {
    e.preventDefault();
    $('.addmodal').toggleClass('is-visible');
});



const inptitle = document.getElementById("inptitle");
const inpdescription = document.getElementById("inpdescription");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("myUL");

const isEditModal = document.getElementById("isEditModal");
const inpEdiTtitle = document.getElementById("inpEdittitle");
const inpEditDescription = document.getElementById("inpEditdescription");
const btnEdit = document.getElementById("btnEdit");
const txtareaInJs = document.getElementById("txtareaInJs");

var x = document.getElementById("EditNote")



btnInsert.onclick = function () {
    const title = inptitle.value;
    const description = inpdescription.value;

    if (title && description) {
        localStorage.setItem(title, description);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `
    <li>
        <i class="fa fa-comments align-left" aria-hidden="true"></i>  
        <a href="#">${key}</a>
        <div class="align-right note-content" id="noteContent">
            <p>${value}</p>
        </div>
        <div class="edit-delete" id="editDelete">
            <p class="edit-note" id="editItem">Edit</p>
            <p class="Delete-note" id="rmItem">Delete</p>
        </div>                   
    </li>    
    `;
}
   

var items = document.querySelectorAll("#myUL li"),
tab = [], index;


/////////////////////////////////////         Edit notes

// btnEdit.onclick = function () {
//     const title = inptitle.value;
//     const description = inpdescription.value;

//     if (title && description) {
//         localStorage.setItem(title, description);
//         location.reload();
//     }
// };


for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    items[i].querySelector("#editDelete #editItem").onclick = function() {
        x.style.display = "block";
        index = tab.indexOf(items[i].innerHTML);
        inpEdiTtitle.value =  localStorage.getItem(key);

        inpEditDescription.value = localStorage.getItem(value);
        console.log(inpEdiTtitle.value, inpEditDescription.value);
    };
};


///////////////////////////////////           add values to the array and delete note

for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    items[i].querySelector("#editDelete #rmItem").onclick = function() {
        index = tab.indexOf(items[i].innerHTML);
        localStorage.removeItem(key,value);
        location.reload();
    };
};