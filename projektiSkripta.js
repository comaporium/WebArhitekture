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
    if (y > 200) {
      $('.bottomMenu').fadeIn();
    } else {
      $('.bottomMenu').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1100) {
      $('.bottomMenu1').fadeIn();
    } else {
      $('.bottomMenu1').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 2000) {
      $('.bottomMenu2').fadeIn();
    } else {
      $('.bottomMenu2').fadeOut();
    }
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 2900) {
      $('.bottomMenu3').fadeIn();
    } else {
      $('.bottomMenu3').fadeOut();
    }
  });

