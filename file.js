
var colors=["Hello","Mr. Recruiter","Thank You for","Visiting My Profile","My Name is","Gaurav","and I'll let you","Explore About Me","Gaurav Raina","end"];
var i=0;
var interval=setInterval(Animation,666);


function Animation()
{
  if(colors[i]!="end")
  {
   document.querySelector(".name").innerHTML=colors[i];    
i++;
}}    
