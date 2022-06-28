// const array1 = [5,10,25,50, 100, 3];
// const array2 = [5,10,25,50,100, 3];
// const array3 = [5,10,25,50,"200"];
// let strArr = ['sasha','maks','vova','denis', 'tanya']

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot');
console.log(slides);

let index = 0;

function activeSlide(n){
    for(let slide of slides){
       slide.classList.remove('active')
    }
    slides[n].classList.add('active');
}

function activeDot(n){
    for(let dot of dots){
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

function targetElem(targetEl){
    activeSlide(targetEl);
    activeDot(targetEl)
}

function nextSlide(){
    if(index === slides.length -1){
        index = 0;
        targetElem(index)
    }else{
        index++;
        targetElem(index)
    }
}

function prevSlide(){
    if(index === 0){
        index = slides.length -1;
        targetElem(index)
    }else{
        index--
        targetElem(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        targetElem(index)
    })
})


next.addEventListener('click', ()=> { nextSlide() })
prev.addEventListener('click', ()=>{ prevSlide() })
//setInterval(nextSlide, 2000);