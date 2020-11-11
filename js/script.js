window.addEventListener('scroll', function() {
    var posBtn = 290 - window.pageYOffset;
    var posBorder = 313 - window.pageYOffset;
  
    if (posBtn > 150) {
      document.getElementsByClassName("download-event")[0].style.top = posBtn + 'px'; 
      document.getElementsByClassName("js-header-events-border")[0].style.top = posBorder + 'px'; 
    }
});