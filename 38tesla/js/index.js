//880, 656, 432, 208

var galleryContainer=document.getElementById("gallery-container");
var arrayOfImages=galleryContainer.getElementsByTagName("a");
var numberOfImages=arrayOfImages.length;
var galleryWidth;
var offset=0; //текущее смещение
var set; // количество картинок на странице

initGallery();

function initGallery(){
	galleryWidth=galleryContainer.offsetWidth;
	switch (galleryWidth) {
		case 750: set=10; break;
		case 600: set=8; break;
		case 450: set=6; break;
		case 300: set=4; break;
		case 150: set=2; break;
	}
	update();
}

function nextSet(){
	offset+=set;
	if (offset>=numberOfImages) offset=0;
	update()
}

function prevSet(){
	offset-=set;
	if (offset<0) offset=numberOfImages-set;
	update();
}

function setPage(pageNumber){
	offset=pageNumber*set;
	update();
}

function update(){
	for(i=0;i<numberOfImages;i++){
		if(i>=offset && i<offset+set){
			//arrayOfImages[i].style.display="inline-block";
			$("#gallery-container a:eq("+i+")").fadeIn(300);
		} else{
			arrayOfImages[i].style.display="none";
			//$("#gallery-container a:eq("+i+")").hide(300);
		}
	}
	if(set==10){
		pageMarker=$('#page-nav span').eq(offset/10);
		pageMarker.addClass('active');
		pageMarker.siblings().removeClass("active");		
	}
}

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
        yaCounter26216904.reachGoal('sentMailMessage');
      } else {
        $('.request-status').html(response.errorText);
        yaCounter26216904.reachGoal('errorWhenSendingMessage');
      }
    },
    type: 'post',
    url: form.attr('action')
  });
};

(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter26216904 = new Ya.Metrika({id:26216904,
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54263260-2', 'auto');
ga('send', 'pageview');