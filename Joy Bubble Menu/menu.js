//// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navbarContainer = document.getElementById('navbarContainer');

    // Event listener for the left arrow button
    leftArrow.addEventListener('click', function () {
        // Scroll the navbar to the left by 150 pixels
        navbar.scrollBy({
            left: -150,
            behavior: 'smooth' // Smooth scrolling
        });
    });

    // Event listener for the right arrow button
    rightArrow.addEventListener('click', function () {
        // Scroll the navbar to the right by 150 pixels
        navbar.scrollBy({
            left: 150,
            behavior: 'smooth' // Smooth scrolling
        });
    });

    // Event listener for the hamburger menu button
    hamburger.addEventListener('click', function () {
        // Toggle the 'open' class on the navbar container
        navbarContainer.classList.toggle('open');
    });
});


// --Back-to-top Button--
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});