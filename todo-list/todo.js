// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

  let editInput = document.createElement('input');
  editInput.className = "inputEdit";
  editInput.classList.add('inputToggle');
  myNodelist[i].appendChild(editInput);

  //create button
  let editButton = document.createElement('button');

  //edit content
  editButton.textContent = "Update";
  editButton.className = "buttonEdit";
  editButton.classList.add('inputToggle');

  //add listeners
  editButton.addEventListener('click', function() {
    editInput.parentElement.firstChild.textContent = editInput.value;
   })

   myNodelist[i].appendChild(editButton);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//create a new list item as user enters item into input field
var inputter = document.getElementById("inputField");
var shower = document.getElementById("showText");
inputter.oninput = function inputHandler(e) {
  shower.textContent = e.target.value;
};

