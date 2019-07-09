// Your code goes here

const navTag = document.querySelector('nav');
navTag.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
  });
  navTag.addEventListener("mouseout", function(event){
      event.target.style.color="";
  })
  
const btnAct = document.querySelectorAll('.btn');

btnAct[0].addEventListener('click', function(e2){
    alert("Sun Glass Country!");
})
btnAct[1].addEventListener('click', function(e2){
    alert('One Small Step!');
})
btnAct[2].addEventListener('click', function(e2){
    alert('Going to Need a Bigger Boat!');
})
btnAct[0].addEventListener('mouseover', (e3) => {
    e3.target.innerHTML = "Bring Lotion!";
})
btnAct[1].addEventListener('mouseover', function(e3){
    e3.target.innerHTML = "Get to Stepping!";
})
btnAct[2].addEventListener('mouseover', function(e3){
    e3.target.innerHTML = "I'm On A Boat!";
})

btnAct[0].addEventListener('mouseout', (e3) => {
    e3.target.innerHTML ="Sign Me Up!";
})
btnAct[1].addEventListener('mouseout', (e3) => {
    e3.target.innerHTML ="Sign Me Up!";
})
btnAct[2].addEventListener('mouseout', (e3) => {
    e3.target.innerHTML ="Sign Me Up!";
})
 
const imgFun = document.getElementsByTagName("img")
imgFun[0].addEventListener("mouseover", (e)=>{
    e.target.style.width="50rem";
});
imgFun[0].addEventListener("mouseout",(e)=>{
    e.target.style.width="";
});

//July 9 2019 updates

TweenMax.to("body", 2, {x:200, rotation:360});