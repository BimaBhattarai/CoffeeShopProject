$(document).ready(function () {
//All scripts Here 


//Image slider Initilization

$('.owl-carousel').owlCarousel({
    items: 1, 
    margin: 15,
    loop: true,
    nav:true,
    dots: true,
});

//fix div when it reaches to top

$(window).scroll(function() {

    var heightOfTopbar = $(".topbar").height();
    console.log(heightOfTopbar);
    if ($(this).scrollTop() > heightOfTopbar) {
        $("header").addClass("fixHeader");
      } else {
        $("header").removeClass("fixHeader");
      }
    });

});
