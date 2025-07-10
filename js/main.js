const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle')
      navClose = document.getElementById('close')
if(navToggle) {
    
        navToggle.addEventListener('click',()=>{

            navMenu.classList.add('show-menu')

        })
    }


if(navClose) {
    
        navClose.addEventListener('click',()=>{

            navMenu.classList.remove('show-menu')

        })
    }

const navLink= document.querySelectorAll('link')
function linkAction(){
    const navMenu = document.getElementById('menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click', linkAction))


function scrollHeader() {
    const header = document.getElementById('header')

    if(this.scrollY >=50) header.classList.add('scroll-header'); else header.classList.add
    remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// Swiper Initialization
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredSlides: true,        // Correct spelling
    slidesPerView: 'auto',
    loop: true                   // Use boolean, not string
});

// Tabs Functionality
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        // Remove 'service-active' from all contents
        tabContents.forEach(content => {
            content.classList.remove('service-active');
        });

        target.classList.add('service-active')

        tabs.forEach(tab => {
            tab.classList.remove('service-active');
        });

        tab.classList.add('service-active')
    });
});
