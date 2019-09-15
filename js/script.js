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

// Edit notes model
$('.modal-toggle').on('click', function (e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

const inptitle = document.getElementById("inptitle");
const inpdescription = document.getElementById("inpdescription");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("myUL");

btnInsert.onclick = function () {
    const title = inptitle.value;
    const description = inpdescription.value;

    if (title && description) {
        localStorage.setItem(title, description);
        location.reload();
    }
};

rmItem.onclick = function (){
    const title = inptitle.value;
    const description = inpdescription.value;

    if (title && description) {
        localStorage.removeItem(title, description);
        location.reload();
    }
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `
    <li>
        <i class="fa fa-comments align-left" aria-hidden="true"></i>  
        <a href="#">${key}</a>
        <div class="align-right note-content">
            <p>${value}</p>
        </div>
        <div class="edit-delete">
            <p class="edit-note">Edit</p>
            <p class="Delete-note" id="rmItem">Delete</p>
        </div>                    
    </li>
        
    `;
}






