document.querySelectorAll('a[href^="#"]').forEach
   (anchor => {
     anchor.addEventListener('click')
   })