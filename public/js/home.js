
const navbar = document.querySelector('header');
window.onscroll = () => {
    if(window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    } else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }
 }
// Mobile menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelectorAll('#hLink');
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
})
hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark');
    })
})

// Faq
const faqs = document.querySelectorAll('#faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('#faq_icon i');
        if(icon.className=='fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }else{
            icon.className = "fa-solid fa-plus";
        }
        
    })
})

//sign in 
document.addEventListener('DOMContentLoaded', function() {
    var signInForm = document.getElementById('signInForm');

    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sign in successful!');
    });
});


