$(function() {                      

$(document).on('click', '.expand-box .expand-button', function () {
    $(this).removeClass('doubleclicked').addClass('clicked');
    $(".square-part, .round-part").addClass("expanded");
});

$(document).on('click', '.expand-button.clicked', function () {
    $(this).removeClass('clicked').addClass('doubleclicked');
  $(".square-part.expanded, .round-part.expanded").removeClass("expanded");
});
  
});