# youmy-productions
GitHub repository for the Youmy Productions website. Youmy Productions is a film production organization founded by Alex Chang.

In order to see live updates when editing this website, type the following into a command line:
```
python3.7 -m http.server 
``` 
When prompted with this: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...`, copy and paste `http://0.0.0.0:8000/` into the browser and go to this page.\

Resources that may be useful: 
 * [How to make a photo slideshow gallery in CSS](https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp)
 * [Bootstrap: Grid System](https://getbootstrap.com/docs/4.0/layout/grid/)
 * [Aligning an image to the right](https://www.delftstack.com/howto/css/css-align-image-right/#:~:text=Select%20the%20img%20tag%20in,the%20right%20of%20the%20webpage.)
 * [Link a phone number](https://www.gaintap.com/archives/clickable-website-phone-number-and-call-tracking-guide/)

Notes:
 * For the GALLERY:
    * Likely will have to use javascript to get this going
    * put all photos into a list or something
    * have a next and previous button
    * wraparound for photos (if we reach the end, we wrap around back to the beginning)
    * when clicking the next, we grab the next X photos (based on how many
    can fit on the page)
    * similar happens when clicking previous
    * also have a part that displays the current picture largely
    * currently selected picture has a border around it or something
    * 