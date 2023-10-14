
//change navbar styles

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

// toggle menu navbar

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

const closeNav  = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click',closeNav);


  // Function to open the login overlay
  function openLoginOverlay() {
    document.getElementById('login-overlay').style.display = 'flex';
  }

  // Function to open the sign-up overlay
  function openSignupOverlay() {
    document.getElementById('signup-overlay').style.display = 'flex';
  }

  // Function to close overlays
  function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
  }
