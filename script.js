
    async function fetchData(){
        try{
            const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
            const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if(!responce.ok){
                throw new Error("Could not Find Resource");
            }

            const data = await responce.json();
            const url = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonImage");
            imgElement.src = url;
            imgElement.style.display = "block";
        }
        catch(error){
            console.error(error);
        }
    }
