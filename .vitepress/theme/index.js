import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HitsCounter from '../components/hitsCounter.vue'
import GoogleAds from "../components/googleAds.vue"
import Layout from "../components/Layout.vue";

export default {
	...DefaultTheme,
	Layout,
}