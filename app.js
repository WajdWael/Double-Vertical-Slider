// conatienr of the slides
const sliderContainer = document.querySelector(".slider-container")

// right and left slide
let rightSlider = document.querySelector(".right-slide")
let leftSlider = document.querySelector(".left-slide")

// up button and down button
let upBtn = document.querySelector(".up-button")
let donwBtn = document.querySelector(".down-button")

// length slide
let slidesLen = rightSlider.querySelectorAll("div").length

// the index
let activesSliderIndex = 0

leftSlider.style.top = `-${(slidesLen - 1) * 100}vh`

// Add Event Listener
upBtn.addEventListener('click', () => changeSlide("up"))
donwBtn.addEventListener('click', () => changeSlide("down"))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === "up") {
        activesSliderIndex++
        if (activesSliderIndex > slidesLen - 1) {
            activesSliderIndex = 0
        }
    } else if (direction === "down") {
        activesSliderIndex--
        if (activesSliderIndex < 0) {
            activesSliderIndex = slidesLen - 1
        }
    }
    rightSlider.style.transform = `translateY(-${activesSliderIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(
    ${activesSliderIndex * sliderHeight}px)`
}
