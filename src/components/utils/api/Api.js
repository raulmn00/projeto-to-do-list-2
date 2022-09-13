const defaultUrl = 'https://api-geladon.herokuapp.com/paletes';

export const apiHelper = {
	findAllPaletas: async () => {
		const response = await fetch(defaultUrl + '/all-paletes', {
			method: 'GET',
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
		const data = response.json();
		return await data;
	},
	findPaletaById: async (id) => {
		const response = await fetch(defaultUrl + `/one-palete/${id}`, {
			method: 'GET',
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
		const data = response.json();
		return await data;
	},
	updatePaleta: async (id, paletaAtualizada) => {
		fetch(defaultUrl + `/update-palete/${id}`, {
			method: 'PUT',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(paletaAtualizada),
		});
	},
	createPaleta: async (paleta) => {
		fetch(defaultUrl + '/create-palete', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(paleta),
		});
	},
	deletePaleta: async (id) => {
		fetch(defaultUrl + `/delete/${id}`, {
			method: 'DELETE',
			headers: new Headers({ 'Content-Type': 'application/json' }),
		});
	},
};
