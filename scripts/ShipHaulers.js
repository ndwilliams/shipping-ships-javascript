import { getCargoShips, getHaulers } from "./database.js"

const haulingShips = getHaulers()
const cargoShips = getCargoShips()

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target

	// Was a hauler list item clicked?
	if (itemClicked.dataset.type === "hauler") {
		// Get the id of the hauler clicked
		const hauler = parseInt(itemClicked.dataset.id)

		// Start a counter variable at 0
		let counter = 0

		// Iterate all of the shipping ships
		for (const ship of cargoShips) {
			// Does the haulerId foreign key match the id?
			if (hauler === ship.haulerId) {
				// Increase the counter by 1
				counter++
			}
		}

		window.alert(`This hauler is carrying ${counter} ship(s)`)
	}
})

export const ShipHaulerList = () => {
	let haulingShipsHTML = "<ul>"

	for (const hauler of haulingShips) {
		haulingShipsHTML += `<li
                            data-type="hauler"
                            data-id=${hauler.id}
                            >${hauler.name}</li>`
	}

	haulingShipsHTML += "</ul>"

	return haulingShipsHTML
}
