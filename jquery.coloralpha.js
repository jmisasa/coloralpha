/**!
 * jQuery ColorAlpha Plugin
 * 
 * Jose M. Isasa <jm@isacan.com>
 * 
 * Jan 2014 - Released under the WTFPL http://www.wtfpl.net/about/
 */
(function ($) {
  var opts;
  
  $.fn.colorAlpha = function(options) {
    var imgWidth,
        imgHeight,
        imgPosition;
    
    opts = $.extend({}, $.fn.colorAlpha.defaults, options);

    imgWidth    = $(this).width();
    imgHeight   = $(this).height();
    imgPosition = $(this).position();
    
    $(this)
      .css('position', 'relative')    
      .after('<div class="coloralpha-layer"></div>');
      
    var $layer = $(this).next();

    $layer.css({
      'background-color' : opts.color,
      
      width    : imgWidth + 'px',
      height   : imgHeight + 'px',
      position : 'absolute',
      top      : imgPosition.top,
      left     : imgPosition.left,
      opacity  : opts.opacity/100,
      filter   : 'alpha(opacity=' + opts.opacity + ')'
    });
  }
  
  $(document).on('mouseenter', '.coloralpha-layer', function() {
    $(this).animate({
      opacity : 0
    }, opts.duration);
  });

  $(document).on('mouseleave', '.coloralpha-layer', function() {
    $(this).animate({
      opacity : opts.opacity/100,
      filter  : 'alpha(opacity=' + opts.opacity + ')'      
    }, opts.duration);
  });
  
  $.fn.colorAlpha.defaults = {
    color      : '#D9D9D9',
    opacity    : 40,
    duration   : 200
  };
})(jQuery);