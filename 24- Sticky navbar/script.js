const nav=document.getElementById('main');
const header=document.querySelector('header');
const logo=document.querySelector('.logo');
const siteWrap=document.querySelector('.site-wrap');
const topOfNav=nav.offsetTop;//precompute original pos of nav and keep it in a variable, coz when we do pos:fixed the offsettop will change.
window.addEventListener('scroll', function(e){
    //console.log( window.scrollY,nav.offsetTop);
    //console.dir(nav);
    if(window.scrollY>=topOfNav){
        nav.style.position="fixed";
        console.log(nav.offsetHeight);
        document.body.style.paddingTop='75px';
        logo.style.maxWidth="110px";
    }
    else{
        nav.style.position="relative";
        document.body.style.paddingTop=0;
        logo.style.maxWidth="0px";
    }
})