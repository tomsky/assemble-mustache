#assemble-mustache

> [Mustache](http://mustache.github.io) engine for [Assemble](http://assemble.io).

##Usage

Install `assemble-mustache`:

	npm install assemble-mustache --save-dev
	
Once done, specify `mustache` as the engine in your assemble task:

	assemble: {
  		options: {
    		engine: 'mustache',
    		partials: ['partials/**/*.mustache'],
    		layout: ['layouts/default.mustache'],
  		},
  		site: {
    		src: ['docs/*.mustache'],
    		dest: './'
  		}
	}

###Markdown

####{{#markdown}}

Block helper for embedding markdown content inside HTML, and rendering it to HTML at build time.

	<h1>My Blog</h1>
	{{#markdown}}
	## Post of the day
	Vestibulum posuere, quam sed bibendum posuere
	Pellentesque habitant morbi tristique senectus
	Pellentesque nulla augue, volutpat vitae
	Read more... 
	In hac habitasse platea dictumst. Morbi non rutrum risus.
	{{/markdown}}
	
####{{#md}}

Include markdown from specified file(s), and render it to HTML

	{{#md}}
		file/to/include/post.md
	{{/md}}