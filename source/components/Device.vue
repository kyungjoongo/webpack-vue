<template>
	<div id="holder">
		<div id="device">
			<App></App>
		</div>
	</div>
</template>

<script>

import App from '../components/App'
// import App from '../examples/App'

export default {
	name: 'device',
	components: { App }
}

</script>

<style>
body {
	position: absolute;
	height: 100%;
	overflow: hidden;
}

#holder {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	background: white;
}

#device {
	position: relative;
	width: 375px;
	height: 667px;
	background: #FFF;
	box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}

#app {
	height: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}

@media only screen and (max-width: 480px) {
	#device {
		width: 100%;
		height: 100%;
	}
}
</style>
