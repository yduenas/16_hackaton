<template>
	<div class="container">
		<h1>POKEMON - {{ $route.params.id }}</h1>
		<section>
			<p>Informacion del POKEMON</p>
			<h2 @click="detalle">Nombre: {{ contacto.name }}</h2>
			<!--
			<img alt="Vue logo" :src="contacto.url" />
			-->
			<img alt="Vue logo" :src="contacto.sprites.front_default" />

			<p>Tipo: {{ contacto.types.[0].type.name }}</p>
			<p>Habilidades: {{ contacto.abilities.[0].ability.name }}</p>
			<!--
			<router-link :to="`/contactos/`">Regresar</router-link>
			-->
			<div class="col-6">
				<router-link :to="`/`" class="btn btn-green">Regresar</router-link>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		...mapState(['contacto']),
	},
	methods: {
		...mapActions(['obtenerContactoAction']),
	},

	created() {
		this.obtenerContactoAction(this.$route.params.id);
	},
};

/*
export default {
	data() {
		return {
			message: 'Hola',
			contacto: {},
		};
	},
	methods: {
		async getContacto() {
			const contacto = 'this.$route.params.id ';
			const data = await fetch(
				`http://localhost:3000/contactos/${this.$route.params.id}`
			);
			const info = await data.json();
			this.contacto = info;
			console.log(info);
		},
		detalle() {
			alert('Diste click en el nombre de : ' + this.contacto.name);
		},
	},
	created() {
		this.getContacto();
	},
};
*/
</script>

<style scoped>
h2 {
	font-size: 30px;
}
</style>
