$(document).ready(function() {
  window.setTimeout(function() {
      var imgs = $(".contents img:not(.inline, .no-fancybox)");

    imgs.each(function(){
      var img = $(this);
      var anchor = $('<a class="fancybox" data-fancybox="gallery"></a>')
        .attr('data-caption', img.attr('alt'))
        .attr('href', img.prop('src'));

      anchor.append(img.clone());
      img.replaceWith(anchor);
    });

    $('.contents a.fancybox').fancybox();
  }, 500);
});
