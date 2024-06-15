function product_cat(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("cc_tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

$(document).ready(function() {

  $('.filter-title').click(function() {
    $(this).toggleClass('active');
    var content = $(this).next('.filter-content');
    content.slideToggle(300);
});
   



    // 

    $('.filter').click(function() {
        var filterValue = $(this).attr('data-filter');

        if (filterValue === '*') {
            $('.item').show('5000');
        } else {
            $('.item').not(filterValue).hide('10000');
            $('.item').filter(filterValue).show('10000');
        }

        $('.filter').removeClass('cc_p_active');
        $(this).addClass('cc_p_active');
    });

    $('#toggleSidebar').click(function() {
        $('#sidebar').toggleClass('show');
    });

    $('#toggleSidebar2').click(function() {
      $('#sidebar').toggleClass('show');
  });

    $('.sidebar-close').click(function() {
        $('#sidebar').toggleClass('show');
    });
});


// Popup
(function($) {
  $.fn.openPopup = function( settings ) {
    var elem = $(this);
    // Establish our default settings
    var settings = $.extend({
      anim: 'fade'
    }, settings);
    elem.show();
    elem.find('.popup-content').addClass(settings.anim+'In');
  }
  
  $.fn.closePopup = function( settings ) {
    var elem = $(this);
    // Establish our default settings
    var settings = $.extend({
      anim: 'fade'
    }, settings);
    elem.find('.popup-content').removeClass(settings.anim+'In').addClass(settings.anim+'Out');
    
    setTimeout(function(){
        elem.hide();
        elem.find('.popup-content').removeClass(settings.anim+'Out')
      }, 500);
  }
    
}(jQuery));

// Click functions for popup
$('.open-popup').click(function(){
  $('#'+$(this).data('id')).openPopup({
    anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
  });
});
$('.close-popup').click(function(){
  $('#'+$(this).data('id')).closePopup({
    anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
  });
});
