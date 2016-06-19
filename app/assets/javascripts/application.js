// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize-sprockets
//= require_tree .
$(document).ready(function() {
  $('.modal-trigger').leanModal();

  $('form').on('submit', function(e){
    console.log('HAT');
    e.preventDefault();
    var data = $(this).serialize();
    $.post('/todos', data, function(data){
      console.log(data);
      $('#modal1').closeModal();
      var tr = $('<tr>');
      var deleteButton = $('<button>');

      $('tbody').append(tr);
      tr.append(
        $('<td>').text(data.done),
        $('<td>').text(data.priority),
        $('<td>').text(data.task)
      );
      $('#todos').append(tr);
    });
  })
});
