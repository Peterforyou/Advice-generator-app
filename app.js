let collectAll = async () => {
    let see = await fetch ("https://api.adviceslip.com/advice");
    let seeMe = await see.json();

    let numberOne = document.querySelector('h1')
    numberOne.innerHTML =  `ADVICE #${seeMe.slip.id}`
    let textOne = document.querySelector('p')
    textOne.innerHTML = `"${seeMe.slip.advice}"`
}

let btn = document.getElementById('btn');
btn.addEventListener('click', collectAll)

// load to the screen when opened
window.onload = collectAll()
