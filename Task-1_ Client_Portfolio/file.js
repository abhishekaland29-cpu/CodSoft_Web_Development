const wrapper = document.querySelector('.projects-wrapper');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let counter = 0;

nextBtn.addEventListener('click', () => {
    const card = document.querySelector('.project-info');
    const cardWidth = card.clientWidth + 20; 
    const maxScroll = wrapper.scrollWidth - wrapper.parentElement.clientWidth;
    
    if ((counter + 1) * cardWidth <= maxScroll + cardWidth) {
        counter++;
        wrapper.style.transform = `translateX(${-cardWidth * counter}px)`;
    } else {
        counter = 0;
        wrapper.style.transform = `translateX(0px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const card = document.querySelector('.project-info');
    const cardWidth = card.clientWidth + 20;

    if (counter > 0) {
        counter--;
        wrapper.style.transform = `translateX(${-cardWidth * counter}px)`;
    }

});
