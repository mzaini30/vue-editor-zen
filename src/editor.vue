<script setup>
	const props = defineProps({
		html: String,
		tinggi: {
			default: '78vh',
			type: String
		}
	})

	const htmlInit = props.html

	function block(x){
		document.execCommand('formatBlock', false, x)
	}
	function sebagian(x){
		document.execCommand(x, false, null)
	}
	function link(x){
		const url = prompt('Masukkan linknya')
		document.execCommand(x, false, url)
	}
</script>

<template>
	<hr>
	<div>
		<button @click.prevent="block('h1')" class="btn btn-success" >H1</button>
		<button @click.prevent="block('h2')" class="btn btn-success">H2</button>
		<button @click.prevent="block('h3')" class="btn btn-success">H3</button>
		<button @click.prevent="block('h4')" class="btn btn-success">H4</button>
		<button @click.prevent="block('p')" class="btn btn-success">P</button>
		<button @click.prevent="sebagian('bold')" class="btn btn-success">Bold</button>
		<button @click.prevent="sebagian('italic')" class="btn btn-success">Italic</button>
		<button @click.prevent="link('createLink')" class="btn btn-success">Link</button>
		<button @click.prevent="sebagian('unlink')" class="btn btn-success">Unlink</button>
		<button @click.prevent="link('insertImage')" class="btn btn-success">Image</button>
		<button @click.prevent="sebagian('insertOrderedList')" class="btn btn-success">List Number</button>
		<button @click.prevent="sebagian('insertUnorderedList')" class="btn btn-success">List Bullet</button>
	</div>
	<hr>
	<div 
		contenteditable 
		@blur='$emit("update:html", $event.target.innerHTML)' 
		:style="'max-height: ' + tinggi" 
		v-html='htmlInit'
		class='konten'
	></div>
	<hr>
</template>


<style scoped>
	button {
		margin-bottom: 0.3em;
	}
	.btn {
		margin-right: .3rem;
	}
	div {
		overflow: auto;
	}
	.konten:focus {
	    outline: none;
	}
</style>