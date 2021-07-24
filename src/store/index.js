import { createStore } from 'vuex';

//const URL = 'http://localhost:3000/contactos/';
const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20/';

export default createStore({
	state: {
		contactos: [],
		contacto: {
			//id: 1,
			name: '',
			url: '',
		},
	},
	mutations: {
		setContactosMutation(state, payload) {
			//	state.contactos.push(payload);
			state.contactos = payload;
		},
		deleteContactoMutation(state, payload) {
			//	console.log(state.contactos);
			//	console.log(payload);
			//	state.contactos.push(payload);
			state.contactos = state.contactos.filter(
				(contacto) => contacto.id !== payload
			);
		},
		obtenerContactoMutation(state, payload) {
			state.contacto = state.contactos.find(
				(contacto) => contacto.id === parseInt(payload)
			);
			//console.log('hola');
			//console.log(state.contacto);
		},
		actualizarContactoMutation(state, payload) {
			//state.contacto = state.contactos.find((contacto) => contacto.id === payload);
			//console.log('hola');
			//console.log(state.contacto);
			state.contactos = state.contactos.map((contacto) => {
				return contacto.id === payload.id ? { ...payload } : contacto;
			});
		},
		crearContactoMutation(state, payload) {
			state.contactos.push(payload);
		},
	},
	actions: {
		/* aca debo meter todas mis peticiones asincronas ASYNC */
		async setContactosAction({ commit }) {
			//commit('setContactoMutation', contactos);
			//console.log(contacto);
			let arrayPokemones = [];

			const data = await fetch(URL); //'http://localhost:3000/contactos'
			let contactos = await data.json();

			contactos.results.forEach(async (pokemon) => {
				const data = await fetch(pokemon.url); //'http://localhost:3000/contactos'
				let contacto = await data.json();
				arrayPokemones.push(contacto);
				//console.log(contacto);
			});
			commit('setContactosMutation', arrayPokemones);
			//	this.contactos = info;

			console.log(arrayPokemones);
		},
		async deleteContactoAction({ commit }, id) {
			//commit('deleteContactoMutation', id);
			try {
				const url = `${URL}${id}`; //'http://localhost:3000/contactos'
				const parans = {
					method: 'DELETE',
				};
				const data = await fetch(url, parans);

				data.status === 200 && commit('deleteContactoMutation', id);
				//  console.log(data);
				//	this.gerContactos();

				//	obtenerInfo();
			} catch (err) {
				console.log(err);
			}
		},
		obtenerContactoAction({ commit }, id) {
			commit('obtenerContactoMutation', id);
			//  console.log(id);
		},
		async actualizarContactoAction({ commit }, contacto) {
			// commit('actualizarContactoMutation', contacto);

			try {
				//console.log(contacto);
				const url = `${URL}${contacto.id}`; //'http://localhost:3000/contactos'

				const params = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},

					body: JSON.stringify(contacto),
				};
				const data = await fetch(url, params);
				const contactoActualizado = await data.json();
				data.status === 200 &&
					commit('actualizarContactoMutation', contactoActualizado);
				//  console.log(contactoActualizado);
				//obtenerInfo();
				//	this.gerContactos();
			} catch (err) {
				console.log(err);
			}
		},
		async crearContactoAction({ commit }, contacto) {
			//commit('crearContactoMutation', contacto);

			try {
				const url = URL; //'http://localhost:3000/contactos'

				const params = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},

					body: JSON.stringify(contacto),
				};
				const data = await fetch(url, params);
				const nuevoContacto = await data.json();
				commit('crearContactoMutation', nuevoContacto);
				//  console.log(nuevoContacto);
				//	this.$emit('refrescando', result);
				//	obtenerInfo();
			} catch (err) {
				console.log(err);
			}
		},
	},
	modules: {},
});
