
/*! Pinto&Costelha – Lang dropdown Safari portal fix (2025-10) */
(function () {
  var root = document;
  function ready(fn){ if (root.readyState !== 'loading') fn(); else root.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    var menu = root.querySelector('.lang-menu');
    if (!menu) return;

    var selected = menu.querySelector('.selected-lang');
    var list = menu.querySelector('ul');
    if (!selected || !list) return;

    // Create portal container once
    var portal = document.createElement('div');
    portal.className = 'lang-portal hidden';
    var portalList = list.cloneNode(true);
    portal.appendChild(portalList);
    document.body.appendChild(portal);

    // helper: place portal under the selected trigger
    function placePortal(){
      var r = selected.getBoundingClientRect();
      portal.style.position = 'fixed';
      portal.style.top = (r.bottom + 6) + 'px';
      portal.style.left = r.left + 'px';
      portal.style.minWidth = Math.max(140, r.width) + 'px';
      portal.style.zIndex = '2147483647';
    }

    function openPortal(){
      placePortal();
      portal.classList.remove('hidden');
      // Copy focus to first item for accessibility
      var first = portal.querySelector('a,button,[tabindex]:not([tabindex="-1"])');
      if (first) first.focus({preventScroll:true});
    }

    function closePortal(){
      portal.classList.add('hidden');
    }

    // Toggle on trigger
    selected.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (portal.classList.contains('hidden')) openPortal();
      else closePortal();
    });

    // Reposition on resize/scroll
    ['scroll','resize'].forEach(function(ev){
      window.addEventListener(ev, function(){
        if (!portal.classList.contains('hidden')) placePortal();
      }, { passive: true });
    });

    // Close on click outside
    document.addEventListener('click', function(e){
      if (portal.classList.contains('hidden')) return;
      if (!portal.contains(e.target) && !menu.contains(e.target)) closePortal();
    });

    // Click on a language -> follow link normally then close
    portal.addEventListener('click', function(e){
      var a = e.target.closest('a');
      if (!a) return;
      // let the browser handle navigation
      closePortal();
    });

    // Hide original inline list (we use the portal clone)
    list.style.display = 'none';
  });
})();
