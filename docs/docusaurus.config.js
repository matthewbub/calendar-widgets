// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "calendar-widgets",
	tagline: "Craft beautifully robust date components in React.",
	url: "https://calendar-widgets.com",
	baseUrl: "/",
	organizationName: "matthewbub",
	projectName: "Calendar Widgets",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	favicon: "branding-assets/favicon_io/favicon.ico",
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/matthewbub/calendar-widgets",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/matthewbub/calendar-widgets",
				},
				theme: {
					customCss: [
						require.resolve("./src/css/fonts.css"),
						require.resolve("./src/css/custom.css"),
					]
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Calendar Widgets",
				items: [
					{
						type: "doc",
						docId: "examples",
						position: "right",
						label: "Examples",
					},
					{
						href: "https://github.com/matthewbub/calendar-widgets",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Community",
						items: [
							{
								label: "Report a bug",
								href: "https://github.com/matthewbub/calendar-widgets/issues/new/choose",
							},
							{
								label: "Contributing",
								href: "https://github.com/matthewbub/calendar-widgets#contributing",
							},
							{
								label: "Code of Conduct",
								href: "code-of-conduct",
							},
						],
					},
				],
				copyright: `Licensed under MIT, ${new Date().getFullYear()}. NineMbs Studio LLC & Company. This site was built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		})
};

module.exports = config;
