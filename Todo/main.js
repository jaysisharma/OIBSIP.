// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    span.className = "close";
    var icon = document.createElement("i");
    icon.className = "fas fa-trash-alt";
    span.appendChild(icon);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var descriptionInputValue = document.getElementById("desc").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("Write Something In It!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    if (descriptionInputValue !== '') {
        var descriptionSpan = document.createElement("span");
        descriptionSpan.className = "description";
        descriptionSpan.textContent = descriptionInputValue;
        li.appendChild(descriptionSpan);
    }

    var span = document.createElement("SPAN");
    span.className = "close";
    var icon = document.createElement("i");
    icon.className = "fas fa-trash-alt";
    span.appendChild(icon);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
