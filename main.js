// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn && navLinks){
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a nav link is clicked (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if(navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
      }
    });
  });
}

// ===== Smooth Scroll (Optional) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Simple Contact Form Validation (Only runs if form exists) =====
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const mobile = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
    const feedback = contactForm.querySelector('select').value;

    if(name === "" || email === "" || mobile === "" || message === "" || feedback === ""){
      alert("Please fill in all the fields!");
      e.preventDefault(); // Stop form from submitting
    } else {
      alert("Thank you for contacting us! We will get back to you soon.");
    }
  });
}
