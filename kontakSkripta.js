$(document).ready(function(){
    $(window).scroll(function(){
        //Da se button za povratak pojavi na 500px
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Da nas button vrati na vrh
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
});
//Fade
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 220) {
      $('.form').fadeIn();
    } else {
      $('.form').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1080) {
      $('.lokacija').fadeIn();
    } else {
      $('.lokacija').fadeOut();
    }
  });
