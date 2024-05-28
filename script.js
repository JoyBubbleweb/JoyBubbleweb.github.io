// ---Gallery Image Pop-up---
document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick = () => {
        const popupImg = document.querySelector('.popup-img img'); // Select the img element inside .popup-img
        const src = image.getAttribute('src');
        const alt = image.getAttribute('alt');
        const isPortrait = image.classList.contains('portrait');

        // src and alt attributes of the popup image
        popupImg.src = src;
        popupImg.alt = alt;

        // Add or remove the portrait/landscape class based on the original image
        if (isPortrait) {
            popupImg.classList.add('portrait');
            popupImg.classList.remove('landscape');
        } else {
            popupImg.classList.add('landscape');
            popupImg.classList.remove('portrait');
        }

        // Display the pop-up
        document.querySelector('.popup-img').style.display = 'block';
    };
});

// Close pop-up when the close button (×) is clicked
document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
};


// ---Products Carousel---
const wrapper = document.querySelector(".product-slider");
const carousel = document.querySelector(".pd-carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Number of cards in the product carousel
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Infinite Scrolling - insert first cards to end of carousel
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Infinite Scrolling - insert last cards to beginning of carousel
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Hide duplicate cards
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Carousel autoplay
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2700);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


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


// --Pop-Up-Ad---
// Get the popup
var popup = document.getElementById("popup");

// Get the <span> element that closes the popup
var close = document.getElementById("close");

// When the user opens the page, display the popup
window.onload = function () {
    popup.style.display = "flex";
}

// When the user clicks on <span> (x), close the popup
close.onclick = function () {
    popup.style.display = "none";
}

// Optional: Close the popup when the user clicks outside of the popup
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}