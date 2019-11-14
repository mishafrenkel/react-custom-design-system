# Thoughts as I work through challenges and ideas

I’ve used design systems like Bootstrap or Foundation to jumpstart web projects, even tried to build a few similar systems myself. It wasn’t until recently that I realized components like buttons can be beautifully laid out individually but degrade the overall design when set into a larger soup of elements and content. This is because reaching an aesthetically pleasing composition to the overall page is difficult to consistently create. I can use my design eye to nudge a few elements here or there but I can’t rely on a team of designers and developers to share my same vision. Without a system to define the spacing relationships of my elements it’s difficult to create consistency.

Bootstrap is an opinionated library of components that allows designers/developers to focus on the content and user experience. It has raised the quality of countless websites across the web. But not having a consistent unit of measurement can lead to layout inconsistencies between pages, particularly on projects with two or more designers.

### Why does my interface need to be consistent?
It doesn’t. However, if you want to have a professional and trustworthy appearance it should. If you’ve ever shopped online, you’ve experienced the hesitation when you click purchase and the credit card entry form looks different from the rest of the site. A little consistency goes a long way.

### Why is adopting Bootstrap or a similar system not enough?
Bootstrap is an opinionated library of components that allows designers/developers to focus on the content and user experience. It has raised the quality of countless websites across the web. But not having a consistent unit of measurement can lead to layout inconsistencies between pages, particularly on projects with two or more designers.
When building our own brand aesthetic at Pivotal we often need to create unique components and layouts. While recently working to unite our UI system we came across the fact that the branding in the top corner of all of our products is slightly different. Built by separate teams around the world, the overall concept is the same but the execution is slightly different. Which one is wrong?

### Well, what’s your solution wise guy?
The 8pt grid system. Use increments of 8 to size and space out the elements on a page. To me this means that any defined height or width, margin or padding will be an increment of 8.

### Why 8pts?
The variety of screen sizes and pixel densities has continued to increase making the work of asset generation more complicated for designers. Utilizing an even number like 8 to size and space elements makes scaling for a wide variety of devices easy and consistent.
For example devices that have a 1.5x resolution will have a hard time cleanly rendering an odd number. Scaling 5px by 1.5x will result in a half pixel offset.

### What is the value of the 8pt system?
For Designers: Efficiency, less decisions to make while maintaining a quality rhythm between your elements.
For Teams: An easy system of communication between designers and developers (no fussing over pixels). A developer can easily eyeball an 8pt increment instead of having to measure each time.
For Users: Consistent aesthetic to the brand they trust. No blurry half-pixel offsets on their preferred device.