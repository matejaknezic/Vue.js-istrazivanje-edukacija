<template>
	<li>{{ToDo}}</li>
</template>

<script>

export default {
	props: {
		ToDo: {
			type: String,
			default: ''
		}
	}
}
</script>
