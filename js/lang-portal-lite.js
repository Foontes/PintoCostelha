
/*! lang-portal-lite.js — Minimal fix for Safari stacking
 *  - No CSS changes required
 *  - Uses your existing .lang-menu markup and listeners
 *  - On open: moves the <ul> to <body> and positions it with position:fixed
 *  - On close: moves the <ul> back to .lang-menu
 */
(function(){
  function onReady(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  onReady(function(){
    var menu = document.querySelector('.lang-menu');
    if(!menu) return;

    var trigger = menu.querySelector('.selected-lang');
    var list = menu.querySelector('ul');
    if(!trigger || !list) return;

    // Keep track of original placement
    var originalParent = list.parentNode;
    var placeholder = document.createComment('lang-menu-ul-placeholder');

    var isOpen = false;

    function placeList(){
      var r = trigger.getBoundingClientRect();
      list.style.position = 'fixed';
      list.style.top = (r.bottom + 6) + 'px';
      list.style.left = r.left + 'px';
      list.style.minWidth = Math.max(140, r.width) + 'px';
      list.style.zIndex = '2147483647';
      list.style.display = 'block';
    }

    function open(){
      if(isOpen) return;
      // Insert placeholder where UL was
      originalParent.insertBefore(placeholder, list);
      // Move UL to body (escapes any transformed ancestor)
      document.body.appendChild(list);
      placeList();
      isOpen = true;
      window.addEventListener('scroll', onScrollResize, {passive:true});
      window.addEventListener('resize', onScrollResize, {passive:true});
      document.addEventListener('click', onDocClick, true);
    }

    function close(){
      if(!isOpen) return;
      // Move UL back to original place
      if(placeholder.parentNode){
        placeholder.parentNode.insertBefore(list, placeholder);
        placeholder.remove();
      }else{
        originalParent.appendChild(list);
      }
      // Cleanup inline styles
      list.style.position = '';
      list.style.top = '';
      list.style.left = '';
      list.style.minWidth = '';
      list.style.zIndex = '';
      list.style.display = '';
      isOpen = false;
      window.removeEventListener('scroll', onScrollResize, {passive:true});
      window.removeEventListener('resize', onScrollResize, {passive:true});
      document.removeEventListener('click', onDocClick, true);
    }

    function onScrollResize(){
      if(isOpen) placeList();
    }

    function onDocClick(e){
      if(e.target===trigger || trigger.contains(e.target)) return;
      if(list.contains(e.target)) return;
      close();
    }

    // Toggle on trigger click
    trigger.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      if(isOpen) close(); else open();
    });

    // Also close if a language item is clicked
    list.addEventListener('click', function(e){
      var a = e.target.closest('a');
      if(!a) return;
      // Let your existing handler run, then close
      setTimeout(close, 0);
    });
  });
})();
