import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HitsCounter from '../components/hitsCounter.vue'

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'nav-bar-content-before': () => h(HitsCounter)
		})
	}
}