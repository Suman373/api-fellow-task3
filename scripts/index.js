const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const appForm = document.getElementById('form');
const searchInput = document.getElementById('inputField');
const pokeCard = document.getElementById('pokemon-card');
const pokeName = document.getElementById('poke-name');
const pokeType = document.getElementById('poke-type');
const pokeImage = document.getElementById('poke-image');
const pokeAbilities = document.getElementById('poke-abilities');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `Your api key`,
		'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
	}
};

pokeCard.style.display='none';
let result = [];


appForm.addEventListener('submit', function(e){
    e.preventDefault();
    getPokemons();
});

function setData(item){
    console.log(item);
    pokeName.innerText = `${item.name}`;
    pokeType.innerText = `${item.type[0]}`
    pokeImage.setAttribute('src',`${item.thumbnailimage}`);
    pokeCard.style.display = 'flex';
}

async function getPokemons(){

    const searchText = searchInput.value;
    console.log("Searching", searchText);

    const data = await fetch(`https://pokedex2.p.rapidapi.com/pokedex/uk/${searchText}`, options)
	.then(response => response.json())
	.then(response => {
        return response;
    })
	.catch(err =>{
        alert("Something went wrong!");
        console.error(err);
    });

    // console.log(data[0]);
    result = data[0];
    setData(result);

    // await fetch(`${API_URL}/ditto`).then((res)=>res.json()).then((data)=> console.log(data)).catch(err=> console.log(err));
    searchInput.value = ""; // reset form
}



