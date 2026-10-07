import './style.css';
import hero1 from "./assets/mobile-image-hero-1.jpg";
import hero2 from "./assets/mobile-image-hero-2.jpg";
import hero3 from "./assets/mobile-image-hero-3.jpg";

import hero1_desktop from "./assets/desktop-image-hero-1.jpg";
import hero2_desktop from "./assets/desktop-image-hero-2.jpg";
import hero3_desktop from "./assets/desktop-image-hero-3.jpg";



const heroImage = document.getElementById("hero-image");
const heroDesktop = document.getElementById("hero-desktop");
const open = document.getElementById("open-button");
const close = document.getElementById("close-button");
const menu=document.getElementById("nav");
const dark = document.getElementById("dark")
const logo = document.getElementById("logo");
const background = document.getElementById("background");
const left_button = document.getElementById("left-button");
const right_button = document.getElementById("right-button");
const title = document.getElementById("title");
const description = document.getElementById("description");
const slides = [
    {
        image: hero1,
        image_desktop:hero1_desktop,
        title: "Discover innovative ways to decorate",
        description:
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: hero2,
        image_desktop:hero2_desktop,
        title: "We are available all across the globe",
        description:
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: hero3,
        image_desktop:hero3_desktop,
        title: "Manufactured with the best materials",
        description:
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

let currentSlide = 0;

function renderSlide(){
    const slide = slides[currentSlide];
    heroImage.src=slides[currentSlide].image;
    heroDesktop.srcset = slides[currentSlide].image_desktop;
    title.textContent = slide.title;
    description.textContent = slide.description;

}




open.addEventListener("click",
    ()=>{
    menu.classList.remove("hidden");
    dark.classList.remove("hidden");
    logo.classList.add("invisible");
    });

close.addEventListener("click",
    ()=>{
    menu.classList.add("hidden");
    dark.classList.add("hidden");
    logo.classList.remove("invisible");
    })

left_button.addEventListener("click",
    ()=>{
    currentSlide++;

    if (currentSlide >= slides.length){
        currentSlide = 0;
    }
    renderSlide();
    })


right_button.addEventListener("click",
    ()=>{
        currentSlide--;

        if (currentSlide < 0){
            currentSlide = slides.length - 1;
        }
        renderSlide();
    })


renderSlide();