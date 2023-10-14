
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

function openRegistrationForm(eventId) {
    // Display the form overlay and blur the content
    var formOverlay = document.getElementById("form-overlay");
    var webpageContent = document.body;
    formOverlay.style.display = "flex";
    webpageContent.classList.add("blur");
  
    // Set the event name in the form (assuming the event name is available)
    var eventName = ""; // Provide the event name based on the event ID
    document.getElementById("event-name").textContent = eventName;
  
    // Prevent scrolling of the webpage when the form is open
    document.body.style.overflow = "hidden";
  }
  
  // Submit event registration form
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Perform form submission logic here
  
    // Hide the form overlay, show webpage content, and allow scrolling
    var formOverlay = document.getElementById("form-overlay");
    var webpageContent = document.body;
    formOverlay.style.display = "none";
    webpageContent.classList.remove("blur");
    document.body.style.overflow = "auto";
  });
  
