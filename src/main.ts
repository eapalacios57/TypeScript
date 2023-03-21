import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { name, age } from './bases/types'
// import { bulbasaur } from './bases/objects'
// import { charmander } from './bases/clases'
// import { charmander } from './bases/injection'
import { charmander } from './bases/decorators2';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      !!!Click ${name} ${ age } ${charmander.name} on the Vite and TypeScript logos to learn more¡¡¡
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
