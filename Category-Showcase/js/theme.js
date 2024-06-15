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

  $('.portfolio-controls').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 40);
    e.preventDefault();
  });

  $('.filter-title').click(function() {
    $(this).toggleClass('active');
    var content = $(this).next('.filter-content');
    content.slideToggle(300);
});
    // Sidebar colspan

// $(function(){
//     var $ul   =   $('.sidebar-content > ul');
    
//     $ul.find('li a').click(function(e){
//       var $li = $(this).parent();
      
//       if($li.find('ul').length > 0){
//         e.preventDefault();
        
//         if($li.hasClass('selected')){
//           $li.removeClass('selected').find('li').removeClass('selected');
//           $li.find('ul').slideUp(400);
//           $li.find('a i').removeClass('mdi-flip-v');
//         }else{
          
//           if($li.parents('li.selected').length == 0){
//             $ul.find('li').removeClass('selected');
//             $ul.find('ul').slideUp(400);
//             $ul.find('li a i').removeClass('mdi-flip-v');
//           }

          
//           $li.addClass('selected');
//           $li.find('>ul').slideDown(400);
//           $li.find('>a>i').addClass('mdi-flip-v');
//         }
//       }
//     });
 
    
//   });




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


