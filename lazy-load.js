!function(window){

    /**
     * Load Image (change it's source from data-original to src)
     * 
     * @param {Node} el 
     */
    function loadImage (el) {
        var src = el.getAttribute('data-original');
        el.src = src;
        el.className += ' loaded';
        //also add class loaded to parent
        el.parentNode.className += ' loaded';
    }

    /**
     * Check's if given Image is in viewport
     * 
     * @param {Node} el 
     * @returns {Boolean}
     */
    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0
            && rect.left >= 0
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }

    /**
     * Global method finding all images with data-original attribute that havent .loaded class
     * 
     * @param {any} el
     */
    window.processScroll = function() {
        var q = document.querySelectorAll('img[data-original]:not(.loaded)');
        for ( var i = 0; i<q.length; i++ ) {
            if (elementInViewport(q[i])) {
                loadImage(q[i]);
            }
        }
    }

    processScroll();
    window.addEventListener('scroll',processScroll);

}(this);