import { getHaulers } from "./database.js"

export const ShipHaulerList = () => {
	const haulingShips = getHaulers()

	let haulingShipsHTML = "<ul>"

	for (const hauler of haulingShips) {
		haulingShipsHTML += `<li>${hauler.name}</li>`
	}

	haulingShipsHTML += "</ul>"

	return haulingShipsHTML
}
