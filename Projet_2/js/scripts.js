// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================
var useData = function(data) {
  dynamicActions(data);
  accueil(data);
  recettes(data);
};
/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    // function2()...
    // function3()...
    // function4()...
    // etc.
  });
};

// My functions

var accueil = function (data){
  for (i in data.articles){ // i est une string donc obligé de le convertir en nombre
    $('#article'+(Number(i)+1)).html(data.articles[i].content);
    $('#title'+(Number(i)+1)).html("| "+data.articles[i].title+" |");
    $('#subtitle'+(Number(i)+1)).html(data.articles[i].subtitle);
  };
};

var recettes = function (data){
  for(i in data.recipes) {
    $('#recette'+(Number(i)+1)+' > div > h3').html(data.recipes[i].description);
    $('#recette'+(Number(i)+1)+' > input').attr('value',data.recipes[i].price+" $");
    $('#recette'+(Number(i)+1)+' > img').attr('src','./img/img_recettes/recette'+(Number(i)+1)+'.jpg');
  };

  $('.slick').slick({
  nextArrow: '.slick-next',
  prevArrow: '.slick-prev',
  infinite: true,
  draggable:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        draggable:false,
        slidesToScroll: 3,
        infinite: true,
        adaptiveHeight: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:true,
        draggable:false,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      }
    }
  ]
  }).on('setPosition', function () {
    var image_height = $('.slide_img').outerHeight();
    var buttons_height = $('.slide_buttons').outerHeight();

    var h3_height = 0;
    for (i=0;i<12;i++) {
       if ($('#slide_h3_'+(i+1)).outerHeight() > h3_height) {
         h3_height = $('#slide_h3_'+(i+1)).outerHeight();
       };
     };
    $('.slide').css('height', (h3_height+image_height+buttons_height) + 'px');
    $('.slide_text').css('height', h3_height +'px');

    var slider_width = $('.slider').innerWidth();
    $('#add_cart_button_div').css('width', slider_width +'px');
    $('.articles').css('width', slider_width +'px');
    $('#formulaire').css('width',slider_width+'px');
  });
}

/*function dessin() {
  var canevas = $('#zone')[0];
  var contexte = canevas.getContext("2d");
  var img = new Image();
  img.src ='./img/Sylvie.svg';
  contexte.drawImage(img,0,0);
};
*/

// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  // Some code...
  document.title = data.documentTitle;
};
