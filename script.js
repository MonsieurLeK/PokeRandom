let image = document.getElementById("pokemon-img")
let pokeNumber = document.getElementById("pokemon-number")
let pokeName = document.getElementById("pokemon-name")
let button = document.getElementById("button")


async function AppelAPI() {
    let randomNumber = Math.ceil(Math.random() * 150) +1
    console.log(randomNumber)


    let data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)).json()
    console.log(data)

    image.src = data.sprites.front_default
    pokeName.innerText = data.name
    pokeNumber.innerText = "#" + data.id
}
AppelAPI()

button.addEventListener("click", () => {
    AppelAPI()
} )