$(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
  
      if (st > lastScrollTop) { // scroll down
        
        // use this is jQuery full is used
        $navbar.fadeOut('slow')
        
        // use this to use CSS3 animation
        // $navbar.addClass("fade-out");
        // $navbar.removeClass("fade-in");
        
        // use this if no effecfastt is required
        // $navbar.hide();
      } else { // scroll up
        
        // use this is jQuery full is used
        $navbar.fadeIn('slow')
        
        // use this to use CSS3 animation
        // $navbar.addClass("fade-in");
        // $navbar.removeClass("fade-out");
        
        // use this if no effect is required
        $navbar.show();
      }
      lastScrollTop = st;
    });
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
      }
    });
  });

  