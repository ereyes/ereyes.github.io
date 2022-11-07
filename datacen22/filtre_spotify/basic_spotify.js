jQuery(document).ready(function($) {

  $('#danceability_filter').val('0.0-0.99');
  $("#danceability_slider").slider({
    range:true,
    min: 0.0,
    max: 0.99,
    values:[0.0, 0.99],
    step: 0.1,
    slide: function(event, ui) {
      $("#danceability_range_label").html(+ ui.values[ 0 ] + ' - ' + ui.values[ 1 ] );
      $('#danceability_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#status :checkbox').prop('checked', true);


  FilterJS(services, "#service_list", {
    template: '#template',
    criterias:[
      {field: 'danceability', ele: '#danceability_filter', type: 'range'},
      {field: 'status', ele: '#status :checkbox'}
    ],
    search: { ele: '#search_box' }
  });

});
