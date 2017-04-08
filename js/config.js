$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: '個人用の備忘録ページ',

		// Tagline for your site
		siteTagline: 'Memorandum page',

		// Email address
		siteEmail: 'junichi.watanuki@gmail.com',

		// Name
		siteAuthor: 'Junichi WATANUKI',

		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/JunichiWatanuki', newWindow: true},
			{ name: 'About'},
			{ name: 'Links'}
		],

		// Posts folder name
		postsFolder: './posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: './contents',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' Junichi Watanuki All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'junichiwatanuki',
			repo: 'pages'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
