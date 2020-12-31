const links=document.querySelectorAll('a');
const span=document.querySelector('.highlight');
/* links.forEach((link)=>{
    link.addEventListener('mouseenter',()=>{
        link.classList.add('highlight');
    })
    link.addEventListener('mouseleave',()=>{
        link.classList.remove('highlight');
    })
} ) */

//MAIN OBJECTIVE= getBoundingClientRect() 
links.forEach( (link)=>{
    link.addEventListener('mouseenter' , ()=>{
        //console.log(link.offsetHeight)
        span.style.height=link.getBoundingClientRect().height+"px";
        span.style.width=link.getBoundingClientRect().width+"px";
        //span.style.height="10px";
        span.style.top=window.scrollY+link.getBoundingClientRect().top+"px";//method returns a DOMRect object providing information about the size of an element and its position relative to the viewport!.
        span.style.left=window.scrollX+link.getBoundingClientRect().left+"px";
        console.dir(span.style.height);
    })
} )
