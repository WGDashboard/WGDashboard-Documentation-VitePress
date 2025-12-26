import { defineConfig } from 'vitepress'
import { createMermaidRenderer } from "vitepress-mermaid-renderer";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/',
	sitemap: {
		hostname: 'https://docs.wgdashboard.dev'
	},
	title: "WGDashboard Docs",
	description: "Official Documentation for WGDashboard",
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: 'https://wgdashboard-resources.tor1.cdn.digitaloceanspaces.com/Logos/Logo-2-128x128.png'
			}
		],
		[
			'script',
			{
				async: true,
				src: 'https://www.googletagmanager.com/gtag/js?id=G-NP81XGWTMP',
				crossorigin: "anonymous"
			}
		],
		[
			'script',
			{
				async: true,
				src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283617751904576',
				crossorigin: "anonymous"
			}
		]
	],
	themeConfig: {
		search: {
			provider: "local"
		},
		sidebar: [
			{ text: "What's New", link: '/Whats-New' },
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
						link: "/Demo"
					},
					{
						text: "Screenshots",
						link: "/Screenshots"
					}
				]
			},
			{
				text: "Get Started",
				items: [
					{
						text: "Requirements",
						link: "/Requirements"
					},
					{
						text: "Install",
						link: "/install/",
						items: [
							{
								text: "Docker Image",
								link: '/install/Docker'
							},
							{
								text: "Host with DigitalOcean",
								link: '/install/Host-WGDashboard-With-DigitalOcean'
							}
						]
					},
					{
						text: "Usage",
						link: '/Usage'
					},
					{
						text: "Update",
						link: '/Update'
					},
				]
			},
			{
				text: "Get Going",
				items: [
					{
						text: "Configure",
						link: '/Configure'
					},
					{
						text: "Guides",
						collapsed: true,
						items: [
							{
								text: "Web UI",
								items: [
									{
										text: "Access Remote Server",
										link: '/guides/Access-Remote-Server'
									},
									{
										text: "Add WireGuard Configuration",
										link: '/guides/Add-WireGuard-Configuration'
									},
									{
										text: "Add WireGuard Configuration Peers",
										link: '/guides/Add-WireGuard-Configuration-Peers'
									},
									{
										text: "Sign In",
										link: '/guides/Sign-In'
									},
									{
										text: "Email Service",
										link: '/guides/Email-Service'
									},
									{
										text: "Webhooks",
										link: '/guides/WebHooks'
									},
									{
										text: "Client Side App",
										link: '/guides/Client-Side-App'
									}
								]
							},
							{
								text: "Server",
								items: [
									{
										text: "Add URL Prefix",
										link: '/guides/Add-URL-Prefix-To-WGDashboard'
									},
									{
										text: "Run as a System Service",
										link: '/guides/Run-WGDashboard-As-A-System-Service'
									},
									{
										text: "Use SSL/TLS",
										link: '/guides/Use-SSL-TLS-With-WGDashboard'
									},
									{
										text: "Reset WGDashboard Password",
										link: '/guides/Reset-WGDashboard-Password'
									},
								]
							}
						]
					},
					{
						text: "Frequently Asked Questions",
						collapsed: true,
						items: [
							{
								text: "WireGuard Configuration Examples",
								link: '/faq/WireGuard-Configuration-Example'
							}
						]
					},
					{
						text: "Experimental Features",
						collapsed: true,
						items: [
							{
								text: "WGDashboard Desktop App",
								link: '/experimental-features/WGDashboard-Desktop-App'
							},
							{
								text: "WGDashboard Plugins",
								link: '/experimental-features/WGDashboard-Plugins'
							}
						]
					}
				]
			},
			{
				text: "Get Advance",
				items: [
					{
						text: "Case Studies",
						collapsed: true,
						items: [
							{
								text: "Case Study #1 - Multi-Hop Connection",
								link: "/case-study/Case-Study-1-Multi-Hop-Connection.md"
							},
							{
								text: "Case Study #1.1 - Multi-Hop and Hop Again Connection",
								link: "/case-study/Case-Study-1-1-Multi-Hop-and-Hop-Again-Connection.md"
							},
							{
								text: "Case Study #2 - Split Tunnel with WireGuard",
								link: "/case-study/Case-Study-2-Split-Tunnel-with-WireGuard.md"
							}
						]
					},
					{
						text: "REST API Endpoints",
						link: "/api/",
						items: [
							{
								text: "v4.3.x",
								link: "https://documenter.getpostman.com/view/31393369/2sB3dTsTEi"
							},
							{
								text: "v4.2.x",
								link: "https://documenter.getpostman.com/view/31393369/2sA3s7hnzU"
							}
						]
					}
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/WGDashboard/WGDashboard' },
			{ icon: 'discord', link: 'https://discord.gg/72TwzjeuWm' },
			{ icon: 'reddit', link: 'https://www.reddit.com/r/WGDashboard/' },
			{ icon: 'matrix', link: 'https://app.element.io/#/room/#wgd:matrix.org' },
		]
	}
})
