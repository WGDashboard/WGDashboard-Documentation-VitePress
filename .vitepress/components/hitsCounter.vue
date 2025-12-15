<script setup>
import {useRoute} from "vitepress";
import {ref, watch} from "vue";
const route = useRoute()
const path = ref('https://docs.wgdashboard.dev' + route.path)

watch(() => {
	return route.path
}, () => {
	path.value = 'https://docs.wgdashboard.dev' + route.path
})
</script>

<template>
	<img :src="'https://hitscounter.dev/api/hit?url=' + encodeURIComponent(path) + '&label=Visitors&icon=heart-fill&color=%238c68cd&message=&style=flat&tz=UTC'">

</template>

<style scoped>
img{
	margin-left: 0.5rem;
}
</style>