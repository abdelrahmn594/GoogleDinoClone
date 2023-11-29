// indicate where i am in the navbar
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('.banner .navbar ul li a');
  
    navLinks.forEach(function(link) {
      var section = document.querySelector(link.hash);
      // skip links that do not correspond to a section on the page
      if (!section) {
        return; 
      }
      //offsettop return the distance between the top of the page and the top of the current section
      var sectionTop = section.offsetTop;
      //offserheight return the height of the section
      var sectionBottom = section.offsetTop + section.offsetHeight ;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
  
        link.classList.add('active');
      }
    });
  });
  
