export const pokemonIds = [1,20,30,40];
// pokemonIds.push(10)
// pokemonIds.push(+'1')
// console.log(pokemonIds)

//Objetos Literales

// export const pokemon = {
//     id: 1,
//     name: 'Bulbasaur',
//     age: 23
// }

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 23
}

console.log(bulbasaur)

export const pokemons: Pokemon[] = [];
pokemons.push( bulbasaur)