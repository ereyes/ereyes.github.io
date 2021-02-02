$(document).ready(function() {

  // Déclaration des variables globales... nom des éléments DC
  var title = 'meta[name^="DC.Title"]',
    creator = 'meta[name^="DC.Creator"]',
    sujet = 'meta[name^="DC.Subject"]',
    description = 'meta[name^="DC.Description"]',
    publisher = 'meta[name^="DC.Publisher"]',
    contributor = 'meta[name^="DC.Contributor"]',
    date = 'meta[name^="DC.Date"]',
    type = 'meta[name^="DC.Type"]',
    format = 'meta[name^="DC.Format"]',
    identifier = 'meta[name^="DC.Identifier"]',
    preview = 'meta[name^="DC.Source"]',
    source = 'meta[name^="DC.Source"]',
    language = 'meta[name^="DC.Language"]',
    relation = 'meta[name^="DC.Relation"]',
    coverage = 'meta[name^="DC.Coverage"]',
    rights = 'meta[name^="DC.Rights"]';


  // Boucle pour obténir les informations disponibles dans les balises <meta>
  $(title).each(function() {
    if (title != 0) {
      $('#title').show();
      var meta_tag = $(this).attr('content');
      $('#title').append('<p>' + meta_tag + '</p>');
    }
  });

  $(creator).each(function() {
    if (creator != 0) {
      $('#creator').show();
      var meta_tag = $(this).attr('content');
      $('#creator').append('<p>' + meta_tag + '</p>');
    }
  });

  $(sujet).each(function() {
    if (title != 0) {
      $('#sujet').show();
      var meta_tag = $(this).attr('content');
      $('#sujet').append('<p>' + meta_tag + '</p>');
    }
  });

  $(description).each(function() {
    if (title != 0) {
      $('#description').show();
      var meta_tag = $(this).attr('content');
      $('#description').append('<p>' + meta_tag + '</p>');
    }
  });

  $(publisher).each(function() {
    if (publisher != 0) {
      $('#publisher').show();
      var meta_tag = $(this).attr('content');
      $('#publisher').append('<p>' + meta_tag + '</p>');
    }
  });

  $(contributor).each(function() {
    if (contributor != 0) {
      $('#contributor').show();
      var meta_tag = $(this).attr('content');
      $('#contributor').append('<p>' + meta_tag + '</p>');
    }
  });

  $(date).each(function() {
    if (date != 0) {
      $('#date').show();
      var meta_tag = $(this).attr('content');
      $('#date').append('<p>' + meta_tag + '</p>');
    }
  });

  $(type).each(function() {
    if (type != 0) {
      $('#type').show();
      var meta_tag = $(this).attr('content');
      $('#type').append('<p>' + meta_tag + '</p>');
    }
  });

  $(format).each(function() {
    if (format != 0) {
      $('#format').show();
      var meta_tag = $(this).attr('content');
      $('#format').append('<p>' + meta_tag + '</p>');
    }
  });

  $(identifier).each(function() {
    if (identifier != 0) {
      $('#identifier').show();
      var meta_tag = $(this).attr('content');
      $('#identifier').append('<p>' + meta_tag + '</p>');
    }
  });

  $(preview).each(function() {
    if (title != 0) {
      $('#preview').show();
      var meta_img = $(this).attr('content');
      $('#preview video').attr('src', meta_img);
    }
  });

  $(source).each(function() {
    if (source != 0) {
      $('#source').show();
      var meta_img = $(this).attr('content');
      $('#source').append('<p><a href="' + meta_img + '">' + meta_img + '</a></p>');
    }
  });

  $(language).each(function() {
    if (language != 0) {
      $('#language').show();
      var meta_tag = $(this).attr('content');
      $('#language').append('<p>' + meta_tag + '</p>');
    }
  });

  $(relation).each(function() {
    if (relation != 0) {
      $('#relation').show();
      var meta_tag = $(this).attr('content');
      $('#relation').append('<p>' + meta_tag + '</p>');
    }
  });

  $(coverage).each(function() {
    if (coverage != 0) {
      $('#coverage').show();
      var meta_tag = $(this).attr('content');
      $('#coverage').append('<p>' + meta_tag + '</p>');
    }
  });

  $(rights).each(function() {
    if (rights != 0) {
      $('#rights').show();
      var meta_tag = $(this).attr('content');
      $('#rights').append('<p>' + meta_tag + '</p>');
    }
  });

});
