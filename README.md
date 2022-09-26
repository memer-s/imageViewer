# Bild Visare

A SUPER basic image viewer. Server serves the images that are supplied in the `/public/images` folder.

To change the path, change the lines:

```js
//	                                      vvvvvvvvvvvvvvvv this is a relative path to the folder of images
let dir = await fs.readdir(__dirname+'/public/images/');
```
and
```js
app.use(express.static("public"));
```

author: Mimer Stjernhult https://github.com/memer-s/
