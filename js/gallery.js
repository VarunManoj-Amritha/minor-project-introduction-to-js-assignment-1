/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */


    // Select the element with id "image"
    let imageDiv = document.getElementById("image");

    // Update the background image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Update the text content to the alt attribute of the previewPic
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */


    // Select the element with id "image"
    let imageDiv = document.getElementById("image");

    // Reset the background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text content to the original text
    imageDiv.textContent = "Hover over an image below to display here.";
}

