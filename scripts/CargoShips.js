import { getCargoShips } from "./database.js"

export const CargoShipsList = () => {
	const cargoShips = getCargoShips()

	let cargoShipHTML = "<ul>"

	for (const ship of cargoShips) {
		cargoShipHTML += `<li>${ship.name}</li>`
	}

	cargoShipHTML += "</ul>"

	return cargoShipHTML
}
