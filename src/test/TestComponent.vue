<template>
	<p>{{ count }}</p>
	<button @click="increment">add</button>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
		...mapState(['count'])
	},
	methods: {
		...mapMutations(['increment'])
	}
}
</script>