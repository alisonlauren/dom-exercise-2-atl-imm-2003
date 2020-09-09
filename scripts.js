const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },
];

//setting var container, and retrieving it by its div, accessing the first index
var container = document.getElementsByTagName("div")[0];
//for each ot the sites
for (site of sites) {
    //print site
    console.log(site)
    // variable anchor, create anchor tags
    var anAnchor = document.createElement('a');
    //for anAnchor make them href links to each address in sites
    anAnchor.setAttribute('href', site.address);
    //add the text of blank/nothing
    anAnchor.textContent = '';
    //setting variable image, create a image element
    var img = document.createElement('img')
    //set image attribute to src. the logo from object site
    img.setAttribute('src', site.logo);
    //append the image to each anchor
    anAnchor.appendChild(img)
    //add the anchor (that now has the img), to the container in div
    //found in the html
    container.appendChild(anAnchor)
}









