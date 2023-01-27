//on click, takes the <p> that is in the middle column of a given row and turns it into a textbox
$('.description').on('click', "p", function () {
  var text = $(this)
    .text()
    .trim();
  //collect user input
  var textInput = $('<textarea>')
    .addClass('form-control')
    .val(text);
  //replace text with user input
  $(this).replaceWith(textInput.trigger('focus'));
})

$(".description").on("blur", "textarea", function () {
  // get the textarea's current value/text
  var text = $(this)
    .val()
    .trim();

  // recreate p element
  var taskP = $("<p class='w-75 h-75 textboxP'>")
    .text(text);

  // replace textarea with p element
  $(this).replaceWith(taskP);
});

//save buttons append the user input to the local storage with different tags for each
$('#save1').click(function () {
  var text = $('#container1')
    .text();
  localStorage.setItem('task1', text)
  console.log('click')
})

$('#save2').click(function () {
  var text = $('#container2').html();
  localStorage.setItem('task2', text)
  console.log('click')
})

$('#save3').click(function () {
  var text = $('#container3').text();
  localStorage.setItem('task3', text)
  console.log('click')
})

$('#save4').click(function () {
  var text = $("#container4").text();
  localStorage.setItem('task4', text)
  console.log('click')
})

$('#save5').click(function () {
  var text = $('#container5').text();
  localStorage.setItem('task5', text)
  console.log('click')
})

$('#save6').click(function () {
  var text = $('#container6').text();
  localStorage.setItem('task6', text)
  console.log('click')
})

$('#save7').click(function () {
  var text = $('#container7').text();
  localStorage.setItem('task7', text)
  console.log('click')
})

$('#save8').click(function () {
  var text = $('#container8').text();
  localStorage.setItem('task8', text)
  console.log('click')
})

$('#save9').click(function () {
  var text = $('#container9').text();
  localStorage.setItem('task9', text)
  console.log('click')
})

//on page load, local storage is all pulled and added to the proper sections
$(document).ready(function fillScores() {
  var score1 = localStorage.getItem("task1")
  var score2 = localStorage.getItem("task2")
  var score3 = localStorage.getItem("task3")
  var score4 = localStorage.getItem("task4")
  var score5 = localStorage.getItem("task5")
  var score6 = localStorage.getItem("task6")
  var score7 = localStorage.getItem("task7")
  var score8 = localStorage.getItem("task8")
  var score9 = localStorage.getItem("task9")

  //p for each container is replaced by current local storage value
  $("#container1").append(`<p class='w-75 h-75 textboxP'>${score1}</p>`)
  $("#container2").append(`<p class='w-75 h-75 textboxP'>${score2}</p>`)
  $("#container3").append(`<p class='w-75 h-75 textboxP'>${score3}</p>`)
  $("#container4").append(`<p class='w-75 h-75 textboxP'>${score4}</p>`)
  $("#container5").append(`<p class='w-75 h-75 textboxP'>${score5}</p>`)
  $("#container6").append(`<p class='w-75 h-75 textboxP'>${score6}</p>`)
  $("#container7").append(`<p class='w-75 h-75 textboxP'>${score7}</p>`)
  $("#container8").append(`<p class='w-75 h-75 textboxP'>${score8}</p>`)
  $("#container9").append(`<p class='w-75 h-75 textboxP'>${score9}</p>`)

  //header also displays current time
  $('#currentDay').append(`Today is ${moment().format('LLLL')}`)
});

//moment.js is used to check the hour
var hour = moment().format('H')

//hour is compared to the number attributed to each row
function nine() {
  //depending on whether it is less than, greater than or equal to, a class is assigned
  if (hour > 9) {
    $("#container1").addClass("past");
  } else if (hour < 9) {
    $("#container1").addClass("future");
  } else {
    $("#container1").addClass("present");
  }
}

function ten() {
  if (hour > 10) {
    $("#container2").addClass("past");
  } else if (hour < 10) {
    $("#container2").addClass("future");
  } else {
    $("#container2").addClass("present");
  }
}

function eleven() {
  if (hour > 11) {
    $("#container3").addClass("past");
  } else if (hour < 11) {
    $("#container3").addClass("future");
  } else {
    $("#container3").addClass("present");
  }
}

function twelve() {
  if (hour > 12) {
    $("#container4").addClass("past");
  } else if (hour < 12) {
    $("#container4").addClass("future");
  } else {
    $("#container4").addClass("present");
  }
}

function thirteen() {
  if (hour > 13) {
    $("#container5").addClass("past");
  } else if (hour < 13) {
    $("#container5").addClass("future");
  } else {
    $("#container5").addClass("present");
  }
}

function fourteen() {
  if (hour > 14) {
    $("#container6").addClass("past");
  } else if (hour < 14) {
    $("#container6").addClass("future");
  } else {
    $("#container6").addClass("present");
  }
}

function fifteen() {
  if (hour > 15) {
    $("#container7").addClass("past");
  } else if (hour < 15) {
    $("#container7").addClass("future");
  } else {
    $("#container7").addClass("present");
  }
}

function sixteen() {
  if (hour > 16) {
    $("#container8").addClass("past");
  } else if (hour < 16) {
    $("#container8").addClass("future");
  } else {
    $("#container8").addClass("present");
  }
}

function seventeen() {
  if (hour > 17) {
    $("#container9").addClass("past");
  } else if (hour < 17) {
    $("#container9").addClass("future");
  } else {
    $("#container9").addClass("present");
  }
}


nine()
ten()
eleven()
twelve()
thirteen()
fourteen()
fifteen()
sixteen()
seventeen()


console.log(hour)
