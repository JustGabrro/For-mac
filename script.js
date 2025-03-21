AOS.init({offset:1});

const hamburg = document.querySelector('.hamburg')
        const cancel = document.querySelector('.cancel')
        const navbar = document.querySelector('.dropmenu');
        
        hamburg.addEventListener('click', ()=>{
            navbar.style.transform = "translateY(0px)"
            hamburg.style.display = 'none'
        })
        cancel.addEventListener('click', ()=>{
            navbar.style.transform = "translateY(-300px)"
            hamburg.style.display = 'block'
        })