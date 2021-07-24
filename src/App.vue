<template>
	<div>
		<TheHeader />

		<!--
		<div id="nav">
			
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
    </div>
    -->
		<div style="margin-top:100px">
			<router-view />
		</div>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
//import { mapState, mapActions } from 'vuex';
export default {
	name: 'App',
	components: {
		TheHeader,
	},
	methods: {},
};
</script>

<style>
img:hover {
	transform: scale(3);
	transition: 0.2s;
	z-index: 1000;
}
.header {
	background-color: darkblue;
	padding-left: 50px;
	padding-top: 15px;
	height: 75px;
	font-size: 20px;
	margin-bottom: 10px;
}

.rigth {
	text-align: right;
	padding-right: 50px;
}
.product-block {
	border: 1px solid black;
}

.item {
	padding: 5px;
}

.item:hover {
	background-color: #e5e5e5;
}

.btn {
	width: 100%;
}
.btn-green {
	background-color: darkblue;
	color: white;
}
.btn-green:hover {
	background-color: #ffbb00;
	color: black;
}
.btn-white {
	background-color: white;
	color: darkblue;
	width: 50%;
}
.btn-red {
	background-color: darkblue;
	color: white;
	font-weight: bold;
}
.btn-red:hover {
	color: darkblue;
	background-color: white;
}
.modal-footer {
	display: block;
	flex-wrap: wrap;
	flex-shrink: 0;
	align-items: center;
	justify-content: flex-end;
	padding: 0.75rem;
	border-top: 1px solid #dee2e6;
	border-bottom-right-radius: calc(0.3rem - 1px);
	border-bottom-left-radius: calc(0.3rem - 1px);
}
.colorWhite {
	color: white;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>
