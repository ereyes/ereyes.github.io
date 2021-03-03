$(document).ready(function() {


  var fichier_json = "liste_items.json";
  $('.list_view').hide();
  $('.grid_view').hide();

  $.getJSON(fichier_json, function(data) {
    $.each(data, function(i, d) {
      var res = i + 1;
      $('#message').html('Vous avez <strong>' + res + ' </strong> items dans votre collection.');
    });
  });

  $('#liste').click(function() {
    $('tbody').empty();
    $('.grid_view').hide();

    $.getJSON(fichier_json, function(data) {

      $.each(data, function(i, d) {
        var addData = '<tr>' +
          '<td>' + d.num_item + '</td>' +
          '<td>' + d.titre_item + '</td>' +
          '<td>' + d.type_item + '</td>' +
          '<td><a href="' + d.url_item + '">' + d.url_item + '</a></td>' +
          '<td><a href="' + d.url_item + '"><img src="' + d.image_item + '" style="height:50px;"></a></td></tr>;';
        $('.list_view').show();
        $('tbody').append(addData);
      });

      $("#myTable").tablesorter();

    });
  });

  $('#galerie').click(function() {
    $('.grid_view').empty();
    $('.list_view').hide();

    $.getJSON(fichier_json, function(data) {

      $.each(data, function(i, d) {
        var addData = '<div class="item_galerie">' +
          '<span>Item no. ' + d.num_item +
          '<br><a href="' + d.url_item + '">' +
          '<img src="' + d.image_item + '" style="height:100px;"></a>' +
          '<br><a href="' + d.url_item + '"><strong>' + d.titre_item + '</strong></a>' +
          '<br> Type : ' + d.type_item + '</div>';
        $('.grid_view').show();
        $('.grid_view').append(addData);
      });

    });

  });

});
