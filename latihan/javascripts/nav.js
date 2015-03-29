(function() {
    var nav_els, current_view, viewport_view;
    nav_elm = document.getElementsByClassName('nav nav-tabs')[0];
    viewport_view = document.getElementById('viewport-view');
    if (!current_view) {
        viewport_view.innerHTML = document.getElementById('viewport-home').innerHTML;
        current_view = nav_elm.children[0];
    }
    nav_elm.addEventListener('click', function (e) {
        var hash, viewport;
        if (e.target.hash) {
            hash = e.target.hash.split('#')[1];
            viewport = document.getElementById('viewport-' + hash);
            viewport_view.innerHTML = viewport.innerHTML;
            e.target.parentElement.className = 'active';
            current_view.className = '';
            current_view = e.target.parentElement;
        }
    });
}());
