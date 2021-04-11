const myToggler = document.getElementByClassName('toggler');
const navBarToggle = document.getElementByClassName('nav-links');

myToggler.addEventListener('click', function () {
    
    myToggler.classList.toggle('active');
});