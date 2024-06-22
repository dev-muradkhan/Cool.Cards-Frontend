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

// Popup Model
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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







    // Sidebar Product Filter
    $(".custom_filter :checkbox").click(function(){
       	$(".portfolio-items .item").hide();
       	$(".custom_filter :checkbox:checked").each(function() 
       	{
           $("." + $(this).val()).fadeIn();
		});
       
        if($('.custom_filter :checkbox').filter(':checked').length < 1) 
        {
        	$(".custom_filter .item").fadeIn();
        	
        }
        
    });

});


