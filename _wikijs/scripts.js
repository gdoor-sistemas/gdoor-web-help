$(document).ready(function () {
    window.setTimeout(function () {
        var imgs = $(".contents img:not(.inline, .no-fancybox)");

        imgs.each(function () {
            var img = $(this);
            var anchor = $('<a class="fancybox" data-fancybox="gallery"></a>')
                .attr('data-caption', img.attr('alt'))
                .attr('href', img.prop('src'));

            anchor.append(img.clone());
            img.replaceWith(anchor);
        });

        $('.contents a.fancybox').fancybox();

        if (!document.getElementById('github')) {
            var githubNode = $('<span id="github"> | Esta Wiki está no <a target="_blank" href="https://github.com/gdoor-sistemas/gdoor-web-wiki">GitHub</a></span>');
            var footerSpan = $('footer .caption');
            footerSpan.append(githubNode);
        }
    }, 1000);
});
