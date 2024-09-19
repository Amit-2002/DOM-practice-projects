const main = document.querySelector('main')
// console.log(body)
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(btn){
    // console.log(btn)
    btn.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        console.log(e.target.id)

        if (e.target.id === 'red') {
            main.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green'){
            main.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue'){
            main.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellowgreen'){
            main.style.backgroundColor = e.target.id
        }
    })
})