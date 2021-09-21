const upwardButton = document.querySelector('.up-button');
const downwardButton = document.querySelector('.down-button');
const sliderSidebar = document.querySelector('.sidebar');
const maineSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = maineSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sliderSidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
    if (direction === 'upward') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'downward') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;
    maineSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sliderSidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

upwardButton.addEventListener('click', () => {
    changeSlide('upward');
});

downwardButton.addEventListener('click', () => {
    changeSlide('downward');
});
