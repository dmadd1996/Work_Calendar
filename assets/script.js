$(".description").on("click", function () {
    var text = $(this)
      .text()
      .trim();
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    $(this).replaceWith(textInput);
  });

  $('.description').on('click', console.log('click'))
  
