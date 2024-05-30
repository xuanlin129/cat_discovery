$('.shadow').on('click', function () {
  $('.center-dot').css({'width': '3000px', 'height': '3000px'})
  setTimeout(function () {
    $('.popup').css({'width': '90%', 'opacity': '1', 'z-index': '999'})
  }, 1000)
})