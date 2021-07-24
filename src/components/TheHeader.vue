<template>
	<div>
		<header>
			<div class="header">
				<div class="row">
					<div class="col colorWhite">
						<router-link :to="`/`" class="btn btn-red">
							<strong>POKEMONES</strong>
						</router-link>
					</div>
					<!--
					<div class="col">
						<a class="btn btn-white" href="readme.md">ir al README</a>
					</div>
					-->
					<!-- <div class="rigth col">
						<button
							class="btn btn-red"
							data-bs-toggle="modal"
							data-bs-target="#modalAgregar"
						>
							agregar CONTACTO
						</button>
					</div> -->
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'TheHeader',
	/*
	data() {
		return {
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
	*/
	/*
	props: {
		msg: String,
	},
	*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	position: fixed;
	width: 100%;
	top: 0;
}
</style>
