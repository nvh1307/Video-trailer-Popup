const btnEl = document.querySelector('.btn')

const closeVid = document.querySelector(".close-icon")

const trailerEl = document.querySelector(".trailer-container")

const videoEl = document.querySelector(".video")
btnEl.addEventListener('click',()=>{
    
    trailerEl.classList.remove('active')
})

closeVid.addEventListener('click',()=>{
    trailerEl.classList.add('active')
    videoEl.pause()
    videoEl.currentTime=0
})