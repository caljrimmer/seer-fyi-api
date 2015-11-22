# Seer.fyi Scrape Engine

# Payloads

Use Default scrape algo:

```javascript

POST /api/fetch

{
	"url" : "http://www.asos.com/ASOS/ASOS-Extreme-Super-Skinny-Jeans-In-Black"
}

```

Provide search text and the selectors, if found, will be returned

```javascript

POST /api/fetch

{
	"url" : "http://www.asos.com/ASOS/ASOS-Extreme-Super-Skinny-Jeans-In-Black",
	"text" : {
		"title" : "Google Home",
		"image" : "www.google.com/img.jpg",
		"price" : "£3.45"
	}
}

```

Provide selectors to target content

```javascript

POST /api/fetch

{
	"url" : "http://www.asos.com/ASOS/ASOS-Extreme-Super-Skinny-Jeans-In-Black",
	"selectors" : {
		 "title" : ".title:::text",
		 "image" : ".image:::src",
		 "price" : ".price:::text"
	}
}

```

Resultant Response

```javascript

{
	"image": "http://www.asos.com/ASOS/ASOS-Extreme-Super-Skinny-Jeans-In-Black/Prod/img.jps",
	"title": "Black Jeans",
	"price": "16.00",
	"priceSelector": ".product_price:::text",
	"imagesArray": [
		"http://s.thebrighttag.com/iframe?c=1Ayo9uP",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/black/image1s.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/image2s.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/image3s.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/image4s.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/black/image1xxl.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/image2xxl.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/image3xxl.jpg",
		"http://images.asos-media.com/inv/media/2/3/9/4/3784932/image4xxl.jpg",
		"http://assets.pinterest.com/images/PinExt.png"
	],
	"url": "http://www.asos.com/ASOS/ASOS-Extreme-Super-Skinny-Jeans-In-Black/Prod/pgeproduct.aspx?iid=3784932",
	"root": "www.asos.com",
	"currency": "£"
}

```

## Selector Notation

```javascript
<selector>:::<attr>

//.e.g.

'.target:::text'
'.main img:::src'

```

Selectors are the same as [Jquery Selectors](http://www.w3schools.com/jquery/jquery_ref_selectors.asp). Attr (bar 'text' which returns the text between tags) is just the attribute of a DOM element.


## Installation

In the project's directory, run the following commands:

```
$ npm install
$ npm start
```

Then visit

```
http://localhost:14001
```

## Documents

Swagger UI is found at:

```
http://localhost:14001/ui
```