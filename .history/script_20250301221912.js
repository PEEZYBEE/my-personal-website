document.querySelectorAll('a[href^="#"]').forEach
   (anchor => {
     anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute
        ('href')).scrollIntoView({
            behavior:'smooth'
        });
     });
   });


   window.addEventListener('scroll', () => {
    const navbar =document.querySelector('.navbar');
    window.scrolly > 50 ?
     navbar.style .backgroundColor = ' rgba'
   })