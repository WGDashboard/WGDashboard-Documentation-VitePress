<script setup>
import DefaultTheme from 'vitepress/theme';
import HitsCounter from './hitsCounter.vue'
import GoogleAds from "./googleAds.vue";

</script>

<template>
	<DefaultTheme.Layout>
		<template #nav-bar-content-before>
			<HitsCounter/>
		</template>
		<template #doc-before>
			<GoogleAds
				:slotId="4101477597"
				style="margin-bottom: 1rem"></GoogleAds>
		</template>
	</DefaultTheme.Layout>
</template>

<style scoped>

</style>