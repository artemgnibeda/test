$(document).ready(function() {
  $('.itemsMenu>a').click(function() {
    if ($(this).next('.dropMenu').css("display") == "none") {
      $('.dropMenu').hide('normal');
      $(this).next('.dropMenu').slideToggle('normal');
      $('.itemsMenu>a').removeClass('active');
      $(this).toggleClass('active');
    } else $('.dropMenu').slideToggle('normal');
    return false;
  });
});
