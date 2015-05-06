function getConsult(form){
  form = $(form);
  var data = form.serialize();
  $.ajax({
    data: data,
    dataType: 'json',
    error: function(){
      alert('Ошибка при отправке, попробуйте еще раз');
    },
    success: function(response){
      if (response.status == 'ok') {
        $('.request-status').html('Заявка принята');
        form[0].reset();
        yaCounter26912181.reachGoal('sentMailMessage');
      } else {
        $('.request-status').html(response.errorText);
        yaCounter26912181.reachGoal('errorWhenSendingMessage');
      }
    },
    type: 'post',
    url: form.attr('action')
  });
};

(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter26912181 = new Ya.Metrika({id:26912181,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

$(function(){
   $(document).on("scroll", function(e){
        var top = $(window).scrollTop();
       $("#parallax-move-1").css("margin-bottom",top/13);
   });

    var setCarousel= function(){
        var gallery = $(".gallery-items").width();
        $(".gallery-item").css("width", gallery + "px");
        $('.jcarousel').jcarousel({
            wrap: 'circular'
        });

    };

    $(window).on("resize", function(e){
        setCarousel();
    });
    setCarousel();

    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination({
            item: function(page) {
                return '<a  class="gallery-page" href="#' + page + '"></a>';
            },
            perPage: 1
        });

    $(document).on("click",".show-form",function(){
        $(".modal").show();
    });

    $(document).on("click",".modal-bg, .modal-close",function(){
        $(".modal").hide();
    });
    
    $(document).on("click", "#submit-btn", function(){
      $('#order').submit();
    });

});