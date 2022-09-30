
let collectAll = async () => {
    let see = await fetch ("https://api.adviceslip.com/advice");
    let seeMe = await see.json();

    let numberOne = document.querySelector('h1')
    numberOne.innerHTML =  `ADVICE #${seeMe.slip.id}`
    let textOne = document.querySelector('p')
    textOne.innerHTML = `"${seeMe.slip.advice}"`
 
    let btn = document.querySelector('img');
    btn.addEventListener('click', collectAll);
}
collectAll()


// alert('come')
// console.log(btn)