var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("delete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //var list = document.getElementById("myUL");
  //var item = list.getElementsByClassName("LI").value;
  //for(var i = 0; i < list.length; i++){
  //  if(item[i] == inputValue){
  //    alert("The item is already exist");
  //  }
  //}

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  document.getElementById("myInput").focus();
}