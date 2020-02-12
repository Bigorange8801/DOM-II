const block = document.querySelectorAll('.block');

Array.from(blocks).map(block => {
    block.addEventListener('click', function(e) {	  block.addEventListener('mousedown', function(e) {
      blocksDiv.prepend(e.target)	    block.classList.add('move-box');
      console.log('mousedown');
    })	  })
  })	  block.addEventListener('mouseup', function(e) {
      blocksDiv.prepend(e.target)
    });
  });