<script setup>
import DefaultTheme from 'vitepress/theme';
import HitsCounter from './hitsCounter.vue'
import GoogleAds from "./googleAds.vue";
import {onMounted} from "vue";

onMounted(() => {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-NP81XGWTMP');
})

</script>

<template>
	<DefaultTheme.Layout>
		<template #nav-bar-content-before>
			<HitsCounter/>
		</template>
		<template #aside-outline-after>
			<GoogleAds
				:slotId="4101477597"
				style="margin-top: 1rem"></GoogleAds>
		</template>
		<template #doc-after>
			<GoogleAds
				:slotId="7111069725"
				style="margin-top: 1rem"></GoogleAds>
		</template>
		<template #sidebar-nav-after>
			<GoogleAds
				:slotId="4185238076"
				style="margin-top: 1rem">

			</GoogleAds>
		</template>
	</DefaultTheme.Layout>
</template>

<style scoped>

</style>