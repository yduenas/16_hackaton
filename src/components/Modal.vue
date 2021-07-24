<template>
	<div>
		<!-- Modal AGREGAR-->
		<div
			class="modal fade"
			id="modalAgregar"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Agregar Contacto
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true"></span>
						</button>
					</div>
					<div class="modal-body">
						<input
							class="form-control"
							type="text"
							id="idA"
							placeholder="Agregar ID"
							v-model="contacto.id"
							hidden
						/>
						<input
							class="form-control"
							type="text"
							id="nombreA"
							placeholder="Agregar nombre"
							v-model="contacto.nombre"
						/>
						<input
							class="form-control"
							type="text"
							id="visualizacionesA"
							placeholder="Agregar visualizaciones"
							v-model="contacto.visualizaciones"
							hidden
						/>
						<input
							class="form-control"
							type="text"
							id="urlA"
							placeholder="Agregar url"
							v-model="contacto.url"
						/>
						<input
							class="form-control"
							type="text"
							id="urlA"
							placeholder="Agregar telefono"
							v-model="contacto.telefono"
						/>
						<input
							class="form-control"
							type="text"
							id="urlA"
							placeholder="Agregar correo"
							v-model="contacto.correo"
						/>
						<input
							class="form-control"
							type="text"
							id="urlA"
							placeholder="Agregar pais"
							v-model="contacto.pais"
						/>
						<textarea
							class="form-control"
							name=""
							id="aboutA"
							placeholder="Agregar about"
							v-model="contacto.about"
						></textarea>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Cerrar
						</button>
						<button
							type="button"
							class="btn btn-red"
							@click="crearContacto(contacto)"
							data-bs-dismiss="modal"
						>
							Grabar
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- /modal AGREGAR-->
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'Modal Agregar',
	data() {
		return {
			nombreModal: 'Agregar POKEMONES',
			nombre1: 'POKEMONES',
			NombreLista: 'Lista de POKEMONES',
			contacto: {
				id: '',
				nombre: '',
				visualizaciones: '',
				url: './img/silueta.jpg',
				telefono: '',
				correo: '',
				pais: '',
				about: '',
			},
		};
	},
	/*
	computed: {
		...mapState(['contacto']),
	},
	*/
	methods: {
		...mapActions(['crearContactoAction']),

		crearContacto(contacto) {
			this.crearContactoAction(contacto);
			this.contacto = {
				id: '',
				nombre: '',
				visualizaciones: '',
				url: './img/silueta.jpg',
				telefono: '',
				correo: '',
				pais: '',
				about: '',
			};
		},
	},
	/*
	created() {
		this.obtenerContactoAction(this.$route.params.id);
	},
	*/
};

/*
export default {
	name: 'Modal Agregar',
	data() {
		return {
			nombreModal: 'Agregar Contacto',
			nombre1: 'CONTACTOS',
			NombreLista: 'Lista de CONTACTOS',
			idA: '',
			nombreA: '',
			visualizacionesA: '',
			urlA: './img/silueta.jpg',
			telefono: '',
			correo: '',
			pais: '',
			aboutA: '',
		};
	},
	methods: {
		crear() {
			//	alert('Soy una creacion');
			if (
				//		this.idA.trim() === '' ||
				this.nombreA.trim() === '' ||
				this.urlA.trim() === '' ||
				this.aboutA.trim() === '' ||
				this.telefonoA.trim() === '' ||
				this.correoA.trim() === '' ||
				this.paisA.trim() === ''
			) {
				alert('Debe de completar los campos');
			} else {
				//	alert('No estan vacios');
				const video = {
					//	id: this.videos.length + 1,

					nombre: this.nombreA,
					visualizaciones: 0,
					url: this.urlA,
					telefono: this.telefonoA,
					correo: this.correoA,
					pais: this.paisA,
					about: this.aboutA,
				};

				this.postVideo(video);

				this.nombreA = '';
				this.aboutA = '';
				this.telefonoA = '';
				this.correoA = '';
				this.paisA = '';

				//	this.videos = [...this.videos, video];
				//  console.log(video);
				//	console.log(this.videos);
			}
		},
		async postVideo(datos) {
			//console.log(datos);
			try {
				const url = 'http://localhost:3000/contactos';

				const params = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},

					body: JSON.stringify(datos),
				};
				const data = await fetch(url, params);
				const result = await data.json();
				console.log(result);
				this.$emit('refrescando', result);
				//	obtenerInfo();
			} catch (err) {
				console.log(err);
			}
		},
	},
	computed: {},
	props: {
		nombreModal: String,
	},

};
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
