<template>
	<div class="container mt-5">
		<h1>Lista de POKEMONES</h1>
		<ContactCard :prop1="valor" />
		<Modal @refrescando="refrescar" tituloModal="Agregar Contacto" />
		<Spinner />
		<!--
		<img alt="Vue logo" src="../assets/logo.png" />		
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		--></div>
</template>

<script>
// @ is an alias to /src
import ContactCard from '@/components/ContactCard.vue';
import Modal from '@/components/Modal.vue';
import Spinner from '@/components/Spinner.vue';

export default {
	name: 'Home',

	data() {
		return {
			valor: {},
		};
	},
	components: {
		ContactCard,
		Modal,
		Spinner,
	},
	methods: {
		refrescar(valor) {
			//console.log('refrescando' + JSON.stringify(valor));
			this.valor = valor;
		},
	},
};
</script>
