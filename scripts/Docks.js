import { getDocks } from "./database.js"

const docks = getDocks()

export const DockList = () => {
	document.addEventListener("click", (clickEvent) => {
		const itemClicked = clickEvent.target

		/*
                Your job is to design an algorithm and implement it
            */

		// Was a dock list item clicked?
		// Get the id of the dock clicked
		// Initialize an empty array
		// Iterate through all of the haulers
		// Does the dockId foreign key match the dock's id?
		// Append to the array
		// Is there no hauler at the dock/is the array empty?
		// Display default message - The Shanghai, China dock is currently unloading nothing
		// Is there one hauler?
		// Display message  - The Shanghai, China dock is currently unloading Boaty McBoatface
		// Is there more than one hauler?
		// Display the message - The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
	})

	let docksHTML = "<ul>"

	for (const dock of docks) {
		// Convert each dock object to an <li> and append to the docksHTML string
		docksHTML += `<li>${dock.location} can hold ${dock.volume} million tons of cargo</li>`
	}

	docksHTML += "<ul>"

	return docksHTML
}
