// // write your code here
// // const showOneRamen = document.querySelector('div#ramen-menu')
// const ramenMenu = document.querySelector('div#ramen-menu')

// function renderRamenMenu(){
//     fetch('http://localhost:3000/ramens')
//         .then(resp => resp.json())
//         .then(ramenArr => {
//             ramenArr.forEach(ramenObject => {
//                 // const img = document.createElement('img')
//                 // img.src = ramenObject.image
//                 // // console.log(img)
//                 // const ramenMenu = document.querySelector ('div#ramen-menu')
//                 // ramenMenu.append(img)
//                 renderOneMenuImage(ramenObject)
//             })
//         })
// }

// function renderOneMenuImage(ramenObject){
//     const img = document.createElement('img')
//     img.src = ramenObject.image
//     img.dataset.id = ramenObject.id
//     // console.log(img)
//     // const ramenMenu = document.querySelector('div#ramen-menu')
//     ramenMenu.append(img)
// }
// //deliverable 2
// //find common parent --- in this case div#ramenmenu


// function detailOneRamen(ramenObj){
//     const detailImg = document.querySelector('img.detail-image')
//     detailImg.src = ramenObj.image
//     detailImg.alt = ramenObj.name

//     const detailH2 = document.querySelector('h2.name')
//     detailH2.textContent = ramenObj.name

//     const detailH3 = document.querySelector('h3.restaurant')
//     detailH3.textContent = ramenObj.restaurant

//     const ratingInput = document.querySelector('input#rating')
//     ratingInput.value = ramenObj.rating

//     const commentInput = document.querySelector('textarea#comment')
//     commentInput.value = ramenObj.comment 

//     //adding id to be able to select an img later
//     detailedRamenUpdateForm.dataset.id = ramenObj.id 


// }


// ramenMenu.addEventListener('click', event => {
//     // console.log(event.target)
//     if (event.target.matches('img')) {
//         console.log(event.target)
//         //at this point in time we need a way to identify each image; 
//         // we added this when we rendered the image
//         fetch (`http://localhost:3000/ramens/${event.target.dataset.id}`)
//             .then(response => response.json())
//             .then(ramenObj => {

//                 detailOneRamen(ramenObj)
//                 console.log(ramenObj)

//                 //find what we want to update, update by selcting object and updating with 
//                 // database info

//                 // const detailImg = document.querySelector('img.detail-image')
//                 // detailImg.src = ramenObj.image
//                 // detailImg.alt = ramenObj.name

//                 // const detailH2 = document.querySelector('h2.name')
//                 // detailH2.textContent = ramenObj.name

//                 // const detailH3 = document.querySelector('h3.restaurant')
//                 // detailH3.textContent = ramenObj.restaurant

//                 // const ratingInput = document.querySelector('input#rating')
//                 // ratingInput.value = ramenObj.rating

//                 // const commentInput = document.querySelector('textarea#comment')
//                 // commentInput.value = ramenObj.comment 

//                 // refactored in to the above function
//             })
//     }
// })

// const detailedRamenUpdateForm = document.querySelector('form#ramen-rating')

// detailedRamenUpdateForm.addEventListener('submit', event => {
//     event.preventDefault()
//     console.log(event.target)

//     const rating = event.target.rating.value   //this is the form we are populating
//     const comment = event.target.comment.value //value gives us the info the user inputs

//     fetch(`http://localhost:3000/ramens/${event.target.dataset.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({ rating: rating, comment: comment }) 
//     })

//         .then(respone => respone.json())
//         .then(updatedRamenObj => {
//             console.log(updatedRamenObj)
//         })
//         //in this case the .then isn't neccassary because were just updating/displaying 
// })




// renderRamenMenu()


/***********NEW TRY****************/


const ramenMenu = document.querySelector('div#ramen-menu')
// console.log(ramenMenu)

function renderRamenMenu () {
    fetch('http://localhost:3000/ramens')
    .then (resp => resp.json())
    .then (ramenArr => {
        ramenArr.forEach(ramenObject => {

            renderOneRamen(ramenObject)
        // const img = document.createElement ('img')
        // img.src = ramenObject.image
        // img.id = ramenObject.id
        // ramenMenu.append(img)  
        }) 
         
    })
}

function renderOneRamen(ramenObject){
    const img = document.createElement('img')
    img.src = ramenObject.image

    img.alt = ramenObject.name 

    img.dataset.id = ramenObject.id
    ramenMenu.append(img)

}


ramenMenu.addEventListener('click', event => {
    if (event.target.matches('img')) {
        // console.log(event.target)
        fetch(`http://localhost:3000/ramens/${event.target.dataset.id}`)
            .then(resp => resp.json())
            .then(ramenObj => {
                // console.log(ramenObj)
                const detailImg = document.querySelector('img.detail-image')
                detailImg.src = ramenObj.image

                detailImg.alt = ramenObj.name 

                const detailH2 = document.querySelector('h2.name')
                detailH2.textContent = ramenObj.name

                const detailH3 = document.querySelector('h3.restaurant')
                detailH3.textContent = ramenObj.restaurant

                let rating = document.querySelector('input#rating')
                rating.value = ramenObj.rating

                let comment = document.querySelector('textarea#comment')
                comment.value = ramenObj.comment

                updateForm.dataset.id = ramenObj.id 
                //you need this so the form know what id is being updated

            })
    }
}

)

const updateForm = document.querySelector('form#ramen-rating')



updateForm.addEventListener('submit', event => {
    event.preventDefault()
    
    //you have to find the things your inputting first
    const rating = event.target.rating.value

    const comment = event.target.comment.value 

    

    fetch(`http://localhost:3000/ramens/${event.target.dataset.id}`,{
        // populate them jawns by going to the database so they can persist
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({ rating: rating, comment: comment })
    })
    .then (resp => resp.json())
    // .then ()
})


 










renderRamenMenu ()