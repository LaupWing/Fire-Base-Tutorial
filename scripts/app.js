// Which collection do you want to grab
const container = document.querySelector('ul#cafe-list')
const form = document.querySelector('form#add-cafe-form')

// Create element
function renderElement(doc){
    let li = document.createElement('li')
    let name = document.createElement('span')
    let city = document.createElement('span')

    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().name
    city.textContent = doc.data().city

    li.appendChild(name)
    li.appendChild(city)
    container.appendChild(li)
}

db.collection('Cafes').get().then(result=>{
    result.docs.forEach(x=>{
        console.log(x.data())
        renderElement(x)    
    })
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    db.collection('Cafes').add({
        name: form.name.value,
        city: form.city.value
    })
    form.querySelectorAll('input[type="text"]').forEach(input=>input.value = '')
})