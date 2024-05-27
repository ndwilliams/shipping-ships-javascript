import { DockList } from "./Docks.js"

const mainContainer = document.querySelector("#container")

const appplicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section class="detail--column list detail_cities">
    <h2>Docks</h2>
    ${DockList()}
    </section>
</article>
`

mainContainer.innerHTML = appplicationHTML
