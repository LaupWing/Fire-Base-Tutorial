// Which collection do you want to grab
const container = document.querySelector('ul#cafe-list')
const form = document.querySelector('form#add-cafe-form')

// Create element
function renderElements(doc){
    let li = document.createElement('li')
    let name = document.createElement('span')
    let city = document.createElement('span')
    let cross = document.createElement('div')

    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().name
    city.textContent = doc.data().city
    cross.textContent = 'X'

    li.appendChild(name)
    li.appendChild(city)
    li.appendChild(cross)
    container.appendChild(li)

    cross.addEventListener('click', (e)=>{
        e.stopPropagation()
        let id = e.target.parentElement.getAttribute('data-id')
        console.log(id)
        db.collection('Cafes').doc(id).delete()
    })
}

function removeElement(id){-
    container.removeChild(document.querySelector(`li[data-id=${id}]`))
}
// db.collection('Cafes').get().then(result=>{
//     result.docs.forEach(x=>{
//         renderElement(x)    
//     })
// })



// Condition
// db.collection('Cafes').where('city', '==', 'Amsterdam').get().then(snapshot=>{
//     snapshot.docs.forEach(doc=>{
//         // console.log(doc.data())
//     })
// })

// Ordering
// db.collection('Cafes').orderBy('name').get().then(snapshot=>{
//     snapshot.docs.forEach(doc=>{
//         // console.log(doc.data())
//     })
// })

// Chaining
// db.collection('Cafes').where('city', '==', 'Amsterdam').orderBy('name').get().then(snapshot=>{
//     snapshot.docs.forEach(doc=>{
//         console.log(doc.data())
//     })
// })

// Realtime listener
db.collection('Cafes').orderBy('city').onSnapshot(snapshot=>{
    let changes = snapshot.docChanges()
    changes.forEach(change=>{
        console.log(change.doc.data())
        if(change.type === 'added')             renderElements(change.doc)
        else if(change.type === 'removed')      removeElement(change.doc.id)
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