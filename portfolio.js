function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}

// Contact-form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    document.getElementById('popup').style.display = 'block';
    

    document.getElementById('contactForm').reset();
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
