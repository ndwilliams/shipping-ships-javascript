import { CargoShipsList } from "./CargoShips.js"
import { DockList } from "./Docks.js"
import { ShipHaulerList } from "./ShipHaulers.js"

const mainContainer = document.querySelector("#container")

const appplicationHTML = `
<h1 class="title">Shipping Ships</h1>
<article class="list-container">
<article class="details">
    <section class="detail--column list detail_ships">
    <h2>Docks</h2>
    ${DockList()}
    </section>
</article>
<article class="details">
    <section class="detail--column list detail_ships">
    <h2>Ship Haulers</h2>
    ${ShipHaulerList()}
    </section>
</article>
<article class="details">
    <section class="detail--column list detail_ships">
    <h2>Cargo Ships</h2>
    ${CargoShipsList()}
    </section>
</article>
</article>
`

mainContainer.innerHTML = appplicationHTML
