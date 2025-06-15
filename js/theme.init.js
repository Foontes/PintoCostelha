window.addEventListener("DOMContentLoaded", () => {
    const terminalWidth = 80;
    const boxWidth = 40;
    const margin = Math.floor((terminalWidth - boxWidth) / 2);
    const espaçoLateral = " ".repeat(margin);

    const linha = "═".repeat(boxWidth);
    const nome = "Made by: Gonçalo Fonte ";
    const contacto = "Contacto: 964 126 102";
    const github = "GitHub: www.github.com/Foontes";

    console.log(`${espaçoLateral}╔${linha}╗`);
    console.log(`${espaçoLateral}║${nome.padEnd(boxWidth)}║`);
    console.log(`${espaçoLateral}║${" ".repeat(boxWidth)}║`);
    console.log(`${espaçoLateral}║${contacto.padEnd(boxWidth)}║`);
    console.log(`${espaçoLateral}║${github.padEnd(boxWidth)}║`);
    console.log(`${espaçoLateral}╚${linha}╝`);
});


(function($) {
	'use strict';

	if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
		theme.fn.dynIntObsInit( '[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults );
	}

	if (typeof theme.PluginScrollToTop !== 'undefined') {
		theme.PluginScrollToTop.initialize();
	}

	if ($.isFunction($.fn['themePluginBeforeAfter']) && $('[data-plugin-before-after]').length) {
		theme.fn.intObsInit( '[data-plugin-before-after]:not(.manual)', 'themePluginBeforeAfter' );
	}

	if ($.isFunction($.fn['themePluginCarouselLight']) && $('.owl-carousel-light').length) {
		theme.fn.intObsInit( '.owl-carousel-light', 'themePluginCarouselLight' );
	}

	if ($.isFunction($.fn['themePluginCarousel']) && $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').length) {
		theme.fn.intObsInit( '[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)', 'themePluginCarousel' );
	}

	if ($.isFunction($.fn['themePluginFloatElement']) && $('[data-plugin-float-element]').length) {
		theme.fn.intObsInit( '[data-plugin-float-element], [data-plugin-float-element-svg]', 'themePluginFloatElement' );
	}

	if ($.isFunction($.fn['themePluginHoverEffect']) && $('[data-plugin-hover-effect], .hover-effect-3d').length) {
		theme.fn.intObsInit( '[data-plugin-hover-effect]:not(.manual), .hover-effect-3d:not(.manual)', 'themePluginHoverEffect' );
	}

	if ($.isFunction($.fn['themePluginLightbox']) && ( $('[data-plugin-lightbox]').length || $('.lightbox').length )) {
		theme.fn.execOnceTroughEvent( '[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)', 'mouseover.trigger.lightbox', function(){
			var $this = $(this),
				opts;

			var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
			if (pluginOptions)
				opts = pluginOptions;

			$this.themePluginLightbox(opts);
		});
	}

	if ($.isFunction($.fn['themePluginRandomImages']) && $('[data-plugin-random-images]').length) {
		theme.fn.dynIntObsInit( '.plugin-random-images', 'themePluginRandomImages', theme.PluginRandomImages.defaults );
	}

	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

}).apply(this, [jQuery]);