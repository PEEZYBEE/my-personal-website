document.querySelectorAll('a[href^="#"]').forEach
   (anchor => {
     anchor.addEventListener('click', function (e)) {
        e.prevent
     }
   })