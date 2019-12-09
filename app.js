$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.menu').addClass('shrink');
    } else {
      $('.menu').removeClass('shrink');
    }
  });

  $('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var img = button.data('img') 
    var client = button.data('client')
    var category = button.data('category')
    var modal = $(this)


    console.log(modal.find('.modal-body img').attr('src'))
    modal.find('.modal-body img').attr('src',"img/"+img+"-full.jpg")

    modal.find('.client').text('Client: ' + client)
    modal.find('.category').text('Category: ' + category)
  })