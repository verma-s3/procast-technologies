jQuery(document).ready(function ($) {
  // fixedHeaderOnScroll();
  $('#toggleOpen').click(function () {
    $("#toggleClose").addClass('active');
    $("#toggleOpen").addClass("to");
    $("#toggleClose").addClass("tc");
    $('#overlay').addClass('open');
    $('html').addClass('hidden');
  });

  $('#toggleClose').click(function () {
    $("#toggleClose").removeClass('active');
    $('#overlay').removeClass('open');
    $("#toggleOpen").removeClass("to");
    $("#toggleClose").removeClass("tc");
    $('html').removeClass('hidden');
  });


  // Closes overlay menu after clicking on the menu link
  $('#site-navigation3 ul li a').on("click", function (e) {
    $('#toggle').click();
  });

  AOS.init({
    duration: 1200,
    easing: 'ease-in-quad',
    disable: 'mobile',
    once: true
  });

  var divCount = $('.advantage').length;
  // console.log('Number of divs in the section:', divCount);
  // if (divCount > 5) {
  //   $('.advantage').slice(5).hide();
  // }
  function toggleAdvantages() {
    if ($(window).width() < 768) {
      $('.advantage').slice(5).hide();
    } else {
      $('.advantage').slice(5).show();
    }
  }

  toggleAdvantages(); // Initial check
  $(window).resize(toggleAdvantages); // Recheck on window resize
  $('.see-more-btn').click(function () {
    $('.advantage').slice(5).slideToggle('slow');
    if ($('.see-more-btn').text() == "See more") {
      $('.see-more-btn').text("see Less");
    } else {
      $('.see-more-btn').text("See more");
    }
  });

  $('.service-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3.25,
    slidesToScroll: 1,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // mobileFirst: true,
        }
      }
    ]
  });

  // frequesnt Questions and Answers
  $('.faq-answer').hide();
  $(function () {

    $(".faq-button").click(function () {

      // Cancel the siblings
      $(this)
        .siblings(".faq-button")
        .removeClass("is-active")
        .children(".faq-answer")
        .slideUp();


      // Toggle the item
      $(this)
        .toggleClass("is-active")
        .children(".faq-answer")
        .slideToggle("ease-out");
    });
  });

  // Milestomes -mobile view
  $('.year-answer')
    .hide().first().show().closest('.year-button').addClass('is-active');
  $(function () {

    $(".year-button").click(function () {

      // Cancel the siblings
      $(this)
        .siblings(".year-button")
        .removeClass("is-active")
        .children(".year-answer")
        .slideUp();


      // Toggle the item
      $(this)
        .toggleClass("is-active")
        .children(".year-answer")
        .slideToggle("ease-out");
    });
  });

   // Milstones - Add click event for toggling descriptiono in desktop view
   $('.div-left .mile-button').click(function () {
    var index = $(this).parent().index(); // Get the index of the clicked milestone-year

    // Update description visibility
    $('.div-left .desc').removeClass('is-active').slideUp(); // Hide all descriptions
    $('.div-left .desc').eq(index).addClass('is-active').slideDown(); // Show the clicked description

    // Update image visibility
    $('.mile-answer .img-div').removeClass('is-active').hide(); // Hide all images
    $('.mile-answer .img-div').eq(index).addClass('is-active').fadeIn("slow"); // Show the corresponding image

    // Update active state for the clicked year
    $('.div-left .mile-button').removeClass('is-active'); // Remove is-active from all buttons
    $(this).addClass('is-active'); // Add is-active to the clicked button
  });
  /********      End here        ****** */
  // $('.testimonails-slider').slick('refresh');
  //Testimonials Slider
  $('.testimonails-slider').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          variableWidth: false, // Disable variable width for smaller screens
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          // autoplay: false,
          // prevArrow: $('.prevTestArrow'),
          // nextArrow: $('.nextTestArrow'),
        }
      },
    ]
  });

  $(window).on('resize', function () {
    $('.testimonails-slider').slick('setPosition');
  });

  //news lsider
  $('.news-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  //careers field option selcted when redirect to careers pageg from who we are page:
  // Function to get the value of a query parameter
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);   
    return urlParams.get(param);
  }
 

  if (window.location.pathname === "/contact/") {
    console.log("DOM fully loaded");

    // Function to get the query parameter value
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Get the value of the 'select' query parameter
    const selectOption = getQueryParam("select");
    console.log("Query parameter 'select':", selectOption);

    // If the parameter exists, set the value of the select field
    if (selectOption) {
      const selectField = document.querySelector("select[name='Subject']");
      console.log("Select field found:", selectField);

      if (selectField) {
        selectField.value = selectOption;
        console.log("Select field value set to:", selectField.value);
      }
        
    }
  }

  
});

$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});
