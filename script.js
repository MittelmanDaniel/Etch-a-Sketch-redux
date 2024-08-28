



const container = document.querySelector("#container")



function set_grid(grid_dim){
    container.innerHTML=''
    // iterate over rows
    for(let i =0; i<grid_dim; i++){
        //iterate over columns
        const row = document.createElement('div')
        row.classList.toggle('row')
        console.log(i)
        for(let j = 0; j<grid_dim;j++){

            const pixel = document.createElement('div')

            pixel.classList.toggle('pixel')

            pixel.addEventListener('mouseover', ()=> {
                pixel.style.backgroundColor = 'black'
            })

            row.appendChild(pixel)

        }

        container.appendChild(row)
}
}

set_grid(16)

const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    let num = +prompt('What should the dimensions be?')
    num = Math.min(num,100)
    num = Math.max(num, 0)
    set_grid(num)
})





