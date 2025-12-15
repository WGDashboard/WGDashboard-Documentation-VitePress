<script setup>
import {onMounted} from "vue";
const props = defineProps(['slotId'])

const loadAds = () => {
	let adsbygoogle;
	(adsbygoogle = window.adsbygoogle || []).push({})
}

onMounted(() => {
	loadAds();
})
</script>

<template>
	<div>
		<ins class="adsbygoogle"
		     style="display:block; margin-bottom: 1rem; height: 100px; width: 100%"
		     data-ad-client="ca-pub-2283617751904576"
		     :data-ad-slot="slotId"
		     data-ad-format="auto"
		     data-full-width-responsive="true">
		</ins>
	</div>
</template>

<style scoped>

</style>