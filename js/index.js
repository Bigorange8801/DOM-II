// Your code goes here
const navTag = document.querySelector('nav');
navTag.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 700);//turn back time
  });
  
  
