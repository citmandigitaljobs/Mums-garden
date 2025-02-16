// HAMBURGER MENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
//AND ADDED EVENT LISTENER TO MAKE MENU CLOSE ON LINK CLICK
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    x.addEventListener("click", function () {
      x.style.display = "none";
    });
  }
  
  // Get the modal
  var modalparent = document.getElementsByClassName("modal_multi");
  // Get the button that opens the modal
  var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
  // Get the <span> element that closes the modal
  var span_close_multi = document.getElementsByClassName("close_multi");
  // When the user clicks the button, open the modal
  function setDataIndex() {
    for (i = 0; i < modal_btn_multi.length; i++) {
      modal_btn_multi[i].setAttribute("data-index", i);
      modalparent[i].setAttribute("data-index", i);
      span_close_multi[i].setAttribute("data-index", i);
    }
  }
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].onclick = function () {
      var ElementIndex = this.getAttribute("data-index");
      modalparent[ElementIndex].style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function () {
      var ElementIndex = this.getAttribute("data-index");
      modalparent[ElementIndex].style.display = "none";
    };
  }
  window.onload = function () {
    setDataIndex();
  };
  window.onclick = function (event) {
    if (event.target === modalparent[event.target.getAttribute("data-index")]) {
      modalparent[event.target.getAttribute("data-index")].style.display = "none";
    }
  };
  
  
  // TASK NOTES LIST
  // Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close-task";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close-task");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
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
    span.className = "close-task";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  