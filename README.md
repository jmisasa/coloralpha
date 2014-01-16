jQuery ColorAlpha plugin
-----------------------

If you are looking for a simple way to position a coloured semi-transparent layer over an ```img``` element (or a collection) this tiny plugin might come in handy.

### Example
* [jsFiddle](http://jsfiddle.net/w7PY7/)

### Requirements

* jQuery 1.* (?)

### API

    jQuery(document).ready(function() {
      jQuery('img').colorAlpha({
        /* layer background color */
        color    : '#d9d9d9', 
        /* milliseconds */
        duration : 100, 
        /* percentage */
        opacity  : 70
      });
    });

### Disclaimer

It hasn't been tested thoroughly. It seems to work on the latest versions of most common browsers, though.
