
var colors=["Hello","Dear Visitor","Thank You","For","Visiting My Profile", "I'll let you","Explore About Me","Gaurav Raina","end"];
var i=0;
var interval=setInterval(Animation,666);


function Animation()
{
  if(colors[i]!="end")
  {
   document.querySelector(".name").innerHTML=colors[i];    
i++;
}}    
