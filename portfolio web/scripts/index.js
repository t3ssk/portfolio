const kontakt = document.querySelector('#kontakt');
const kontaktForm = document.querySelector('.kontakt')
const turnOff = document.querySelector('.fa-times')

kontakt.addEventListener('click', function(){
    kontaktForm.classList.add('active')
    kontakt.classList.add('active')
})

turnOff.addEventListener('click', function(){
    kontaktForm.classList.remove('active')
    kontakt.classList.remove('active')
})