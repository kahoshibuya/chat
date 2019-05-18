$(function() {
  function buildHTML(message){

    var html = `<div class="message">
                  <div class="upper-info">
                      <div class="upper-info__user">
                          ${ message.user_name }
                      </div>
                      <div class="upper-info__date">
                          ${ message.time }
                      </div>
                  </div>
                  <div class="message__text">
                      <p class="message__text__content">
                          ${ message.content }
                      </p>
                  </div>
              </div>`;
    return html;
    }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      .var html = buildHTML(data);
      $('.messages').append(html);
      $('.input-box__text').val('');
      $('.submit-btn').prop('disabled', false);
    })
  })
})