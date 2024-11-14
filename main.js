import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Counter</h1>
    <span class="counter"></span>
    <section class="btns">
      <button class="decrease">decrease</button>
      <button class="reset">reset</button>
      <button class="increase">increase</button>
    </section>
  </div>
`

setupCounter()
