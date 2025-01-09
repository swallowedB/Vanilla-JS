const links = document.querySelector(".links");
const navtoggle = document.querySelector(".nav-toggle");

navtoggle.addEventListener('click', () => {
  if(links.classList.contains('show-links')){
    links.classList.remove('show-links')
  }
  else{
    links.classList.add("show-links");
  }
});