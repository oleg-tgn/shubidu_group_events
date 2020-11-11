var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  var hiddenText = document.getElementsByClassName("js-header-info-scroll")[0].getBoundingClientRect();
  console.log(window.pageYOffset);
  var btn = document.getElementsByClassName("download-event")[0];
  var pos = 290 - window.pageYOffset;
  console.log(pos);
  if (pos > 150)
    document.getElementsByClassName("download-event")[0].style.top = pos + 'px'; 

  prevScrollpos = currentScrollPos;
}
