$(document).ready(function () {

  for (var i = 0; i < 5; i++) {
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/name",
        method: "GET",
        success: function (data) {
          console.log(data);
          $('ul').append('<li>'+ data.response +'</li>');
        },
        error: function () {
          alert("E' avvenuto un errore. ");
        }
      }
    );
  }
});
