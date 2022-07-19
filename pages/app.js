const items = document.getElementById ('items')
const templateCard = document.getElementById ('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener ('DOMContentLoaded', () => {
    fetchData()
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
    items.appendChild(fragment)
}