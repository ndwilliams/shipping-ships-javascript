import { getDocks, getHaulers } from "./database.js"

const docks = getDocks()
const haulers = getHaulers()

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target

	// Was a dock list item clicked?
	if (itemClicked.dataset.type === "dock") {
		// Get the id of the dock clicked
		const dock = parseInt(itemClicked.dataset.id)

		// Initialize an empty array
		const dockHaulers = []

		// Iterate through all of the haulers
		for (const hauler of haulers) {
			// Does the dockId foreign key match the dock's id?
			if (dock === hauler.dockId) {
				// Append the hauler's name to the array
				dockHaulers.push(hauler.name)
			}
		}

		// Is there no hauler at the dock/is the array empty?
		if (Array.isArray(dockHaulers) && !dockHaulers.length) {
			// Display default message - The Shanghai, China dock is currently unloading nothing
			window.alert(
				`The ${itemClicked.dataset.location} dock is currently unloading nothing`
			)
		}

		// Is there one hauler?
		if (Array.isArray(dockHaulers) && dockHaulers.length === 1) {
			// Display message  - The Shanghai, China dock is currently unloading Boaty McBoatface
			window.alert(
				`The ${itemClicked.dataset.location} dock is currently unloading ${dockHaulers[0]}`
			)
		}

		// Is there more than one hauler?
		if (Array.isArray(dockHaulers) && dockHaulers.length > 1) {
			// Initialize empty string
			const haulerList = dockHaulers.join(", ")

			// Display the message - The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
			window.alert(
				`The ${itemClicked.dataset.location} dock is currently unloading ${haulerList}`
			)
		}
	}
})

export const DockList = () => {
	let docksHTML = "<ul>"

	for (const dock of docks) {
		// Convert each dock object to an <li> and append to the docksHTML string
		docksHTML += `<li
                    data-type="dock"
                    data-id=${dock.id}
                    data-location="${dock.location}">
                    ${dock.location} can hold ${dock.volume} million tons of cargo</li>`
	}

	docksHTML += "<ul>"

	return docksHTML
}
