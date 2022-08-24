# youmy-productions
GitHub repository for the Youmy Productions website. Youmy Productions is a film production organization founded by Alex Chang.

In order to see live updates when editing this website, type the following into a command line:
```
python3.7 -m http.server 
``` 
When prompted with this: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...`, copy and paste `http://0.0.0.0:8000/` into the browser and go to this page.

Resources that may be useful: 
 * Resources related to Javascript:
    * [Javascript function syntax](https://www.w3schools.com/js/js_functions.asp)
    * [Document.getElementById() - Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
    * [Get ID of clicked item - Javascript](https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button)
    * [Element.classList - Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    * [String slice() - Javascript](https://www.w3schools.com/jsref/jsref_slice_string.asp)
    * [Access Javascript file from HTML file](https://stackoverflow.com/questions/70040795/why-cant-i-access-javascript-function-from-html-file)
    * [Element.getElementsByTagName() - Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)
    * [Check if a character is a letter - Javascript](https://www.coderrocketfuel.com/article/how-to-check-if-a-character-is-a-letter-using-javascript)
    * [Convert string to integer -- parseInt() - Javascript](https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript#:~:text=To%20convert%20a%20string%20to,be%20returned%20as%20the%20output.)
    * [Cast to String - Javascript](https://www.w3schools.com/jsref/jsref_string.asp)
    * [Javascript conditional statements](https://www.w3schools.com/js/js_if_else.asp)
    * [scrollTop and scrollLeft on an element - Javascript](https://www.javascripttutorial.net/dom/css/get-and-set-scroll-position-of-an-element/)
    * [Element.scrollIntoView() - Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
 * Resources related to the gallery:
    * [How to make a photo slideshow gallery in CSS](https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp)
    * [Ideas for the photo gallery](http://www.cssplay.co.uk/menu/gallery3l.html)
    * [More ideas for photo gallery](https://www.sliderrevolution.com/resources/css-gallery/)
 * Resources related to the font:
    * [Rustic Printed font](https://ifonts.xyz/downfile/0337d7e7841584aeb04f0315d74a5c0d.271867)
    * [Using downloaded fonts](https://www.w3schools.com/css/css3_fonts.asp)
 * [Bootstrap: Grid System](https://getbootstrap.com/docs/4.0/layout/grid/)
 * [Aligning an image to the right](https://www.delftstack.com/howto/css/css-align-image-right/#:~:text=Select%20the%20img%20tag%20in,the%20right%20of%20the%20webpage.)
 * [Link a phone number](https://www.gaintap.com/archives/clickable-website-phone-number-and-call-tracking-guide/)
 * [Resizing images](https://imagekit.io/blog/how-to-resize-image-in-html/#:~:text=If%20your%20image%20doesn't,in%20px%20i.e.%20CSS%20pixels.)
 * [Centering an image](https://www.w3schools.com/howto/howto_css_image_center.asp)
 * [CSS setting properties for objects inside of div ID](https://stackoverflow.com/questions/24386201/set-image-properties-based-on-id-in-css-file)
 * [Adding a border to an image - CSS](https://www.w3schools.com/howto/howto_css_border_image.asp)
 * [Force all elements on a div to be on one line](https://www.designcise.com/web/tutorial/how-to-force-html-elements-to-stay-on-the-same-line#:~:text=To%20get%20all%20elements%20to,set%20on%20all%20child%20elements.)
 * [Overlay divs using CSS](https://www.tutorialrepublic.com/faq/how-to-overlay-one-div-over-another-div-using-css.php#:~:text=You%20can%20use%20the%20CSS,%2C%20fixed%20%2C%20or%20relative%20)
 * [Media Screen Sizing in CSS](https://stackoverflow.com/questions/13550541/media-min-width-max-width/13550716#13550716)
 * [Font Size - CSS](https://www.w3schools.com/css/css_font_size.asp)
 * [Align div elements side by side - HTML and CSS](https://stackoverflow.com/questions/4938716/align-div-elements-side-by-side)
 * [Force a div to appear below, not next to, another -- clear:both; (CSS)](https://stackoverflow.com/questions/2492873/how-to-force-div-to-appear-below-not-next-to-another)

Notes:
 * Generally, it takes a while (at least 2-3 minutes) for the connection between the js file and the HTML file to work.
 * For the GALLERY:
    * DONE
      * Likely will have to use javascript to get this going
      * put all photos into a list or something
      * also have a part that displays the current picture largely
      * currently selected picture has a border around it or something
      * wraparound for photos (if we reach the end, we wrap around back to the beginning)
    * Still to do:
      * have a next and previous button - done BUT not in the correct place
 * DONE (general):
   * Place previous and next buttons for gallery in correct spot -- solution: I took the selected photo and prev and next buttons out of the columns and put them into a single div.
   * place the big logo in the correct place (direct middle)
   * adjust for PHONE/smaller screens
 * FONT: Rustic Printed (for ALL text)