const cards = document.getElementById ('cards')
const templateCard = document.getElementById ('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener ('DOMContentLoaded', () => {
    fetchData()
})
cards.addEventListener ('click', e => {
    addCarrito(e)
})

const fetchData = async () => {
    try {
        const res = await fetch ('api.json')
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    }catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('.titulo').textContent = item.title
        templateCard.querySelector('.precio').textContent = item.precio
        templateCard.querySelector('img').setAttribute("src", item.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    // console.log (e.target)
    // console.log (e.target.classList.contains('btn.dark'))
    if (e.target.classList.contains('btn-dark')){
        setCarrito (e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    console.log (objeto)
    const producto = {
        id: objeto.querySelector ('.btn-dark').dataset.id,
        title: objeto.querySelector ('.titulo').textContent,
        precio: objeto.querySelector ('.precio').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}

    console.log (carrito)
}