import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
//Manera explicita
// export class Pokemon {

//     public id: number;
//     public name: string;

//     constructor( id:number, name:string ) {
//         this.id = id;
//         this.name = name;
//         console.log('Constructor llamado')
//     }
// }
// export const charmander = new Pokemon(4, 'Charmander');
//Manera Corta
export class Pokemon {
        get imageUrl(): string{
            return `https://pokemon.com/${ this.id }.jpg`
        }

        constructor( 
            public readonly id: number,
            public name: string,
        ) {}
        public scream(){
            console.log(`${ this.name.toUpperCase() }!!!`)
            this.speak()
        }
        private speak(){
            console.log(`${ this.name }, ${ this.name }`)
        }
        async getMoves(): Promise<Move[]> {
        //    const moves = 10;
           const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
           console.log(data.moves)
           return data.moves
        }
    }
    export const charmander = new Pokemon(4, 'Charmander');
    console.log(charmander)
    // charmander.speak()

    // charmander.scream()
    charmander.getMoves()