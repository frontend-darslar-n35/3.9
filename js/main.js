// var formEl = document.querySelector(".form")
// var distanceInputEl = document.querySelector(".form__input")

// var onFootDivEl = document.querySelector(".onfoot .time")
// var bicycleDivEl = document.querySelector(".bicycle .time")
// var carDivEl = document.querySelector(".car .time")
// var planeDivEl = document.querySelector(".plane .time")


// const ON_FOOT = 3.6
// const BICYCLE = 20.1
// const CAR = 70
// const PLANE = 800

// formEl.addEventListener("submit", function (event) {
//     event.preventDefault()
//     console.log("Form submit qilindi")
//     console.log(distanceInputEl.value - 0)


//     console.log(distanceInputEl.classList.contains("form__input--invalid"))

//     if (distanceInputEl.value - 0 < 0) {
//         distanceInputEl.classList.add("form__input--invalid")
//         distanceInputEl.classList.remove("form__input--valid")

//         return
//     } else {
//         distanceInputEl.classList.add("form__input--valid")
//         distanceInputEl.classList.remove("form__input--invalid")

//     }



//     onFootDivEl.textContent = normalizeTime(calculateTime(distanceInputEl.value, ON_FOOT))
//     bicycleDivEl.textContent = normalizeTime(calculateTime(distanceInputEl.value, BICYCLE))
//     carDivEl.textContent = normalizeTime(calculateTime(distanceInputEl.value, CAR))
//     planeDivEl.textContent = normalizeTime(calculateTime(distanceInputEl.value, PLANE))

//     // console.log(event)
// })

// // console.log(calculateTime(undefined, 10))


// function calculateTime(dimodalstance, speed) {
//     if (!distance || distance < 0) {
//         console.error("Masofa raqam bo'lishi kerak yoki 0 dan katta bo'lishi shart")
//         return
//     }

//     if (!speed || speed < 0) {
//         console.error("tezlik berilishi shart;yoki 0 dan katta bo'lishi shart speed > 0")
//         return
//     }

//     return distance / speed
// }

// function normalizeTime(time) {
//     time = Number(time)
//     if (isNaN(time)) {
//         console.error("Time son ko'rinishida bo'lishi kerak")
//         return
//     }

//     const hour = Math.floor(time)
//     time -= hour
//     const timeInMinut = time * 60
//     const minute = Math.floor(timeInMinut)

//     const second = Math.round((timeInMinut - minute) * 60)


//     return `${hour}soat ${minute}minut ${second} sekund`
// }


// const brotherAge = 20 // John Doe

// const myAge = prompt("Yoshingizni kiriting:", 0)

// const text = brotherAge > myAge ? "Sizning ukangiz bor" :
//             brotherAge === myAge ? "Sizning egizagingiz bor" :
//             "Sizning akangiz bor"


// if (brotherAge > myAge) {
//     text = "Sizning ukangiz bor"
// } else {
//     text = "Sizning akangiz bor"
// }

// console.log(text)

var toggleBtn = document.querySelector("[data-toggle=modal]")

var modalEl = document.querySelector(".modal")

function toggleModal() {
    modalEl.classList.toggle("modal--show")
    modalEl.classList.toggle("modal--close")
}

toggleBtn.addEventListener("click", function () {
    toggleModal()
})

modalEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        toggleModal()
    }
})