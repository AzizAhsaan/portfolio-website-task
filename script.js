/*----------------toogle icon navbar */
let menuIcon=document.querySelector('#icon-menu')
let nav=document.querySelector('.nav')
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active')
}

let sections =document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY
        let offset=sec.offsetTop-150
        let height=sec.offsetHeight
        let id=sec.getAttribute('id')
        if(top>=offset&&top<offset+height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
    })
    let header=document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);



    //remove toggle icon and navbar when click navbar link
    
    menuIcon.classList.remove('bx-x')
    nav.classList.remove('active')
}
//scroll reveal//////////////////
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.homecontent, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });




//typed js//////////////////


const typed=new Typed('.multiple-text',{
    strings:['Fronted Developer','Gamer','paintist'],
    typeSpeed:100,
    backSpeed:1000,
    loop:true
})