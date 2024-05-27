import { getCargoShips, getHaulers } from "./database.js"

const cargoShips = getCargoShips()
const haulers = getHaulers()

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target

	// Was a shipping ship list item clicked?
	if (itemClicked.dataset.type === "cargo-ship") {
		// Get the haulerId value of the shipping ship clicked
		const haulerId = parseInt(itemClicked.dataset.haulerid)

		// Define a default object for the found hauler
		let haulingShip = { name: "Incorrect" }

		// Iterate the array of hauler objects
		for (const hauler of haulers) {
			// Does the haulerId foreign key match the id of the current hauler?
			if (hauler.id === haulerId) {
				// Reassign the value of `haulingShip` to the current hauler
				haulingShip = hauler
			}
		}
		// Show an alert to the user with this format...
		// Palais Royal is being hauled by Seawise Giant
		window.alert(
			`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`
		)
	}
})
export const CargoShipsList = () => {
	let cargoShipHTML = "<ul>"

	for (const ship of cargoShips) {
		cargoShipHTML += `<li
                        data-id=${ship.id}
                        data-name=${ship.name}
                        data-type="cargo-ship"
                        data-haulerid=${ship.haulerId}>
                        ${ship.name}</li>`
	}

	cargoShipHTML += "</ul>"

	return cargoShipHTML
}
