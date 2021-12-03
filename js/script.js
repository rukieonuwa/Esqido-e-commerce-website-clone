var nav = $('.navigation'),
   aboveHeight = $('.navigation').height(),
   banner = $('.banner'),
   shopnow = $('.shop_now_button'),
   bannerh5 = $('.banner2_h5'),
   banner2p = $('.banner2_p'),
   banner2Button = $('.banner2_button'),
   sec3 = $('.sec3'),
   shopnowHeight = $('.sec3').height(),
   sec5img = $('.sec5img'),
   sec5Height = $('.sec5').height(),
   sec6img = $('.sec6img'),
   sec6Height = $('.sec6').height(), l
sec7img = $('.sec7img'),
   sec7Height = $('.sec6').height(),
   sec8 = $('.sec8'),
   sec8Height = $('.sec8').height(),
   shopDropdown = $('.shop_dropdown'),
   learnDropdown = $('.learn_dropdown'),
   moreDropdown = $('.more_dropdown'),
   shopOption = $('.shop_option'),
   learnOption = $('.learn_option'),
   moreOption = $('.more_option'),
   cartButton = $('.cart_view'),
   cartView = $('.cart-container'),
   addToCart = $('#addtocartbtn'),
   emptyCart = $('.cart-containerempty'),
   xButton = $('.xbutton'),
   xButton1 = $('.xbutton1'),
   remove = $('.remove_qty'),
   checkoutButton = $('.checkoutbutton'),
   cartPriceSpan = $('#cartPrice'),
   price = 10;
   
  

$(document).ready(function () {

   shopnow.hide();
   sec5img.hide();
   sec6img.hide();
   sec7img.hide();
   sec8.hide();

   var cartCount = localStorage.getItem('cartcount')
   if (cartCount){
   cartButton.text(`CART (${cartCount})`)
   }
   
   

   // cartButton.val("Cart (" + cartCount + ")")

   $(document).scroll(function () {
      nav.fadeIn(1600);

      // nav.css('background', 'white');
      //     nav.addClass('navigate');
      //   }, function(){
      //       nav.removeClass('navigation');

      if ($(window).scrollTop() >= aboveHeight) {
         $('.navigation').addClass('navigate').css("background", "white");
         //  $('.banner').addClass('banner2').css("background-image", "url('img/esq-homepage-banner-cu-gel-eyeliner-hq_1400x.webp')").fadeIn(1600);
         //  bannerh5.css('display', 'flex');
         //  banner2p.css('display', 'flex');

      }
      else {
         $('.navigation').removeClass('navigate').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);
         //  $('.banner').removeClass('banner2').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);
         //  bannerh5.css('display', 'none');
         //  banner2p.css('display', 'none');
         //  banner2Button.css('display', 'none');

      }




      shopnow.slideDown(1600);

      //  $('.navigation').addClass('navigate').css("background", "white");
      //  $('.banner').addClass('banner2').css("background-image", "url('img/esq-homepage-banner-cu-gel-eyeliner-hq_1400x.webp')").fadeIn(1600);
      //  bannerh5.css('display', 'flex');
      //  banner2p.css('display', 'flex');
      //   banner2Button.css('display', 'flex');
      //  $('.navigation').removeClass('navigate').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);
      //  $('.banner').removeClass('banner2').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);
      //  bannerh5.css('display', 'none');
      //  banner2p.css('display', 'none');
      //  banner2Button.css('display', 'none');



      // if ($(window).scrollTop() > aboveHeight){
      //         $('.banner').addClass('banner2').fadeIn(1600);
      //         bannerh5.css('display', 'flex');
      //         banner2p.css('display', 'flex');
      //         banner2Button.css('display', 'flex');
      //     }
      // else{
      //     $('.banner').removeClass('banner2');
      //         bannerh5.css('display', 'none');
      //         banner2p.css('display', 'none');
      //         banner2Button.css('display', 'none');
      // }
      if ($(window).scrollTop() >= sec5Height) {
         sec5img.fadeIn(2000);
      }
      else {
         sec5img.stop(1600);
      }

      if ($(window).scrollTop() >= sec6Height) {
         sec6img.fadeIn(2000);
      }
      else {
         sec6img.stop(1600);
      }
      if ($(window).scrollTop() >= sec7Height) {
         sec7img.fadeIn(2000);
      }
      else {
         sec7img.stop(1600);
      }

      if ($(window).scrollTop() >= sec8Height) {
         sec8.slideDown(2000);
      }
      else {
         sec8.stop(1600);
      }






   });


   $('.shop_option').mouseenter(function () {
      $('.navigation').css("background", "white");
      shopDropdown.slideToggle(400, function () {
         $(this).css({ "display": "flex" });


      })


   })

   $('.shop_dropdown').mouseleave(function () {
      shopDropdown.hide(800);
      $('.navigation').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);


   })

   $('.learn_option').mouseenter(function () {
      $('.navigation').css("background", "white");
      learnDropdown.slideToggle(400, function () {
         $(this).css('display', 'flex');
      })

   })

   $('.learn_dropdown').mouseleave(function () {
      learnDropdown.hide(800);
      $('.navigation').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);


   })

   $('.more_option').mouseenter(function () {
      $('.navigation').css("background", "white");
      moreDropdown.slideToggle(400, function () {
         $(this).css('display', 'flex');
      })

   })

   $('.more_dropdown').mouseleave(function () {
      moreDropdown.hide(800);
      $('.navigation').css("background-image", "url('img/esq-website-v5-homepage-banner-promo-year-end-2020_1400x\ \(1\).png')").fadeIn(1600);


   })



   





   $('#addtocartbtn').click(function(){
     cartcount=localStorage.getItem('cartcount')
     if (cartcount){
        cartcount = parseInt(cartcount) 
        cartcount++
     }
     else{
        cartcount=1
     }

     localStorage.setItem('cartcount', cartcount)

     cartButton.text(`CART (${cartcount})`)
     
    
    
   })

   $('.cart_view').click(function () {
      cartCount= localStorage.getItem('cartcount')
      if (cartCount){
         cartView.css("display", "inline");
         }
      else{
         
        cartView.css("display", "none");
        emptyCart.css("display", "inline");
      }
    console.log(cartView);

      cartPrice = parseInt(cartCount) * price
      cartPriceSpan.text(cartPrice)

      $('.qtyChange').val(cartCount)
      
      $('body').css("overflow", "hidden");
      // $(document).bind('scroll', function(){
      //    window.scrollTo(0,0);
      // });
  
   })

   $('.xbutton').click(function(){
      cartView.css("display", "none");
      emptyCart.css("display", "none");
      $(document).unbind('scroll');
      $('body').css("overflow", "visible");
      
   })

   $('.xbutton1').click(function(){
      cartView.css("display", "none");
      emptyCart.css("display", "none");
      $(document).unbind('scroll');
      $('body').css("overflow", "visible");
     
   })

   $('.removebtn').click(function(){
      localStorage.removeItem('cartcount');
      cartView.css("display", "none");
      emptyCart.fadeIn(100);
      cartButton.text('CART (0)');
      
     

   })



   $('.qtyChange').change(function(){

     newCartCount = $(this).val();
     localStorage.setItem('cartcount', newCartCount)

     cartButton.text(`CART (${newCartCount})`)

     cartPrice = parseInt(newCartCount) * price
     cartPriceSpan.text(cartPrice)
     
   })




























});

