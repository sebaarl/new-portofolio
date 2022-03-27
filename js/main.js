const navMenu = document.getElementById('nav-menu') 
const navToggleMenu = document.getElementById('nav-toggle')
const navCloseMenu = document.getElementById('nav-close')

if (navToggleMenu) {
    navToggleMenu.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navCloseMenu) {
    navCloseMenu.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header--nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.header--nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}