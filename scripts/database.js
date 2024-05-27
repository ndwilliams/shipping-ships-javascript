const database = {
	docks: [
		{ id: 1, location: "Shanghai, China", volume: "43.5" },
		{ id: 2, location: "Busan, South Korea", volume: "21.6" },
		{ id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
		{ id: 4, location: "Antwerp, Belgium", volume: "12.04" },
	],
	haulers: [
		{ id: 1, name: "Pioneering Spirit", dockId: 1 },
		{ id: 2, name: "Boat McBoatface", dockId: 2 },
		{ id: 3, name: "Seawise Giant", dockId: 3 },
		{ id: 4, name: "I'm on a Boat", dockId: 4 },
		{ id: 5, name: "HMS Pinafore", dockId: 1 },
		{ id: 6, name: "SS Willy", dockId: 2 },
	],
}

export const getDocks = () => {
	return database.docks.map((dock) => ({ ...dock }))
}

export const getHaulers = () => {
	return database.haulers.map((hauler) => ({ ...hauler }))
}
