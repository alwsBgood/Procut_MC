if (localStorage.name != "undefined"){$('input[name="entry.1976543973"]').val(localStorage.name);}
if (localStorage.email != "undefined"){$('input[type="email"]').val(localStorage.email);}
if (localStorage.phone != "undefined"){$('input[type="tel"]').val(localStorage.phone);}

$(function() {
  $("[name=send]").click(function () {
    $(":input.error").removeClass('error');
    $(".allert").remove();

    var error = 0;
    var btn = $(this);
    var form = btn.closest('form');
    var validaton = btn.closest('form').find('[required]');
    var msg = btn.closest('form').find('input, textarea, select');
    var send_btn = btn.closest('form').find('[name=send]');
    var send_options = btn.closest('form').find('[name=campaign_token]');
    var gd_send_adress = btn.closest('form').find('[name=gd_send_adress]').val();

    localStorage.name = form.find('input[name="entry.1976543973"]').val();
    localStorage.email = form.find('input[type="email"]').val();
    localStorage.phone = form.find('input[type="tel"]').val();

    var mail_chimp = btn.closest('form').find('[name="entry.492626147"]').val();
    var name_chimp = btn.closest('form').find('[name="entry.1976543973"]').val();
    var phone_chimp = btn.closest('form').find('[name="entry.1738947959"]').val();

    btn.closest('form').find('[name=MERGE1]').val(name_chimp);
    btn.closest('form').find('[name=MERGE0]').val(mail_chimp);
    btn.closest('form').find('[name=MMERGE2]').val(phone_chimp);

    var href = document.location.href;
    var new_url = href.split('?')[1];
    var ref = '&ref=' + document.referrer;
    var id = 'procut_kids_mc';
    var url = href.split('?')[0];
    var utm_catch = '&' + new_url + "&page_url=" + url;
    var leade_name = btn.closest('form').find('[name=name]').val();
    var lead_price = "&lead_price=" + $('#price').html();
    var invite_id = "&invite_id="+href.split('invite_id=')[1];
    var cook_ga;
    var hmid;


    $(validaton).each(function() {
      if ($(this).val() == '') {
        var errorfield = $(this);
        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
        error = 1;
        $(":input.error:first").focus();
        return;
      } else {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($(this).attr("type") == 'email') {
          if(!pattern.test($(this).val())) {
            $("[name=email]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
        var patterntel = /^()[- +()0-9]{9,18}/i;
        if ( $(this).attr("type") == 'tel') {
          if(!patterntel.test($(this).val())) {
            $("[name=phone]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите номер телефона в формате +3809999999</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
      }
    });
    if(!(error==1)) {
      $(send_btn).each(function() {
        $(this).attr('disabled', true);
      });
      $.get("http://ipinfo.io", function(response) {
       $('.geoloc').val(response.city + ', ' + response.country)
      }, "jsonp");
      var data = form.serialize();
      var data_form = form.attr('data-form');
      var temp_date = new Date();
      var temp_month = temp_date.getMonth();
      temp_month++;
      var date_submitted = '&date_submitted=' +temp_date.getDate()+" "+temp_month+" " +temp_date.getFullYear();
      var time_submitted = '&time_submitted=' +temp_date.getHours() + ":" +temp_date.getMinutes();
      data += utm_catch;
      data += date_submitted;
      data += time_submitted;
      data += ref;
      data += cook_ga;
      data += leade_name;
      data += '&data_form=' + data_form;
      data += '&hmid=' + hmid;
      $.ajax({
        type: "GET",
        url: "register_mail.php",
        data: data,
        beforeSend: function() {
          form.find('button').prop( "disabled", true );
          console.log(data);
        },
        success: function() {
          console.log('register_mail ok!');
        }
      });
      $.ajax({
        type: "POST",
        url: gd_send_adress,
        data: msg,
        error: function(xhr, str) {
          console.log('google_doc ok!');
        }
      });
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: msg,
      });
      // $.ajax({
      //   type: 'POST',
      //   url: '//procut.us8.list-manage.com/subscribe/post?u=1e626788e6127a795fec70e41&amp;id=346125971d',
      //   data: msg,
      // });
      $.ajax({
        type: "POST",
        url:"amo/amocontactlist.php",
        data: data,
        success: function() {
          console.log('amo ok!');

          setTimeout(function() {
            form.find('button').text('✔ Отправлено');
          }, 350);
          dataLayer.push({'event': 'FormSubmit', 'form_type': data_form});
           setTimeout(function() {
              window.location = "http://procut.com.ua/event/mk-montage/success/"
          }, 1500);
        }
      });
    }
    return false;
  })
});





 // Smooth scroll to anchor

 $('.scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 1000);
  return false;
});

// //  INPUT TEL MASK

// jQuery(function($){
//  $("input[type='tel']").mask("+38 (099) 999-9999");
// });



// Scroll BAR

$(window).scroll(function() {
    // calculate the percentage the user has scrolled down the page
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

    $('.bar-long').css('width', scrollPercent +"%"  );

  });


// SLIDER


$(document).ready(function() {
  $('.slider_testimonial').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true
  });
});


// Waypoint

$('#sec_03').waypoint(
  function() {
    $( "#sec_03 .item" ).addClass( "animated" );
    $( "#sec_03 .item" ).addClass( "flipInX" );
  },
  {offset: "550px"}
  );

// Parallax

$(window).scroll(function() {

  var st = $(this).scrollTop() /100;
  var tt = $(this).scrollTop() /100;

  $(".paralax_letter").css({
    "transform" : "translate3d(0px, " + st  + "%, .0px)",
    "-webkit-transform" : "translate3d(0px, " + st  + "%, .0px)",
    "-ms-transform" : "translate3d(0px, " + st  + "%, .0px)"
  });

});

//  UP BUTTON

$( document ).ready(function() {
  $('#scrollup img').mouseover( function(){
    $( this ).animate({opacity: 0.65},100);
  }).mouseout( function(){
    $( this ).animate({opacity: 1},100);
  });

  $(window).scroll(function(){
    if ( $(document).scrollTop() > 0 ) {
      $('#scrollup').fadeIn('slow');
    } else {
      $('#scrollup').fadeOut('slow');
    }
  });

  $('#scrollup').click(function() {
    $('body,html').animate({scrollTop:0},1000);
  });
});

// PREVENT SCROLLING

$('*').click(function() {
  var modal= $(".md-modal");
  if( modal.hasClass('md-show')){
    $("body").addClass('unscroll')
  } else {
    $("body").removeClass('unscroll');
  }
});

// Lines move

$('section').mousemove(function( e ) {
  var y = e.pageY;
  $('.line').css({
    willchange: 'transform',
    transform: 'translate(0, ' + y + 'px)'
  });;
  if(y>850){
    $('.line').addClass('purple');
  } else{
    $('.line').removeClass('purple');
  }
});


// Menu


  $(window).scroll(function(){
    if ( $(document).scrollTop() > 350 ) {
      $('.menu').fadeIn('slow');
    } else {
      $('.menu').fadeOut('slow');
    }
  });

  // waypoint

$('#sec_01').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(1)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_02').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(2)").addClass('active');
    $("nav ul p").addClass('visible');
    setTimeout(function() {
      $("nav ul p").removeClass('visible');
      $('.menu').css('opacity', '.4');
    }, 3000);
  },
  {offset: "-10px"}
);

$('#sec_03').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(3)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_04').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(4)").addClass('active');
  },
  {offset: "0px"}
);

$('#sec_05').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(5)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_06').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(6)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_07').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(7)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_08').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(8)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_09').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(9)").addClass('active');
  },
  {offset: "-10px"}
);

$('#sec_10').waypoint(
  function() {
    $("nav ul li").removeClass('active');
    $("nav ul li:nth-child(10)").addClass('active');
  },
  {offset: "200px"}
);