<template>
	<div>
		<div class="row">
			<div class="col-6">
				<input type="text" name="" id="" class="form-control" />
			</div>
			<div class="col-6">
				<input
					type="button"
					name=""
					id=""
					class="btn btn-primary"
					value="buscar"
				/>
			</div>
		</div>
		<br />

		<div class="row">
			<!--producto				
				@click="detalle(index, contacto.id)"
			-->
			<!-- <table id="example" class="table table-striped" style="width:100%">
				<thead>
					<tr>
						<th>POKEMON</th>
						<th>NOMBRE</th>
						<th>ACCION</th>
					</tr>
				</thead>
				<tbody>
					<tr
						class="item col-md-3 col-6"
						v-for="(contacto, index) in contactos"
						:key="index"
					>
						<td>
							<img
								class="img-fluid"
								:src="contacto.sprites.front_default"
								alt="Perro1"
							/>
						</td>
						<td>
							{{ contacto.name }}
						</td>
						<td>
							<router-link
								:to="`/contactos/${contacto.id}`"
								class="btn btn-green"
								>Ver datos de POKEMON <i class="bi bi-eye"></i
							></router-link>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th>POKEMON</th>
						<th>NOMBRE</th>
						<th>ACCION</th>
					</tr>
				</tfoot>
			</table> -->
			<!-- {{ JSON.stringify(contacto) }} -->

			<div
				class="item col-md-3 col-6"
				v-for="(contacto, index) in contactos"
				:key="index"
			>
				<div class="p-2 product-block">
					<div class="d-flex justify-content-between">
						<!-- <div
							data-bs-toggle="modal"
							data-bs-target="#modalEditar"
							@click="editar(contacto)"
						>
							<i class="bi bi-pencil-square"></i><br />
							edit
						</div> -->

						<!-- <div
							data-bs-toggle="modal"
							data-bs-target="#modalBorrar"
							@click="deleteContactoAction(contacto.id)"
						>
							<i class="bi bi-x-circle"></i><br />
							delete
						</div> -->
					</div>
					<div style="text-align:center">
						<img
							class="img-fluid"
							:src="contacto.sprites.front_default"
							alt="Perro1"
						/>
					</div>

					<div class="caption">
						<h5>Nombre: {{ contacto.name }}</h5>
						<!--
						<h6>{{ contacto.visualizaciones }} visualizaciones</h6>
						-->

						<div class="col">
							<router-link
								:to="`/contactos/${contacto.id}`"
								class="btn btn-green"
								>Ver datos de POKEMON</router-link
							>
						</div>
					</div>
				</div>
			</div>
			<!--/producto-->
		</div>

		<!-- Modal EDITAR-->
		<div
			class="modal fade"
			id="modalEditar"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Editar contacto</h5>
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
							placeholder="Agregar ID"
							v-model="contacto.id"
							hidden
						/>
						<input
							class="form-control"
							type="text"
							placeholder="Agregar nombre"
							v-model="contacto.nombre"
						/>
						<input
							class="form-control"
							type="text"
							placeholder="Agregar visualizaciones"
							v-model="contacto.visualizaciones"
							hidden
						/>
						<input
							class="form-control"
							type="text"
							placeholder="Agregar url"
							v-model="contacto.url"
						/>
						<input
							class="form-control"
							type="text"
							placeholder="Agregar telefono"
							v-model="contacto.telefono"
						/>
						<input
							class="form-control"
							type="text"
							placeholder="Agregar correo"
							v-model="contacto.correo"
						/>
						<input
							class="form-control"
							type="text"
							placeholder="Agregar pais"
							v-model="contacto.pais"
						/>
						<textarea
							class="form-control"
							name=""
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
						<!-- <button
							type="button"
							class="btn btn-red"
							@click="actualizarContactoAction(contacto)"
							data-bs-dismiss="modal"
						>
							Grabar
						</button> -->
					</div>
				</div>
			</div>
		</div>

		<!-- /modal EDITAR-->
	</div>
</template>

<script>
$(document).ready(function() {
	$('#example').DataTable();
});

import { mapState, mapActions } from 'vuex';
export default {
	data() {
		return {
			contacto: {
				name: '',
				url: '',
				imagen: '',
			},
		};
	},
	computed: {
		...mapState(['contactos']),
	},
	methods: {
		...mapActions([
			'deleteContactoAction',
			'setContactosAction',
			'actualizarContactoAction',
		]),

		editar(contacto) {
			console.log(contacto);
			this.contacto = { ...contacto };
		},
	},
	created() {
		this.setContactosAction();
	},
};

/*
export default {
	name: 'contacto Card',
	props: {
		prop1: {},
	},
	data() {
		return {
			message: 'Hola',
			contactos: [],
			contacto: {},

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
		async gerContactos() {
			const data = await fetch('http://localhost:3000/contactos');
			const info = await data.json();
			this.contactos = info;
			console.log(info);
		},

		async borrar(index, id) {
			//alert('borrando' + id);

			try {
				const url = `http://localhost:3000/contactos/${id}`;
				const parans = {
					method: 'DELETE',
				};
				const data = await fetch(url, parans);
				console.log(data);
				this.gerContactos();

				//	obtenerInfo();
			} catch (err) {
				console.log(err);
			}
		},

		async editar(id, nombre, url, about, telefono, correo, pais) {
			//	alert('actualizando' + id);

			this.idA = id;
			this.nombreA = nombre;
			this.visualizacionesA = 0;
			this.urlA = url;
			this.aboutA = about;
			this.telefonoA = telefono;
			this.correoA = correo;
			this.paisA = pais;

			const data = await fetch('http://localhost:3000/contactos/' + id);
			const info = await data.json();
			this.contacto = info;
			console.log(info);
		},
		async guardar() {
			try {
				const contacto = {
					id: this.idA,
					nombre: this.nombreA,
					visualizaciones: 0,
					url: this.urlA,
					about: this.aboutA,
					telefono: this.telefonoA,
					correo: this.correoA,
					pais: this.paisA,
				};
				console.log(contacto);
				const url = `http://localhost:3000/contactos/${contacto.id}`;

				const params = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'application/x-www-form-urlencoded',
					},

					body: JSON.stringify(contacto),
				};
				const data = await fetch(url, params);
				const result = await data.json();
				console.log(result);
				//obtenerInfo();
				this.gerContactos();
			} catch (err) {
				console.log(err);
			}
		},
	},

	created() {
		console.log('metodo Created');
		this.gerContactos();
	},

	updated() {
		//	this.contactos = [...this.contactos, this.prop1];
	},
	watch: {
		prop1() {
			this.contactos = [...this.contactos, this.prop1];
		},
	},
};
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
