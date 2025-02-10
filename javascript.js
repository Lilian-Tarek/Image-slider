// get slider items
var sliderimages = Array.from(document.querySelectorAll('.slider-container img'));
// get n of slides
var slidescount = sliderimages.length;
// set current slide
var currentslide = 1;
// slide number string element
var slidenumberelement = document.getElementById('slide-number');
// previous and next buttons
var prebutton = document.getElementById('previous');
var nextbutton = document.getElementById('next');
// handling previous and next buttons by clicking

nextbutton.onclick = nextslide;
prebutton.onclick = preslide;

// create main ul element
var indicatorsElement = document.createElement('ul');
// set id on ul
indicatorsElement.setAttribute('id', 'indicators-ul');
//create list item based on slides count
for (var i = 1; i <= slidescount; i++)
{
    // create li
    oneindicatoritem = document.createElement('li'); 
    oneindicatoritem.setAttribute('data-index', i);
    // set item content
    oneindicatoritem.appendChild(document.createTextNode(i));
    indicatorsElement.appendChild(oneindicatoritem);
  
}
document.getElementById('indicators').appendChild(indicatorsElement);
//get the new created ul
var indicatorsElementnew = document.getElementById('indicators-ul');
var bullets = Array.from(document.querySelectorAll("#indicators-ul li"));
// loop through all bullets
for (var i = 0; i < bullets.length; i++)
{
    bullets[i].onclick = function ()
    {
        currentslide = parseInt(this.getAttribute('data-index'));
        checker();
        
    }
}
// trigger the checker
checker();
// function next slide
function nextslide() {
    if (nextbutton.classList.contains('disabled')) {
        return false;
    } else {
        currentslide++;
        checker();
    }
}
function preslide() {
      if (prebutton.classList.contains("disabled")) {
        return false;
      } else {
        currentslide--;
        checker();
      }
}
// create the checker fn.

function checker()
{
    slidenumberelement.textContent = 'slide #' + (currentslide) + ' of ' + (slidescount);
    // remove all active classes
    removeAllActive();
    // set active class on current slide

    sliderimages[currentslide - 1].classList.add('active');
// set active class on current indicator

    indicatorsElement.children[currentslide - 1].classList.add('active');
    // check if current slide is the first slide
    if (currentslide == 1)
    {
        prebutton.classList.add("disabled");
    }
    else
    {
        prebutton.classList.remove("disabled");
    }
    // check if current slide is the last slide
    if (currentslide == slidescount)
    {
       nextbutton.classList.add("disabled");
    }
    else
    {
    nextbutton.classList.remove("disabled");
    }

}
// remove all active classes from images and bullets
function removeAllActive()
{
    // loop through all images
    sliderimages.forEach(function (image) {
        image.classList.remove('active');

    });
    // loop through all bullets
      bullets.forEach(function (bullet) {
        bullet.classList.remove("active");
      });

}