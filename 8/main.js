takeElement(document.getElementById(("divhelp")));

function takeElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) 
{
document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} 
else 
{
 elmnt.onmousedown = takeMouseDown;
}

function takeMouseDown(e) 
{
 e = e || window.event;
 pos3 = e.clientX;
 pos4 = e.clientY;
 document.onmouseup = closeDragElement;
 document.onmousemove = takeElement1;
}

  function takeElement1(e) 
{
 e = e || window.event;
 pos1 = pos3 - e.clientX;
 pos2 = pos4 - e.clientY;
 pos3 = e.clientX;
 pos4 = e.clientY;
 elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
 elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

  function closeDragElement() 
{
   document.onmouseup = null;
   document.onmousemove = null;
}
}