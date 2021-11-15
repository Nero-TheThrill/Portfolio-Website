 $(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10
        }, 500, 'swing', function () {
            window.location.hash = target-10;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#Mynav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos+120 && refElement.position().top + refElement.height()+120 > scrollPos) {
          $('#Mynav ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


function clickEffect(e){
  var d=document.createElement("div");
  var d2=document.createElement("div");
  d.className="clickEffect1";
  d2.className="clickEffect2"
  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
  d2.style.top=e.clientY+"px";d2.style.left=e.clientX+"px";

  document.body.appendChild(d);
  document.body.appendChild(d2);
  d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
  d2.addEventListener('animationend',function(){d2.parentElement.removeChild(d2);}.bind(this));
}
document.addEventListener('click',clickEffect);

