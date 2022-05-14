<script setup="">
	import {Head} from '@vueuse/head'
	import Editor from '../editor.vue'
	import {ref} from 'vue'

	const isinya = ref('kucing')
</script>

<template>
	<Head>
		<link rel="stylesheet" href="/bootstrap.css" />
	</Head>

	<div class="container my-3">
		{{ isinya }}
		<Editor v-model:html='isinya'></Editor>
	</div>
</template>