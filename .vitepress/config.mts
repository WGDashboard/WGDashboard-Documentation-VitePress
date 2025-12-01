import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "WGDashboard Docs",
	description: "Official Documentation for WGDashboard",
	head: [
		['link', {
			rel: 'icon',
			href: 'https://wgdashboard-resources.tor1.cdn.digitaloceanspaces.com/Logos/Logo-2-128x128.png'
		}]
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],

		sidebar: [
			{ text: "What's New", link: '/whatsnew' },
			{
				text: 'Get Familiar',
				items: [
					{
						text: 'Features',
						link: '/features/',
						items: [
							{
								text: "Multi Languages",
								link: '/features/i18n'
							}
						]
					},
					{
						text: "Demo",
						link: "/demo"
					}
				]
			},
			{
				text: "Get Started",
				items: [
					{
						text: "Requirements",
						link: "/requirements"
					},
					{
						text: "Install",
						link: "/install/",
						items: [
							{
								text: "Host WGDashboard w/ DigitalOcean",
								link: '/install/hostWGDashboardWithDigitalOcean'
							}
						]
					},
					{
						text: "Usage",
						link: "/usage"
					},
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/WGDashboard/WGDashboard' }
		]
	}
})
