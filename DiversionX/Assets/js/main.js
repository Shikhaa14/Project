//jQuery time
(function($) {
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function() {
      if (animating) return false;
      animating = true;
  
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
  
      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = (now * 30) + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            'transform': 'scale(' + scale + ')'
          });
          next_fs.css({
            'left': left,
            'opacity': opacity
          });
        },
        duration: 800,
        complete: function() {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });
  
    $(".previous").click(function() {
      if (animating) return false;
      animating = true;
  
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
  
      //de-activate current step on progressbar
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = ((1 - now) * 30) + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            'left': left
          });
          previous_fs.css({
            'transform': 'scale(' + scale + ')',
            'opacity': opacity
          });
        },
        duration: 800,
        complete: function() {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    });
  
    $(".submit").click(function() {
        event.preventDefault();

        console.log("clicked")
    })

      
    $(".price1").change(() => {
      document.getElementById('box1').style.border = '2px solid #BA2130'
      document.getElementById('box2').style.border = '2px solid transparent'
      document.getElementById('title1').style.color = '#BA2130'
      document.getElementById('title2').style.color = 'black'
    })
      
    $(".price2").change(() => {
      document.getElementById('box1').style.border = '2px solid transparent'
      document.getElementById('box2').style.border = '2px solid #BA2130'
      document.getElementById('title2').style.color = '#BA2130'
      document.getElementById('title1').style.color = 'black'
    })

      
    $(".thick").change(() => {
      document.getElementById('lens-box1').style.border = '2px solid #BA2130'
      document.getElementById('lens-box2').style.border = '2px solid transparent'
      document.getElementById('lens-title1').style.color = '#BA2130'
      document.getElementById('lens-title2').style.color = 'black'
    })
      
    $(".thin").change(() => {
      document.getElementById('lens-box1').style.border = '2px solid transparent'
      document.getElementById('lens-box2').style.border = '2px solid #BA2130'
      document.getElementById('lens-title2').style.color = '#BA2130'
      document.getElementById('lens-title1').style.color = 'black'
    })

      
    $(".grey").change(() => {
      document.getElementById('grey-box1').style.border = '2px solid #BA2130'
      document.getElementById('brown-box2').style.border = '2px solid transparent'
      document.getElementById('grey-title1').style.color = '#BA2130'
      document.getElementById('brown-title2').style.color = 'black'
    })
      
    $(".brown").change(() => {
      document.getElementById('grey-box1').style.border = '2px solid transparent'
      document.getElementById('brown-box2').style.border = '2px solid #BA2130'
      document.getElementById('brown-title2').style.color = '#BA2130'
      document.getElementById('grey-title1').style.color = 'black'
    })

      
    $(".last1").change(() => {
      document.getElementById('last-box1').style.border = '2px solid #BA2130'
      document.getElementById('last-box2').style.border = '2px solid transparent'
      document.getElementById('last-title1').style.color = '#BA2130'
      document.getElementById('last-title2').style.color = 'black'
    })
      
    $(".last2").change(() => {
      document.getElementById('last-box1').style.border = '2px solid transparent'
      document.getElementById('last-box2').style.border = '2px solid #BA2130'
      document.getElementById('last-title2').style.color = '#BA2130'
      document.getElementById('last-title1').style.color = 'black'
    })


  })(jQuery);
