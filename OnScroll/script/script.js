


let revealElements = document.querySelectorAll("[data-reveal]")

const scrollReveal = ()=>{
    revealElements.forEach((element,index)=>{
        const elementOnScrean = element.getBoundingClientRect().top < window.innerHeight ;
        if(elementOnScrean){
            element.classList.add("revealed");
        }else{
            element.classList.remove("revealed");
        }
    })
}

window.addEventListener("load",scrollReveal); 
window.addEventListener("scroll",scrollReveal);