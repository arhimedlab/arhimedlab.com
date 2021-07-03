/*
* jQuery BlockUI; v20141123
* http://jquery.malsup.com/block/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(){"use strict";function e(e){function o(o,i){var s,h,k=o==window,v=i&&void 0!==i.message?i.message:void 0;if(i=e.extend({},e.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!e(o).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),v=void 0===v?i.message:v,k&&b&&t(window,{fadeOut:0}),v&&"string"!=typeof v&&(v.parentNode||v.jquery)){var y=v.jquery?v[0]:v,m={};e(o).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(o).data("blockUI.onUnblock",i.onUnblock);var g,I,w,U,x=i.baseZ;g=r||i.forceIframe?e('<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),I=i.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&k?(U='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):i.theme?(U='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),v&&(i.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),i.theme||I.css(i.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||i.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=k?e("body"):e(o);e.each(C,function(){this.appendTo(S)}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:o).length>0);if(u||O){if(k&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(o,"borderTopWidth"),T=d(o,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,o){var t=o[0].style;if(t.position="absolute",2>e)k?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&t.setExpression("left",B),M&&t.setExpression("top",M);else if(i.centerY)k&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0;else if(!i.centerY&&k){var n=i.css&&i.css.top?parseInt(i.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+n+') + "px"';t.setExpression("top",s)}})}if(v&&(i.theme?w.find(".ui-widget-content").append(v):w.append(v),(v.jquery||v.nodeType)&&e(v).show()),(r||i.forceIframe)&&i.showOverlay&&g.show(),i.fadeIn){var j=i.onBlock?i.onBlock:c,H=i.showOverlay&&!v?j:c,z=v?j:c;i.showOverlay&&I._fadeIn(i.fadeIn,H),v&&w._fadeIn(i.fadeIn,z)}else i.showOverlay&&I.show(),v&&w.show(),i.onBlock&&i.onBlock.bind(w)();if(n(1,o,i),k?(b=w[0],p=e(i.focusableElements,b),i.focusInput&&setTimeout(l,20)):a(w[0],i.centerX,i.centerY),i.timeout){var W=setTimeout(function(){k?e.unblockUI(i):e(o).unblock(i)},i.timeout);e(o).data("blockUI.timeout",W)}}}function t(o,t){var s,l=o==window,a=e(o),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),t=e.extend({},e.blockUI.defaults,t||{}),n(0,o,t),null===t.onUnblock&&(t.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),t.cursorReset&&(r.length>1&&(r[1].style.cursor=t.cursorReset),r.length>2&&(r[2].style.cursor=t.cursorReset)),l&&(b=p=null),t.fadeOut?(s=r.length,r.stop().fadeOut(t.fadeOut,function(){0===--s&&i(r,d,t,o)})):i(r,d,t,o)}function i(o,t,i,n){var s=e(n);if(!s.data("blockUI.isBlocked")){o.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(n,i);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function n(o,t,i){var n=t==window,l=e(t);if((o||(!n||b)&&(n||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",o),n&&i.bindEvents&&(!o||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";o?e(document).bind(a,i,s):e(document).unbind(a,s)}}function s(o){if("keydown"===o.type&&o.keyCode&&9==o.keyCode&&b&&o.data.constrainTabKey){var t=p,i=!o.shiftKey&&o.target===t[t.length-1],n=o.shiftKey&&o.target===t[0];if(i||n)return setTimeout(function(){l(n)},10),!1}var s=o.data,a=e(o.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(o),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(p){var o=p[e===!0?p.length-1:0];o&&o.focus()}}function a(e,o,t){var i=e.parentNode,n=e.style,s=(i.offsetWidth-e.offsetWidth)/2-d(i,"borderLeftWidth"),l=(i.offsetHeight-e.offsetHeight)/2-d(i,"borderTopWidth");o&&(n.left=s>0?s+"px":"0"),t&&(n.top=l>0?l+"px":"0")}function d(o,t){return parseInt(e.css(o,t),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);document.documentMode||0;var f=e.isFunction(document.createElement("div").style.setExpression);e.blockUI=function(e){o(window,e)},e.unblockUI=function(e){t(window,e)},e.growlUI=function(o,t,i,n){var s=e('<div class="growlUI"></div>');o&&s.append("<h1>"+o+"</h1>"),t&&s.append("<h2>"+t+"</h2>"),void 0===i&&(i=3e3);var l=function(o){o=o||{},e.blockUI({message:s,fadeIn:o.fadeIn!==void 0?o.fadeIn:700,fadeOut:o.fadeOut!==void 0?o.fadeOut:1e3,timeout:o.timeout!==void 0?o.timeout:i,centerY:!1,showOverlay:!1,onUnblock:n,css:e.blockUI.defaults.growlCSS})};l(),s.css("opacity"),s.mouseover(function(){l({fadeIn:0,timeout:3e4});var o=e(".blockMsg");o.stop(),o.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var i=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var o=e(this);i.ignoreIfBlocked&&o.data("blockUI.isBlocked")||o.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,t)})},e.fn.unblock=function(o){return this[0]===window?(e.unblockUI(o),this):this.each(function(){t(this,o)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var b=null,p=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})();;
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);
;
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));;
/* Chosen v1.8.7 | (c) 2011-2018 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */

(function(){var t,e,s,i,n=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function s(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t},o={}.hasOwnProperty;(i=function(){function t(){this.options_index=0,this.parsed=[]}return t.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,n,r,o;for(e=this.parsed.length,this.parsed.push({array_index:e,group:!0,label:t.label,title:t.title?t.title:void 0,children:0,disabled:t.disabled,classes:t.className}),o=[],s=0,i=(r=t.childNodes).length;s<i;s++)n=r[s],o.push(this.add_option(n,e,t.disabled));return o},t.prototype.add_option=function(t,e,s){if("OPTION"===t.nodeName.toUpperCase())return""!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title?t.title:void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},t}()).select_to_array=function(t){var e,s,n,r,o;for(r=new i,s=0,n=(o=t.childNodes).length;s<n;s++)e=o[s],r.add_node(e);return r.parsed},e=function(){function t(e,s){this.form_field=e,this.options=null!=s?s:{},this.label_click_handler=n(this.label_click_handler,this),t.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return t.prototype.set_default_values=function(){return this.click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this),this.activate_action=function(t){return function(e){return t.activate_field(e)}}(this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select},t.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||t.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||t.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||t.default_no_result_text},t.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+this.escape_html(t.group_label)+"</b>"+t.html:t.html},t.prototype.mouse_enter=function(){return this.mouse_on_container=!0},t.prototype.mouse_leave=function(){return this.mouse_on_container=!1},t.prototype.input_focus=function(t){if(this.is_multiple){if(!this.active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this),50)}else if(!this.active_field)return this.activate_field()},t.prototype.input_blur=function(t){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(t){return function(){return t.blur_test()}}(this),100)},t.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},t.prototype.results_option_build=function(t){var e,s,i,n,r,o,h;for(e="",h=0,n=0,r=(o=this.results_data).length;n<r&&(s=o[n],i="",""!==(i=s.group?this.result_add_group(s):this.result_add_option(s))&&(h++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(h>=this.max_shown_results));n++);return e},t.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),t.style&&(s.style.cssText=t.style),s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.highlighted_html||t.html,t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&t.active_options>0?((e=[]).push("group-result"),t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.innerHTML=t.highlighted_html||this.escape_html(t.label),t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},t.prototype.reset_single_select_options=function(){var t,e,s,i,n;for(n=[],t=0,e=(s=this.results_data).length;t<e;t++)(i=s[t]).selected?n.push(i.selected=!1):n.push(void 0);return n},t.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},t.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},t.prototype.winnow_results=function(t){var e,s,i,n,r,o,h,l,c,_,a,u,d,p,f;for(this.no_results_clear(),_=0,e=(h=this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),c=this.get_search_regex(e),i=0,n=(l=this.results_data).length;i<n;i++)(r=l[i]).search_match=!1,a=null,u=null,r.highlighted_html="",this.include_option_in_results(r)&&(r.group&&(r.group_match=!1,r.active_options=0),null!=r.group_array_index&&this.results_data[r.group_array_index]&&(0===(a=this.results_data[r.group_array_index]).active_options&&a.search_match&&(_+=1),a.active_options+=1),f=r.group?r.label:r.text,r.group&&!this.group_search||(u=this.search_string_match(f,c),r.search_match=null!=u,r.search_match&&!r.group&&(_+=1),r.search_match?(h.length&&(d=u.index,o=f.slice(0,d),s=f.slice(d,d+h.length),p=f.slice(d+h.length),r.highlighted_html=this.escape_html(o)+"<em>"+this.escape_html(s)+"</em>"+this.escape_html(p)),null!=a&&(a.group_match=!0)):null!=r.group_array_index&&this.results_data[r.group_array_index].search_match&&(r.search_match=!0)));return this.result_clear_highlight(),_<1&&h.length?(this.update_results_content(""),this.no_results(h)):(this.update_results_content(this.results_option_build()),(null!=t?t.skip_highlight:void 0)?void 0:this.winnow_results_set_highlight())},t.prototype.get_search_regex=function(t){var e,s;return s=this.search_contains?t:"(^|\\s|\\b)"+t+"[^\\s]*",this.enable_split_word_search||this.search_contains||(s="^"+s),e=this.case_sensitive_search?"":"i",new RegExp(s,e)},t.prototype.search_string_match=function(t,e){var s;return s=e.exec(t),!this.search_contains&&(null!=s?s[1]:void 0)&&(s.index+=1),s},t.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,t=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},t.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},t.prototype.keydown_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),8!==s&&this.pending_backstroke&&this.clear_backstroke(),s){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},t.prototype.keyup_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),s){case 8:this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},t.prototype.clipboard_event_checker=function(t){if(!this.is_disabled)return setTimeout(function(t){return function(){return t.results_search()}}(this),50)},t.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},t.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},t.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},t.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},t.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},t.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:((e=document.createElement("div")).appendChild(t),e.innerHTML)},t.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+this.default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+this.default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_no_results_html=function(t){return'<li class="no-results">\n  '+this.results_none_found+" <span>"+this.escape_html(t)+"</span>\n</li>"},t.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},t.default_multiple_text="Select Some Options",t.default_single_text="Select an Option",t.default_no_result_text="No results match",t}(),(t=jQuery).fn.extend({chosen:function(i){return e.browser_is_supported()?this.each(function(e){var n,r;r=(n=t(this)).data("chosen"),"destroy"!==i?r instanceof s||n.data("chosen",new s(this,i)):r instanceof s&&r.destroy()}):this}}),s=function(s){function n(){return n.__super__.constructor.apply(this,arguments)}return r(n,e),n.prototype.setup=function(){return this.form_field_jq=t(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},n.prototype.set_up_html=function(){var e,s;return(e=["chosen-container"]).push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&e.push(this.form_field.className),this.is_rtl&&e.push("chosen-rtl"),s={"class":e.join(" "),title:this.form_field.title},this.form_field.id.length&&(s.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=t("<div />",s),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},n.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},n.prototype.register_observers=function(){return this.container.on("touchstart.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("touchend.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mousedown.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("mouseup.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mouseenter.chosen",function(t){return function(e){t.mouse_enter(e)}}(this)),this.container.on("mouseleave.chosen",function(t){return function(e){t.mouse_leave(e)}}(this)),this.search_results.on("mouseup.chosen",function(t){return function(e){t.search_results_mouseup(e)}}(this)),this.search_results.on("mouseover.chosen",function(t){return function(e){t.search_results_mouseover(e)}}(this)),this.search_results.on("mouseout.chosen",function(t){return function(e){t.search_results_mouseout(e)}}(this)),this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen",function(t){return function(e){t.search_results_mousewheel(e)}}(this)),this.search_results.on("touchstart.chosen",function(t){return function(e){t.search_results_touchstart(e)}}(this)),this.search_results.on("touchmove.chosen",function(t){return function(e){t.search_results_touchmove(e)}}(this)),this.search_results.on("touchend.chosen",function(t){return function(e){t.search_results_touchend(e)}}(this)),this.form_field_jq.on("chosen:updated.chosen",function(t){return function(e){t.results_update_field(e)}}(this)),this.form_field_jq.on("chosen:activate.chosen",function(t){return function(e){t.activate_field(e)}}(this)),this.form_field_jq.on("chosen:open.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.form_field_jq.on("chosen:close.chosen",function(t){return function(e){t.close_field(e)}}(this)),this.search_field.on("blur.chosen",function(t){return function(e){t.input_blur(e)}}(this)),this.search_field.on("keyup.chosen",function(t){return function(e){t.keyup_checker(e)}}(this)),this.search_field.on("keydown.chosen",function(t){return function(e){t.keydown_checker(e)}}(this)),this.search_field.on("focus.chosen",function(t){return function(e){t.input_focus(e)}}(this)),this.search_field.on("cut.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.search_field.on("paste.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.is_multiple?this.search_choices.on("click.chosen",function(t){return function(e){t.choices_click(e)}}(this)):this.container.on("click.chosen",function(t){t.preventDefault()})},n.prototype.destroy=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.form_field_label.length>0&&this.form_field_label.off("click.chosen"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},n.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents("fieldset").is(":disabled"),this.container.toggleClass("chosen-disabled",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.off("focus.chosen",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.on("focus.chosen",this.activate_field)},n.prototype.container_mousedown=function(e){var s;if(!this.is_disabled)return!e||"mousedown"!==(s=e.type)&&"touchstart"!==s||this.results_showing||e.preventDefault(),null!=e&&t(e.target).hasClass("search-choice-close")?void 0:(this.active_field?this.is_multiple||!e||t(e.target)[0]!==this.selected_item[0]&&!t(e.target).parents("a.chosen-single").length||(e.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),t(this.container[0].ownerDocument).on("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},n.prototype.container_mouseup=function(t){if("ABBR"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},n.prototype.search_results_mousewheel=function(t){var e;if(t.originalEvent&&(e=t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e)return t.preventDefault(),"DOMMouseScroll"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},n.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},n.prototype.close_field=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},n.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},n.prototype.test_active_click=function(e){var s;return(s=t(e.target).closest(".chosen-container")).length&&this.container[0]===s[0]?this.active_field=!0:this.close_field()},n.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=i.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},n.prototype.result_do_highlight=function(t){var e,s,i,n,r;if(t.length){if(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),i=parseInt(this.search_results.css("maxHeight"),10),r=this.search_results.scrollTop(),n=i+r,s=this.result_highlight.position().top+this.search_results.scrollTop(),(e=s+this.result_highlight.outerHeight())>=n)return this.search_results.scrollTop(e-i>0?e-i:0);if(s<r)return this.search_results.scrollTop(s)}},n.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},n.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},n.prototype.update_results_content=function(t){return this.search_results.html(t)},n.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},n.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},n.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=t("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0)return this.form_field_label.on("click.chosen",this.label_click_handler)},n.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},n.prototype.search_results_mouseup=function(e){var s;if((s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first()).length)return this.result_highlight=s,this.result_select(e),this.search_field.focus()},n.prototype.search_results_mouseover=function(e){var s;if(s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first())return this.result_do_highlight(s)},n.prototype.search_results_mouseout=function(e){if(t(e.target).hasClass("active-result")||t(e.target).parents(".active-result").first())return this.result_clear_highlight()},n.prototype.choice_build=function(e){var s,i;return s=t("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(e)+"</span>"),e.disabled?s.addClass("search-choice-disabled"):((i=t("<a />",{"class":"search-choice-close","data-option-array-index":e.array_index})).on("click.chosen",function(t){return function(e){return t.choice_destroy_link_click(e)}}(this)),s.append(i)),this.search_container.before(s)},n.prototype.choice_destroy_link_click=function(e){if(e.preventDefault(),e.stopPropagation(),!this.is_disabled)return this.choice_destroy(t(e.target))},n.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute("data-option-array-index")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()},n.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},n.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},n.prototype.result_select=function(t){var e,s;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),e.addClass("result-selected"),s=this.results_data[e[0].getAttribute("data-option-array-index")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(s):this.single_set_selected_text(this.choice_label(s)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)?t.metaKey||t.ctrlKey?this.winnow_results({skip_highlight:!0}):(this.search_field.val(""),this.winnow_results()):(this.results_hide(),this.show_search_field_default()),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.trigger_form_field_change({selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},n.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(t)},n.prototype.result_deselect=function(t){var e;return e=this.results_data[t],!this.form_field.options[e.options_index].disabled&&(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},n.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},n.prototype.get_search_field_value=function(){return this.search_field.val()},n.prototype.get_search_text=function(){return t.trim(this.get_search_field_value())},n.prototype.escape_html=function(e){return t("<div/>").text(e).html()},n.prototype.winnow_results_set_highlight=function(){var t,e;if(e=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),null!=(t=e.length?e.first():this.search_results.find(".active-result").first()))return this.result_do_highlight(t)},n.prototype.no_results=function(t){var e;return e=this.get_no_results_html(t),this.search_results.append(e),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},n.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},n.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},n.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result")).length?this.result_do_highlight(t.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},n.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last()).length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0},n.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},n.prototype.search_field_scale=function(){var e,s,i,n,r,o,h;if(this.is_multiple){for(r={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"},s=0,i=(o=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"]).length;s<i;s++)r[n=o[s]]=this.search_field.css(n);return(e=t("<div />").css(r)).text(this.get_search_field_value()),t("body").append(e),h=e.width()+25,e.remove(),this.container.is(":visible")&&(h=Math.min(this.container.outerWidth()-10,h)),this.search_field.width(h)}},n.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger("input",t),this.form_field_jq.trigger("change",t)},n}()}).call(this);;
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(c){var a=0;return function(){return a<c.length?{done:!1,value:c[a++]}:{done:!0}}};$jscomp.arrayIterator=function(c){return{next:$jscomp.arrayIteratorImpl(c)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,b){c!=Array.prototype&&c!=Object.prototype&&(c[a]=b.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.SymbolClass=function(c,a){this.$jscomp$symbol$id_=c;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:a})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function c(b){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(b||"")+"_"+a++,b)}var a=0;return c}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.asyncIterator;c||(c=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};
$jscomp.iteratorFromArray=function(c,a){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var b=0,d={next:function(){if(b<c.length){var e=b++;return{value:a(e,c[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};
$jscomp.polyfill=function(c,a,b,d){if(a){b=$jscomp.global;c=c.split(".");for(d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&$jscomp.defineProperty(b,c,{configurable:!0,writable:!0,value:a})}};$jscomp.polyfill("Array.prototype.keys",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");var tUtils=tUtils||{},Alfalab=Alfalab||{data:{}};
(function(c){tUtils.baseErrorPane="#block-system-main";Drupal.ajax.prototype.commands.hide_messages=function(a,b,d){c("#testlab_ajax_error, #inline-messages").remove()};Drupal.ajax.prototype.commands.error=function(a,b,d){a=""!==b.selector?b.selector:Drupal.settings.hasOwnProperty("baseErrorPane")?Drupal.settings.baseErrorPane:tUtils.baseErrorPane;(b.hasOwnProperty("hidePrevious")?b.hidePrevious:1)&&c("#testlab_ajax_error, #inline-messages").remove();d=b.hasOwnProperty("severity")?b.severity:"error";
if(b.hasOwnProperty("message"))c(a).prepend("<div id='testlab_ajax_error' class='messages "+d+"'>"+b.message+"</div>");else if(b.hasOwnProperty("messages")){c(a).prepend("<div id='testlab_ajax_error' class='messages "+d+"'><ul></ul></div>");for(var e in b.messages)c("#testlab_ajax_error."+d+" ul").append("<li>"+b.messages[e]+"</li>")}Drupal.unblockUI()};Drupal.ajax.prototype.commands.unblock_ui=function(a,b){Drupal.unblockUI()};Drupal.ajax.prototype.commands.redirect=function(a,b){b.hasOwnProperty("url")?
window.location=b.url:window.location.reload();Drupal.unblockUI()};Drupal.ajax.prototype.commands.fancyPdf=function(a,b){b.hasOwnProperty("url")&&tUtils.fancyPdf(b.url);Drupal.unblockUI()};Drupal.ajax.prototype.commands.ajaxDrupalMessages=function(a,b,d){tUtils.ajaxDrupalMessages(b.messagePlacement,b.messages)};Drupal.ajax.prototype.commands.close_dialog=function(a,b){c("[id*=dialog-pane]").remove();Drupal.unblockUI()};tUtils.isIE=function(a,b){var d="IE",c=document.createElement("B"),f=document.documentElement;
a&&(d+=" "+a,b&&(d=b+" "+d));c.innerHTML="\x3c!--[if "+d+']><b id="iecctest"></b><![endif]--\x3e';f.appendChild(c);a=!!document.getElementById("iecctest");f.removeChild(c);return a};tUtils.pad=function(a,b){for(a=""+a;a.length<b;)a="0"+a;return a};tUtils.arrayUnique=function(a){a=a.concat();for(var b=0;b<a.length;++b)for(var d=b+1;d<a.length;++d)a[b]===a[d]&&a.splice(d--,1);return a};tUtils.numberWithThousandSeparators=function(a,b){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,b)};tUtils.labelDeclension=
function(a,b){var d=[2,0,1,1,1,2];return b[4<a%100&&20>a%100?2:d[5>a%10?a%10:5]]};tUtils.blockingAjax=function(a,b,d,c){var e="undefined"!==typeof c&&c.hasOwnProperty("timeout")?c.timeout:3E5,g="undefined"!==typeof c&&c.hasOwnProperty("message")?c.message:void 0;tUtils.showBlockUIMessage(e,g);tUtils.ajax(a,b,d,!1,c)};tUtils.ajax=function(a,b,c,e,f){"undefined"!==typeof b&&""!==b&&!1!==b&&(tUtils.baseErrorPane="#"+b);a={url:a,progress:{type:e?"throbber":"none"}};"undefined"!==typeof f&&f.hasOwnProperty("data")&&
(a.submit=f.data);(new Drupal.ajax(b,c,a)).eventResponse(!1,{})};tUtils.showBlockUIMessage=function(a,b,d){"undefined"===typeof b&&(b="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...");"undefined"===typeof d&&(d="");c.blockUI({message:"<h1 class='loading-blocker'><span>"+b+"</span></h1>"+d,css:{width:"auto",left:"45%",border:"1px solid #aaa"},overlayCSS:{backgroundColor:"#fff",opacity:.1}});tUtils.setTimeout(Drupal.unblockUI,a,"unblockui")};tUtils.chosenDefaultOptions={placeholder_text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",
placeholder_text_single:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",no_results_text:"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0441"};tUtils.activeTimeouts={};tUtils.setTimeout=function(a,b,c){tUtils.activeTimeouts.hasOwnProperty(c)&&clearTimeout(tUtils.activeTimeouts[c]);tUtils.activeTimeouts[c]=setTimeout(function(){tUtils.activeTimeouts[c]=null;a()},b)};Drupal.unblockUI=function(){tUtils.activeTimeouts.hasOwnProperty("unblockui")&&
(clearTimeout(tUtils.activeTimeouts.unblockui),tUtils.activeTimeouts.unblockui=null);c.unblockUI()};Drupal.blockUI=function(a){tUtils.showBlockUIMessage(3E5,a)};tUtils.confirmationDialog=function(a,b,d,e){var f=c('<div id="dialog-pane">');f.dialog({modal:!0,draggable:!1,resizable:!1,width:400,minHeight:0,title:a,dialogClass:"confirmation-dialog",buttons:[{text:b,click:function(){c(this).dialog("close");f.remove();e()}},{text:d,click:function(){c(this).dialog("close");f.remove()}}]})};tUtils.fancyPdf=
function(a,b){c.fancybox({href:a,autoSize:!0,fitToView:!0,margin:10,height:window.innerHeight-20,type:"iframe",iframe:{preload:!1},afterClose:function(){void 0!==b&&b()}})};Drupal.ajax.prototype.commands.progress_iterate=function(a,b){Drupal.settings.progressDialogProgressCallback(+b.iteration+1)};tUtils.showProgressDialog=function(a,b,d,e,f){var g=null,k={createProgressBar:function(){g=c(".progress-blocker");g.prepend('<div class="progress-title">'+a+"</div>");g.append('<div class="progress-label">0%</div>');
g.progressbar({change:function(b,a){c(".progress-label").text(g.progressbar("value")+"%")},complete:function(b,a){Drupal.unblockUI()},create:function(b,a){k.progressCallback(0)}})},progressCallback:function(a){g.progressbar("option","value",Math.round(100*a/e));a===e?d():b(a)}};Drupal.settings.progressDialogProgressCallback=k.progressCallback;c.blockUI({message:"<div class='progress-blocker'></div>",css:{width:"300px",left:"45%",border:"2px solid #aaa",backgroundColor:"#fff"},overlayCSS:{backgroundColor:"#fff",
opacity:.1},onBlock:k.createProgressBar});tUtils.setTimeout(Drupal.unblockUI,f,"unblockui")};tUtils.ajaxDrupalMessages=function(a,b){c("#inline-messages.messages").remove();for(var d=["error","warning","status"],e=0;e<d.length;e++){var f=d[e];if(b.hasOwnProperty(f))for(var g=b[f],k=0;k<g.length;k++){var l=g[k],h=c('<div id="inline-messages">');h.html(l);h.addClass("messages");h.addClass(f);c(a).prepend(h)}}};tUtils.bindOnce=function(a,b,d,e){a.each(function(){var a=c(this);a.hasClass(e+"-processed")||
(a.bind(b,d),a.addClass(e+"-processed"))})};tUtils.loadScript=function(a,b){var c=document.getElementsByTagName("head")[0],e=document.createElement("script");e.type="text/javascript";e.src=a;e.onreadystatechange=b;e.onload=b;c.appendChild(e)};Drupal.behaviors.dateAutoSelectOnPrevNext={attach:function(a){c("input[autoSelectOnPrevNext]:not(.autoselect-prevnext-processed)",a).datepickerDateAutoSelectOnPrevNext()}};c.fn.datepickerDateAutoSelectOnPrevNext=function(){var a=c(this);0!==a.length&&(c.datepicker?
(a.click(function(){var b=c(this);b.datepicker("option","onChangeMonthYear",function(a,c){b.attr("monthChanged",!0);a="01."+tUtils.pad(c,2)+"."+a;b.val(a)});b.datepicker("option","beforeShowDay",function(a){a=a.getDate();var c=[1,"ui-datepicker-current-day ui-state-default ui-state-active-a"];if("true"==b.attr("monthChanged")){if(1==a)return c}else{var d=b.datepicker("getDate");if(null!=d&&a==d)return c}return[1,""]});b.datepicker("option","onClose",function(a){b.attr("monthChanged","false")})}),
a.addClass("autoselect-prevnext-processed")):console.warn("'datepicker' plugin is not loaded"))};Drupal.behaviors.submitOnce={attach:function(a){c("form:not(.submit-once-processed)",a).disableOnSubmit(["[submit-once]"])}};c.fn.disableOnSubmit=function(a){var b=this;b.submit(function(){if(Drupal.hasOwnProperty("myClientsideValidation")&&0===Drupal.myClientsideValidation.validators[b.attr("id")].errorList.length)for(var d in a)c(a[d]).attr("disabled","disabled")});b.addClass("submit-once-processed")};
c.fn.selectOptionsSort=function(){var a=this.val(),b=this.children("option");b.sort(function(a,b){return a.text>b.text?1:a.text<b.text?-1:0});this.empty().append(b);this.val(a)};c.fn.setEnterPressHandler=function(a){this.bind("keypress",function(b){13===(b.keyCode?b.keyCode:b.which?b.which:b.charCode)&&(void 0!==a&&a(),b.preventDefault())})};c.fn.linkSubmitButtonToTextfield=function(a){var b={setBtnState:function(a,b){b?(a.removeAttr("disabled"),a.removeAttr("title")):(a.attr("disabled","disabled"),
a.attr("title",'\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 "\u0424\u0418\u041e"'))},btnHasFilters:function(a){return a.is("[filters]")&&"false"!==a.attr("filters")},textfieldHasValue:function(a){var b=!1;return c(a).each(function(a,d){b|=""!==c(d).val()})}},d=this;c(a).keyup(function(){b.btnHasFilters(d)||b.setBtnState(d,b.textfieldHasValue(a))}).bind("paste",function(a){b.setBtnState(d,""!==a.originalEvent.clipboardData.getData("text"))}).bind("cut",function(){setTimeout(function(){b.setBtnState(d,
b.textfieldHasValue(a))},0)}).setEnterPressHandler(function(){var b=c(a);b.is("[autocomplete]")&&b.nameAutocomplete("selectFirstDropdownItem");d.mousedown()});b.setBtnState(d,b.btnHasFilters(d)||b.textfieldHasValue(a))};Drupal.ajax.prototype.commands.autocomplete_data_received=function(a,b){a=Drupal.settings.nameAutocomplete[b.id];var c=[];a.data=a.responseDataProcessor(b.data,c);a.response(c)};Drupal.settings.nameAutocomplete={};c.fn.nameAutocomplete=function(a){var b={init:function(a,b,f,g){this.data("selectCallback",
b);var d=this.attr("id");Drupal.settings.nameAutocomplete[d]={responseDataProcessor:g,data:{}};this.autocomplete({minLength:a,source:function(a,b){c.isNumeric(a.term)||(Drupal.settings.nameAutocomplete[d].response=b,tUtils.ajax(f(a),!1,!1,!1,{data:{id:d}}))},select:function(a,c){b(Drupal.settings.nameAutocomplete[d].data[c.item.label]);a.preventDefault()}});var e=this.outerWidth(),h=this.autocomplete("widget");this.on("autocompleteopen",function(a,b){h.css("width","");h.css("min-width",e);h.css("max-width",
2*e)})},selectFirstDropdownItem:function(){var a=Drupal.settings.nameAutocomplete[c(this).attr("id")].data;if(0!==a.length){var b=Object.keys(a);0!==b.length&&(a=a[b[0]],this.data("selectCallback")(a))}}};return b[a]?b[a].apply(this,Array.prototype.slice.call(arguments,1)):b.init.apply(this,arguments)};c.fn.addClearTextBtn=function(a,b){var d=this,e=c("<div>");e.addClass(b||"search-reset");b=c('<a href="#"></a>');e.append(b);b.click(function(){d.val("");d.keyup();"undefined"!==typeof a&&a();return!1});
d.parent().append(e);b=(d.outerHeight()-e.outerHeight())/2;e.css("bottom",b)}})(jQuery);
;
(function ($) {
  
  MobileConverter = (function () {
    /**
     * What is the widest width of "mobile" browser window.
     */
    var mobileWidthBreakpoint = 768;

    /**
     * What is the widest width of "tablet" browser window.
     */
    var tabletWidthBreakpoint = 990;

    /**
     * Storing previous state of mobility.
     */
    var state;

    /**
     * Arrays of transformations form and to mobile version.
     */
    var toMobileTransforms = [];
    var fromMobileTransforms = [];
    var toTabletTransforms = [];
    var fromTabletTransforms = [];

    function _getWindowState() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      return windowWidth < mobileWidthBreakpoint ? "mobile" : (windowWidth <= tabletWidthBreakpoint ? "tablet" : "desktop");
    }

    function checkMobileAndCovnert () {
      if (isForcedDesktop()) {
        return false;
      }
      var newState = _getWindowState();
      if (newState === state) {
        return;
      }

      // First converting back to desktop
      applyStateTransforms(state, fromMobileTransforms, fromTabletTransforms);

      // Next converting to one of mobile modes if needed
      applyStateTransforms(newState, toMobileTransforms, toTabletTransforms);

      state = newState;
    }

    function applyStateTransforms(_state, mobileTransforms, tabletTransforms, context) {
      if (_state === "mobile") {
        applyTransforms(mobileTransforms, context);
      } else if (_state === "tablet") {
        applyTransforms(tabletTransforms, context);
      }
    }

    function applyTransforms(transforms, context) {
      for(var i in transforms) {
        transforms[i](context);
      }
    }

    function resetConversionCheckTimer() {
      var timer;
      clearTimeout(timer);
      timer = setTimeout(checkMobileAndCovnert, 60);
    }

    function isForcedDesktop() {
      return document.cookie.search("forcedDesktop=true") > -1;
    }

    return {
      getWindowState: _getWindowState,

      forceDesktopVersion: function () {
        var metas = document.getElementsByName("viewport");
        if (metas.length > 0) {
          metas[0].setAttribute("content", "width=1200, user-scalable=1");
        }
        document.cookie = "forcedDesktop=true;path=/";
      },

      addMobileTransform: function (toMobile, fromMobile) {
        if (toMobile !== undefined  && toMobile !== null) {
          toMobileTransforms.push(toMobile);
        }
        if (fromMobile !== undefined && fromMobile !== null) {
          fromMobileTransforms.push(fromMobile);
        }
      },

      addTabletTransform: function (toTablet, fromTablet) {
        if (toTablet !== undefined && toTablet !== null) {
          toTabletTransforms.push(toTablet);
        }
        if (fromTablet !== undefined && fromTablet !== null) {
          fromTabletTransforms.push(fromTablet);
        }
      },

      init: function() {
        if (isForcedDesktop()) {
          this.forceDesktopVersion();
        }

        state = this.getWindowState();

        applyStateTransforms(state, toMobileTransforms, toTabletTransforms, document);

        $(window).resize(resetConversionCheckTimer).on("orientationchange", resetConversionCheckTimer);
      },

      applyToContext: function(context) {
        applyStateTransforms(state, toMobileTransforms, toTabletTransforms, context);
      },
    };
  })();

  Drupal.behaviors.attachTransformationHandlers = {
    attach: function (context) {
      MobileConverter.applyToContext(context);
    }
  }

})(jQuery);
;
Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","January":"\u044f\u043d\u0432\u0430\u0440\u044f","Jan":"\u042f\u043d\u0432","February":"\u0444\u0435\u0432\u0440\u0430\u043b\u044f","Feb":"\u0424\u0435\u0432","March":"\u043c\u0430\u0440\u0442\u0430","Mar":"\u041c\u0430\u0440","April":"\u0430\u043f\u0440\u0435\u043b\u044f","Apr":"\u0410\u043f\u0440","May":"\u043c\u0430\u044f","June":"\u0438\u044e\u043d\u044f","Jun":"\u0418\u044e\u043d","July":"\u0438\u044e\u043b\u044f","Jul":"\u0418\u044e\u043b","August":"\u0430\u0432\u0433\u0443\u0441\u0442\u0430","Aug":"\u0410\u0432\u0433","September":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","Sep":"\u0421\u0435\u043d","October":"\u043e\u043a\u0442\u044f\u0431\u0440\u044f","Oct":"\u041e\u043a\u0442","November":"\u043d\u043e\u044f\u0431\u0440\u044f","Nov":"\u041d\u043e\u044f","December":"\u0434\u0435\u043a\u0430\u0431\u0440\u044f","Dec":"\u0414\u0435\u043a","Next":"\u0414\u0430\u043b\u0435\u0435","Sunday":"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","Monday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","Tuesday":"\u0432\u0442\u043e\u0440\u043d\u0438\u043a","Wednesday":"\u0441\u0440\u0435\u0434\u0430","Thursday":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433","Friday":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430","Saturday":"\u0441\u0443\u0431\u0431\u043e\u0442\u0430","Prev":"\u041d\u0430\u0437\u0430\u0434","Mon":"\u043f\u043d","Tue":"\u0432\u0442","Wed":"\u0441\u0440","Thu":"\u0447\u0442","Fri":"\u043f\u0442","Sat":"\u0441\u0431","Sun":"\u0432\u0441","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Today":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","Su":"\u0412\u0441","Mo":"\u041f\u043d","Tu":"\u0412\u0442","We":"\u0421\u0440","Th":"\u0427\u0442","Fr":"\u041f\u0442","Sa":"\u0421\u0431","mm\/dd\/yy":"mm\/dd\/yy","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","All":"\u0412\u0441\u0435","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442\u043e\u043c","ResponseText: !responseText":"\u041e\u0442\u0432\u0435\u0442\u0422\u0435\u043a\u0441\u0442\u043e\u043c: !responseText","ReadyState: !readyState":"ReadyState: !readyState","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","By @name on @date":"@name, @date","By @name":"@name","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed."}} };;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function ($) {

  Drupal.behaviors.testlabSubHeaderInfo = {
    attach: function (context, settings) {
      if ($('#sub-header-block-wrapper').length !== 1) {
        return;
      }
      var cookieValue = $.cookie('testlab_session_key');
      if (cookieValue) {
        var path = settings.hasOwnProperty('path') ? settings['path'] : 'root';
        tUtils.ajax("/ajax/testlab_sub_header_info/" + path, false, false);
      }
    }
  };

})(jQuery);;
/*!
* TableSorter 2.17.8 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!function(h){h.extend({tablesorter:new function(){function d(){var b=arguments[0],a=1<arguments.length?Array.prototype.slice.call(arguments):b;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(b)?"error":/warn/i.test(b)?"warn":"log"](a);else alert(a)}function q(b,a){d(b+" ("+((new Date).getTime()-a.getTime())+"ms)")}function p(b){for(var a in b)return!1;return!0}function r(b,a,c){if(!a)return"";var f,e=b.config,l=e.textExtraction||"",d="",d="basic"===l?h(a).attr(e.textAttribute)|| a.textContent||a.innerText||h(a).text()||"":"function"===typeof l?l(a,b,c):"function"===typeof(f=g.getColumnData(b,l,c))?f(a,b,c):a.textContent||a.innerText||h(a).text()||"";return h.trim(d)}function v(b){var a,c,f=b.config,e=f.$tbodies=f.$table.children("tbody:not(."+f.cssInfoBlock+")"),l,x,k,h,m,B,u,s,t,p=0,v="",w=e.length;if(0===w)return f.debug?d("Warning: *Empty table!* Not building a parser cache"):"";f.debug&&(t=new Date,d("Detecting parsers for each column"));a=[];for(c=[];p<w;){l=e[p].rows; if(l[p])for(x=f.columns,k=0;k<x;k++){h=f.$headers.filter('[data-column="'+k+'"]:last');m=g.getColumnData(b,f.headers,k);s=g.getParserById(g.getData(h,m,"extractor"));u=g.getParserById(g.getData(h,m,"sorter"));B="false"===g.getData(h,m,"parser");f.empties[k]=(g.getData(h,m,"empty")||f.emptyTo||(f.emptyToBottom?"bottom":"top")).toLowerCase();f.strings[k]=(g.getData(h,m,"string")||f.stringTo||"max").toLowerCase();B&&(u=g.getParserById("no-parser"));s||(s=!1);if(!u)a:{h=b;m=l;B=-1;u=k;for(var A=void 0, K=g.parsers.length,G=!1,z="",A=!0;""===z&&A;)B++,m[B]?(G=m[B].cells[u],z=r(h,G,u),h.config.debug&&d("Checking if value was empty on row "+B+", column: "+u+': "'+z+'"')):A=!1;for(;0<=--K;)if((A=g.parsers[K])&&"text"!==A.id&&A.is&&A.is(z,h,G)){u=A;break a}u=g.getParserById("text")}f.debug&&(v+="column:"+k+"; extractor:"+s.id+"; parser:"+u.id+"; string:"+f.strings[k]+"; empty: "+f.empties[k]+"\n");c[k]=u;a[k]=s}p+=c.length?w:1}f.debug&&(d(v?v:"No parsers detected"),q("Completed detecting parsers",t)); f.parsers=c;f.extractors=a}function w(b){var a,c,f,e,l,x,k,n,m,p,u,s=b.config,t=s.$table.children("tbody"),v=s.extractors,w=s.parsers;s.cache={};s.totalRows=0;if(!w)return s.debug?d("Warning: *Empty table!* Not building a cache"):"";s.debug&&(n=new Date);s.showProcessing&&g.isProcessing(b,!0);for(l=0;l<t.length;l++)if(u=[],a=s.cache[l]={normalized:[]},!t.eq(l).hasClass(s.cssInfoBlock)){m=t[l]&&t[l].rows.length||0;for(f=0;f<m;++f)if(p={child:[]},x=h(t[l].rows[f]),k=[],x.hasClass(s.cssChildRow)&&0!== f)c=a.normalized.length-1,a.normalized[c][s.columns].$row=a.normalized[c][s.columns].$row.add(x),x.prev().hasClass(s.cssChildRow)||x.prev().addClass(g.css.cssHasChild),p.child[c]=h.trim(x[0].textContent||x[0].innerText||x.text()||"");else{p.$row=x;p.order=f;for(e=0;e<s.columns;++e)"undefined"===typeof w[e]?s.debug&&d("No parser found for cell:",x[0].cells[e],"does it have a header?"):(c=r(b,x[0].cells[e],e),c="undefined"===typeof v[e].id?c:v[e].format(c,b,x[0].cells[e],e),c="no-parser"===w[e].id? "":w[e].format(c,b,x[0].cells[e],e),k.push(s.ignoreCase&&"string"===typeof c?c.toLowerCase():c),"numeric"===(w[e].type||"").toLowerCase()&&(u[e]=Math.max(Math.abs(c)||0,u[e]||0)));k[s.columns]=p;a.normalized.push(k)}a.colMax=u;s.totalRows+=a.normalized.length}s.showProcessing&&g.isProcessing(b);s.debug&&q("Building cache for "+m+" rows",n)}function z(b,a){var c=b.config,f=c.widgetOptions,e=b.tBodies,l=[],d=c.cache,k,n,m,r,u,s;if(p(d))return c.appender?c.appender(b,l):b.isUpdating?c.$table.trigger("updateComplete", b):"";c.debug&&(s=new Date);for(u=0;u<e.length;u++)if(k=h(e[u]),k.length&&!k.hasClass(c.cssInfoBlock)){m=g.processTbody(b,k,!0);k=d[u].normalized;n=k.length;for(r=0;r<n;r++)l.push(k[r][c.columns].$row),c.appender&&(!c.pager||c.pager.removeRows&&f.pager_removeRows||c.pager.ajax)||m.append(k[r][c.columns].$row);g.processTbody(b,m,!1)}c.appender&&c.appender(b,l);c.debug&&q("Rebuilt table",s);a||c.appender||g.applyWidget(b);b.isUpdating&&c.$table.trigger("updateComplete",b)}function D(b){return/^d/i.test(b)|| 1===b}function E(b){var a,c,f,e,l,x,k,n=b.config;n.headerList=[];n.headerContent=[];n.debug&&(k=new Date);n.columns=g.computeColumnIndex(n.$table.children("thead, tfoot").children("tr"));e=n.cssIcon?'<i class="'+(n.cssIcon===g.css.icon?g.css.icon:n.cssIcon+" "+g.css.icon)+'"></i>':"";n.$headers=h(b).find(n.selectorHeaders).each(function(k){c=h(this);a=g.getColumnData(b,n.headers,k,!0);n.headerContent[k]=h(this).html();""!==n.headerTemplate&&(l=n.headerTemplate.replace(/\{content\}/g,h(this).html()).replace(/\{icon\}/g, e),n.onRenderTemplate&&(f=n.onRenderTemplate.apply(c,[k,l]))&&"string"===typeof f&&(l=f),h(this).html('<div class="'+g.css.headerIn+'">'+l+"</div>"));n.onRenderHeader&&n.onRenderHeader.apply(c,[k]);this.column=parseInt(h(this).attr("data-column"),10);this.order=D(g.getData(c,a,"sortInitialOrder")||n.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;x=g.getData(c,a,"lockedOrder")||!1;"undefined"!==typeof x&&!1!==x&&(this.order=this.lockedOrder=D(x)?[1,1,1]:[0,0,0]);c.addClass(g.css.header+ " "+n.cssHeader);n.headerList[k]=this;c.parent().addClass(g.css.headerRow+" "+n.cssHeaderRow).attr("role","row");n.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});H(b);n.debug&&(q("Built headers:",k),d(n.$headers))}function C(b,a,c){var f=b.config;f.$table.find(f.selectorRemove).remove();v(b);w(b);I(f.$table,a,c)}function H(b){var a,c,f,e=b.config;e.$headers.each(function(l,d){c=h(d);f=g.getColumnData(b,e.headers,l,!0);a="false"===g.getData(d,f,"sorter")||"false"===g.getData(d, f,"parser");d.sortDisabled=a;c[a?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+a);b.id&&(a?c.removeAttr("aria-controls"):c.attr("aria-controls",b.id))})}function F(b){var a,c,f=b.config,e=f.sortList,l=e.length,d=g.css.sortNone+" "+f.cssNone,k=[g.css.sortAsc+" "+f.cssAsc,g.css.sortDesc+" "+f.cssDesc],n=["ascending","descending"],m=h(b).find("tfoot tr").children().add(f.$extraHeaders).removeClass(k.join(" "));f.$headers.removeClass(k.join(" ")).addClass(d).attr("aria-sort","none"); for(a=0;a<l;a++)if(2!==e[a][1]&&(b=f.$headers.not(".sorter-false").filter('[data-column="'+e[a][0]+'"]'+(1===l?":last":"")),b.length)){for(c=0;c<b.length;c++)b[c].sortDisabled||b.eq(c).removeClass(d).addClass(k[e[a][1]]).attr("aria-sort",n[e[a][1]]);m.length&&m.filter('[data-column="'+e[a][0]+'"]').removeClass(d).addClass(k[e[a][1]])}f.$headers.not(".sorter-false").each(function(){var b=h(this),a=this.order[(this.count+1)%(f.sortReset?3:2)],a=b.text()+": "+g.language[b.hasClass(g.css.sortAsc)?"sortAsc": b.hasClass(g.css.sortDesc)?"sortDesc":"sortNone"]+g.language[0===a?"nextAsc":1===a?"nextDesc":"nextNone"];b.attr("aria-label",a)})}function O(b){var a,c,f=b.config;f.widthFixed&&0===f.$table.find("colgroup").length&&(a=h("<colgroup>"),c=h(b).width(),h(b.tBodies).not("."+f.cssInfoBlock).find("tr:first").children(":visible").each(function(){a.append(h("<col>").css("width",parseInt(h(this).width()/c*1E3,10)/10+"%"))}),f.$table.prepend(a))}function P(b,a){var c,f,e,l,g,k=b.config,d=a||k.sortList;k.sortList= [];h.each(d,function(b,a){l=parseInt(a[0],10);if(e=k.$headers.filter('[data-column="'+l+'"]:last')[0]){f=(f=(""+a[1]).match(/^(1|d|s|o|n)/))?f[0]:"";switch(f){case "1":case "d":f=1;break;case "s":f=g||0;break;case "o":c=e.order[(g||0)%(k.sortReset?3:2)];f=0===c?1:1===c?0:2;break;case "n":e.count+=1;f=e.order[e.count%(k.sortReset?3:2)];break;default:f=0}g=0===b?f:g;c=[l,parseInt(f,10)||0];k.sortList.push(c);f=h.inArray(c[1],e.order);e.count=0<=f?f:c[1]%(k.sortReset?3:2)}})}function Q(b,a){return b&& b[a]?b[a].type||"":""}function L(b,a,c){if(b.isUpdating)return setTimeout(function(){L(b,a,c)},50);var f,e,l,d,k=b.config,n=!c[k.sortMultiSortKey],m=k.$table;m.trigger("sortStart",b);a.count=c[k.sortResetKey]?2:(a.count+1)%(k.sortReset?3:2);k.sortRestart&&(e=a,k.$headers.each(function(){this===e||!n&&h(this).is("."+g.css.sortDesc+",."+g.css.sortAsc)||(this.count=-1)}));e=a.column;if(n){k.sortList=[];if(null!==k.sortForce)for(f=k.sortForce,l=0;l<f.length;l++)f[l][0]!==e&&k.sortList.push(f[l]);f=a.order[a.count]; if(2>f&&(k.sortList.push([e,f]),1<a.colSpan))for(l=1;l<a.colSpan;l++)k.sortList.push([e+l,f])}else{if(k.sortAppend&&1<k.sortList.length)for(l=0;l<k.sortAppend.length;l++)d=g.isValueInArray(k.sortAppend[l][0],k.sortList),0<=d&&k.sortList.splice(d,1);if(0<=g.isValueInArray(e,k.sortList))for(l=0;l<k.sortList.length;l++)d=k.sortList[l],f=k.$headers.filter('[data-column="'+d[0]+'"]:last')[0],d[0]===e&&(d[1]=f.order[a.count],2===d[1]&&(k.sortList.splice(l,1),f.count=-1));else if(f=a.order[a.count],2>f&& (k.sortList.push([e,f]),1<a.colSpan))for(l=1;l<a.colSpan;l++)k.sortList.push([e+l,f])}if(null!==k.sortAppend)for(f=k.sortAppend,l=0;l<f.length;l++)f[l][0]!==e&&k.sortList.push(f[l]);m.trigger("sortBegin",b);setTimeout(function(){F(b);J(b);z(b);m.trigger("sortEnd",b)},1)}function J(b){var a,c,f,e,l,d,k,h,m,r,u,s=0,t=b.config,v=t.textSorter||"",w=t.sortList,y=w.length,z=b.tBodies.length;if(!t.serverSideSorting&&!p(t.cache)){t.debug&&(l=new Date);for(c=0;c<z;c++)d=t.cache[c].colMax,k=t.cache[c].normalized, k.sort(function(c,l){for(a=0;a<y;a++){e=w[a][0];h=w[a][1];s=0===h;if(t.sortStable&&c[e]===l[e]&&1===y)break;(f=/n/i.test(Q(t.parsers,e)))&&t.strings[e]?(f="boolean"===typeof t.string[t.strings[e]]?(s?1:-1)*(t.string[t.strings[e]]?-1:1):t.strings[e]?t.string[t.strings[e]]||0:0,m=t.numberSorter?t.numberSorter(c[e],l[e],s,d[e],b):g["sortNumeric"+(s?"Asc":"Desc")](c[e],l[e],f,d[e],e,b)):(r=s?c:l,u=s?l:c,m="function"===typeof v?v(r[e],u[e],s,e,b):"object"===typeof v&&v.hasOwnProperty(e)?v[e](r[e],u[e], s,e,b):g["sortNatural"+(s?"Asc":"Desc")](c[e],l[e],e,b,t));if(m)return m}return c[t.columns].order-l[t.columns].order});t.debug&&q("Sorting on "+w.toString()+" and dir "+h+" time",l)}}function M(b,a){var c=b[0];c.isUpdating&&b.trigger("updateComplete",c);h.isFunction(a)&&a(b[0])}function I(b,a,c){var f=b[0].config.sortList;!1!==a&&!b[0].isProcessing&&f.length?b.trigger("sorton",[f,function(){M(b,c)},!0]):(M(b,c),g.applyWidget(b[0],!1))}function N(b){var a=b.config,c=a.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(a.namespace+ " ")).bind("sortReset"+a.namespace,function(f,e){f.stopPropagation();a.sortList=[];F(b);J(b);z(b);h.isFunction(e)&&e(b)}).bind("updateAll"+a.namespace,function(f,e,c){f.stopPropagation();b.isUpdating=!0;g.refreshWidgets(b,!0,!0);g.restoreHeaders(b);E(b);g.bindEvents(b,a.$headers,!0);N(b);C(b,e,c)}).bind("update"+a.namespace+" updateRows"+a.namespace,function(a,e,c){a.stopPropagation();b.isUpdating=!0;H(b);C(b,e,c)}).bind("updateCell"+a.namespace,function(f,e,l,g){f.stopPropagation();b.isUpdating= !0;c.find(a.selectorRemove).remove();var d,n,m;n=c.find("tbody");m=h(e);f=n.index(h.fn.closest?m.closest("tbody"):m.parents("tbody").filter(":first"));d=h.fn.closest?m.closest("tr"):m.parents("tr").filter(":first");e=m[0];n.length&&0<=f&&(n=n.eq(f).find("tr").index(d),m=m.index(),a.cache[f].normalized[n][a.columns].$row=d,d="undefined"===typeof a.extractors[m].id?r(b,e,m):a.extractors[m].format(r(b,e,m),b,e,m),e="no-parser"===a.parsers[m].id?"":a.parsers[m].format(d,b,e,m),a.cache[f].normalized[n][m]= a.ignoreCase&&"string"===typeof e?e.toLowerCase():e,"numeric"===(a.parsers[m].type||"").toLowerCase()&&(a.cache[f].colMax[m]=Math.max(Math.abs(e)||0,a.cache[f].colMax[m]||0)),I(c,l,g))}).bind("addRows"+a.namespace,function(f,e,l,g){f.stopPropagation();b.isUpdating=!0;if(p(a.cache))H(b),C(b,l,g);else{e=h(e).attr("role","row");var d,n,m,q,u,s=e.filter("tr").length,t=c.find("tbody").index(e.parents("tbody").filter(":first"));a.parsers&&a.parsers.length||v(b);for(f=0;f<s;f++){n=e[f].cells.length;u=[]; q={child:[],$row:e.eq(f),order:a.cache[t].normalized.length};for(d=0;d<n;d++)m="undefined"===typeof a.extractors[d].id?r(b,e[f].cells[d],d):a.extractors[d].format(r(b,e[f].cells[d],d),b,e[f].cells[d],d),m="no-parser"===a.parsers[d].id?"":a.parsers[d].format(m,b,e[f].cells[d],d),u[d]=a.ignoreCase&&"string"===typeof m?m.toLowerCase():m,"numeric"===(a.parsers[d].type||"").toLowerCase()&&(a.cache[t].colMax[d]=Math.max(Math.abs(u[d])||0,a.cache[t].colMax[d]||0));u.push(q);a.cache[t].normalized.push(u)}I(c, l,g)}}).bind("updateComplete"+a.namespace,function(){b.isUpdating=!1}).bind("sorton"+a.namespace,function(a,e,d,x){var k=b.config;a.stopPropagation();c.trigger("sortStart",this);P(b,e);F(b);k.delayInit&&p(k.cache)&&w(b);c.trigger("sortBegin",this);J(b);z(b,x);c.trigger("sortEnd",this);g.applyWidget(b);h.isFunction(d)&&d(b)}).bind("appendCache"+a.namespace,function(a,e,c){a.stopPropagation();z(b,c);h.isFunction(e)&&e(b)}).bind("updateCache"+a.namespace,function(c,e){a.parsers&&a.parsers.length||v(b); w(b);h.isFunction(e)&&e(b)}).bind("applyWidgetId"+a.namespace,function(c,e){c.stopPropagation();g.getWidgetById(e).format(b,a,a.widgetOptions)}).bind("applyWidgets"+a.namespace,function(a,c){a.stopPropagation();g.applyWidget(b,c)}).bind("refreshWidgets"+a.namespace,function(a,c,d){a.stopPropagation();g.refreshWidgets(b,c,d)}).bind("destroy"+a.namespace,function(a,c,d){a.stopPropagation();g.destroy(b,c,d)}).bind("resetToLoadState"+a.namespace,function(){g.refreshWidgets(b,!0,!0);a=h.extend(!0,g.defaults, a.originalSettings);b.hasInitialized=!1;g.setup(b,a)})}var g=this;g.version="2.17.8";g.parsers=[];g.widgets=[];g.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc", sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me", debug:!1,headerList:[],empties:{},strings:{},parsers:[]};g.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"};g.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ", sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"};g.log=d;g.benchmark=q;g.construct=function(b){return this.each(function(){var a=h.extend(!0,{},g.defaults,b);a.originalSettings=b;!this.hasInitialized&&g.buildTable&&"TABLE"!==this.tagName?g.buildTable(this,a):g.setup(this,a)})};g.setup=function(b,a){if(!b||!b.tHead||0===b.tBodies.length||!0===b.hasInitialized)return a.debug?d("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"): "";var c="",f=h(b),e=h.metadata;b.hasInitialized=!1;b.isProcessing=!0;b.config=a;h.data(b,"tablesorter",a);a.debug&&h.data(b,"startoveralltimer",new Date);a.supportsDataObject=function(a){a[0]=parseInt(a[0],10);return 1<a[0]||1===a[0]&&4<=parseInt(a[1],10)}(h.fn.jquery.split("."));a.string={max:1,min:-1,emptymin:1,emptymax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1};a.emptyTo=a.emptyTo.toLowerCase();a.stringTo=a.stringTo.toLowerCase();/tablesorter\-/.test(f.attr("class"))||(c=""!==a.theme?" tablesorter-"+ a.theme:"");a.table=b;a.$table=f.addClass(g.css.table+" "+a.tableClass+c).attr("role","grid");a.$headers=f.find(a.selectorHeaders);a.namespace=a.namespace?"."+a.namespace.replace(/\W/g,""):".tablesorter"+Math.random().toString(16).slice(2);a.$table.children().children("tr").attr("role","row");a.$tbodies=f.children("tbody:not(."+a.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});a.$table.find("caption").length&&a.$table.attr("aria-labelledby","theCaption");a.widgetInit={};a.textExtraction= a.$table.attr("data-text-extraction")||a.textExtraction||"basic";E(b);O(b);v(b);a.totalRows=0;a.delayInit||w(b);g.bindEvents(b,a.$headers,!0);N(b);a.supportsDataObject&&"undefined"!==typeof f.data().sortlist?a.sortList=f.data().sortlist:e&&f.metadata()&&f.metadata().sortlist&&(a.sortList=f.metadata().sortlist);g.applyWidget(b,!0);0<a.sortList.length?f.trigger("sorton",[a.sortList,{},!a.initWidgets,!0]):(F(b),a.initWidgets&&g.applyWidget(b,!1));a.showProcessing&&f.unbind("sortBegin"+a.namespace+" sortEnd"+ a.namespace).bind("sortBegin"+a.namespace+" sortEnd"+a.namespace,function(c){clearTimeout(a.processTimer);g.isProcessing(b);"sortBegin"===c.type&&(a.processTimer=setTimeout(function(){g.isProcessing(b,!0)},500))});b.hasInitialized=!0;b.isProcessing=!1;a.debug&&g.benchmark("Overall initialization time",h.data(b,"startoveralltimer"));f.trigger("tablesorter-initialized",b);"function"===typeof a.initialized&&a.initialized(b)};g.getColumnData=function(b,a,c,f){if("undefined"!==typeof a&&null!==a){b=h(b)[0]; var e,d=b.config;if(a[c])return f?a[c]:a[d.$headers.index(d.$headers.filter('[data-column="'+c+'"]:last'))];for(e in a)if("string"===typeof e&&(b=f?d.$headers.eq(c).filter(e):d.$headers.filter('[data-column="'+c+'"]:last').filter(e),b.length))return a[e]}};g.computeColumnIndex=function(b){var a=[],c=0,f,e,d,g,k,n,m,p,q,s;for(f=0;f<b.length;f++)for(k=b[f].cells,e=0;e<k.length;e++){d=k[e];g=h(d);n=d.parentNode.rowIndex;g.index();m=d.rowSpan||1;p=d.colSpan||1;"undefined"===typeof a[n]&&(a[n]=[]);for(d= 0;d<a[n].length+1;d++)if("undefined"===typeof a[n][d]){q=d;break}c=Math.max(q,c);g.attr({"data-column":q});for(d=n;d<n+m;d++)for("undefined"===typeof a[d]&&(a[d]=[]),s=a[d],g=q;g<q+p;g++)s[g]="x"}return c+1};g.isProcessing=function(b,a,c){b=h(b);var f=b[0].config,e=c||b.find("."+g.css.header);a?("undefined"!==typeof c&&0<f.sortList.length&&(e=e.filter(function(){return this.sortDisabled?!1:0<=g.isValueInArray(parseFloat(h(this).attr("data-column")),f.sortList)})),b.add(e).addClass(g.css.processing+ " "+f.cssProcessing)):b.add(e).removeClass(g.css.processing+" "+f.cssProcessing)};g.processTbody=function(b,a,c){b=h(b)[0];if(c)return b.isProcessing=!0,a.before('<span class="tablesorter-savemyplace"/>'),c=h.fn.detach?a.detach():a.remove();c=h(b).find("span.tablesorter-savemyplace");a.insertAfter(c);c.remove();b.isProcessing=!1};g.clearTableBody=function(b){h(b)[0].config.$tbodies.children().detach()};g.bindEvents=function(b,a,c){b=h(b)[0];var f,e=b.config;!0!==c&&(e.$extraHeaders=e.$extraHeaders? e.$extraHeaders.add(a):a);a.find(e.selectorSort).add(a.filter(e.selectorSort)).unbind(["mousedown","mouseup","sort","keyup",""].join(e.namespace+" ")).bind(["mousedown","mouseup","sort","keyup",""].join(e.namespace+" "),function(c,d){var g;g=c.type;if(!(1!==(c.which||c.button)&&!/sort|keyup/.test(g)||"keyup"===g&&13!==c.which||"mouseup"===g&&!0!==d&&250<(new Date).getTime()-f)){if("mousedown"===g)return f=(new Date).getTime(),/(input|select|button|textarea)/i.test(c.target.tagName)?"":!e.cancelSelection; e.delayInit&&p(e.cache)&&w(b);g=h.fn.closest?h(this).closest("th, td")[0]:/TH|TD/.test(this.tagName)?this:h(this).parents("th, td")[0];g=e.$headers[a.index(g)];g.sortDisabled||L(b,g,c)}});e.cancelSelection&&a.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};g.restoreHeaders=function(b){var a=h(b)[0].config;a.$table.find(a.selectorHeaders).each(function(b){h(this).find("."+g.css.headerIn).length&&h(this).html(a.headerContent[b])})};g.destroy=function(b, a,c){b=h(b)[0];if(b.hasInitialized){g.refreshWidgets(b,!0,!0);var f=h(b),e=b.config,d=f.find("thead:first"),q=d.find("tr."+g.css.headerRow).removeClass(g.css.headerRow+" "+e.cssHeaderRow),k=f.find("tfoot:first > tr").children("th, td");!1===a&&0<=h.inArray("uitheme",e.widgets)&&(f.trigger("applyWidgetId",["uitheme"]),f.trigger("applyWidgetId",["zebra"]));d.find("tr").not(q).remove();f.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState ".split(" ").join(e.namespace+ " "));e.$headers.add(k).removeClass([g.css.header,e.cssHeader,e.cssAsc,e.cssDesc,g.css.sortAsc,g.css.sortDesc,g.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true");q.find(e.selectorSort).unbind(["mousedown","mouseup","keypress",""].join(e.namespace+" "));g.restoreHeaders(b);f.toggleClass(g.css.table+" "+e.tableClass+" tablesorter-"+e.theme,!1===a);b.hasInitialized=!1;delete b.config.cache;"function"===typeof c&&c(b)}};g.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};g.sortNatural=function(b,a){if(b===a)return 0;var c,f,e,d,h,k;f=g.regex;if(f.hex.test(a)){c=parseInt(b.match(f.hex),16);e=parseInt(a.match(f.hex),16);if(c<e)return-1;if(c>e)return 1}c=b.replace(f.chunk,"\\0$1\\0").replace(f.chunks,"").split("\\0");f=a.replace(f.chunk,"\\0$1\\0").replace(f.chunks,"").split("\\0");k=Math.max(c.length,f.length);for(h=0;h<k;h++){e=isNaN(c[h])?c[h]||0:parseFloat(c[h])||0;d=isNaN(f[h])?f[h]||0:parseFloat(f[h])||0;if(isNaN(e)!== isNaN(d))return isNaN(e)?1:-1;typeof e!==typeof d&&(e+="",d+="");if(e<d)return-1;if(e>d)return 1}return 0};g.sortNaturalAsc=function(b,a,c,f,e){if(b===a)return 0;c=e.string[e.empties[c]||e.emptyTo];return""===b&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===a&&0!==c?"boolean"===typeof c?c?1:-1:c||1:g.sortNatural(b,a)};g.sortNaturalDesc=function(b,a,c,f,e){if(b===a)return 0;c=e.string[e.empties[c]||e.emptyTo];return""===b&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===a&&0!==c?"boolean"===typeof c?c? 1:-1:-c||-1:g.sortNatural(a,b)};g.sortText=function(b,a){return b>a?1:b<a?-1:0};g.getTextValue=function(b,a,c){if(c){var f=b?b.length:0,e=c+a;for(c=0;c<f;c++)e+=b.charCodeAt(c);return a*e}return 0};g.sortNumericAsc=function(b,a,c,f,e,d){if(b===a)return 0;d=d.config;e=d.string[d.empties[e]||d.emptyTo];if(""===b&&0!==e)return"boolean"===typeof e?e?-1:1:-e||-1;if(""===a&&0!==e)return"boolean"===typeof e?e?1:-1:e||1;isNaN(b)&&(b=g.getTextValue(b,c,f));isNaN(a)&&(a=g.getTextValue(a,c,f));return b-a};g.sortNumericDesc= function(b,a,c,f,e,d){if(b===a)return 0;d=d.config;e=d.string[d.empties[e]||d.emptyTo];if(""===b&&0!==e)return"boolean"===typeof e?e?-1:1:e||1;if(""===a&&0!==e)return"boolean"===typeof e?e?1:-1:-e||-1;isNaN(b)&&(b=g.getTextValue(b,c,f));isNaN(a)&&(a=g.getTextValue(a,c,f));return a-b};g.sortNumeric=function(b,a){return b-a};g.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119", E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};g.replaceAccents=function(b){var a,c="[",d=g.characterEquivalents;if(!g.characterRegex){g.characterRegexArray={};for(a in d)"string"===typeof a&&(c+=d[a],g.characterRegexArray[a]=new RegExp("["+d[a]+"]","g"));g.characterRegex= new RegExp(c+"]")}if(g.characterRegex.test(b))for(a in d)"string"===typeof a&&(b=b.replace(g.characterRegexArray[a],a));return b};g.isValueInArray=function(b,a){var c,d=a.length;for(c=0;c<d;c++)if(a[c][0]===b)return c;return-1};g.addParser=function(b){var a,c=g.parsers.length,d=!0;for(a=0;a<c;a++)g.parsers[a].id.toLowerCase()===b.id.toLowerCase()&&(d=!1);d&&g.parsers.push(b)};g.getParserById=function(b){if("false"==b)return!1;var a,c=g.parsers.length;for(a=0;a<c;a++)if(g.parsers[a].id.toLowerCase()=== b.toString().toLowerCase())return g.parsers[a];return!1};g.addWidget=function(b){g.widgets.push(b)};g.hasWidget=function(b,a){b=h(b);return b.length&&b[0].config&&b[0].config.widgetInit[a]||!1};g.getWidgetById=function(b){var a,c,d=g.widgets.length;for(a=0;a<d;a++)if((c=g.widgets[a])&&c.hasOwnProperty("id")&&c.id.toLowerCase()===b.toLowerCase())return c};g.applyWidget=function(b,a){b=h(b)[0];var c=b.config,d=c.widgetOptions,e=[],l,p,k;!1!==a&&b.hasInitialized&&(b.isApplyingWidgets||b.isUpdating)|| (c.debug&&(l=new Date),c.widgets.length&&(b.isApplyingWidgets=!0,c.widgets=h.grep(c.widgets,function(a,b){return h.inArray(a,c.widgets)===b}),h.each(c.widgets||[],function(a,b){(k=g.getWidgetById(b))&&k.id&&(k.priority||(k.priority=10),e[a]=k)}),e.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),h.each(e,function(e,g){if(g){if(a||!c.widgetInit[g.id])c.widgetInit[g.id]=!0,g.hasOwnProperty("options")&&(d=b.config.widgetOptions=h.extend(!0,{},g.options,d)),g.hasOwnProperty("init")&& g.init(b,g,c,d);!a&&g.hasOwnProperty("format")&&g.format(b,c,d,!1)}})),setTimeout(function(){b.isApplyingWidgets=!1},0),c.debug&&(p=c.widgets.length,q("Completed "+(!0===a?"initializing ":"applying ")+p+" widget"+(1!==p?"s":""),l)))};g.refreshWidgets=function(b,a,c){b=h(b)[0];var f,e=b.config,l=e.widgets,q=g.widgets,k=q.length;for(f=0;f<k;f++)q[f]&&q[f].id&&(a||0>h.inArray(q[f].id,l))&&(e.debug&&d('Refeshing widgets: Removing "'+q[f].id+'"'),q[f].hasOwnProperty("remove")&&e.widgetInit[q[f].id]&&(q[f].remove(b, e,e.widgetOptions),e.widgetInit[q[f].id]=!1));!0!==c&&g.applyWidget(b,a)};g.getData=function(b,a,c){var d="";b=h(b);var e,g;if(!b.length)return"";e=h.metadata?b.metadata():!1;g=" "+(b.attr("class")||"");"undefined"!==typeof b.data(c)||"undefined"!==typeof b.data(c.toLowerCase())?d+=b.data(c)||b.data(c.toLowerCase()):e&&"undefined"!==typeof e[c]?d+=e[c]:a&&"undefined"!==typeof a[c]?d+=a[c]:" "!==g&&g.match(" "+c+"-")&&(d=g.match(new RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return h.trim(d)};g.formatFloat= function(b,a){if("string"!==typeof b||""===b)return b;var c;b=(a&&a.config?!1!==a.config.usNumberFormat:"undefined"!==typeof a?a:1)?b.replace(/,/g,""):b.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(b)&&(b=b.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(b);return isNaN(c)?h.trim(b):c};g.isDigit=function(b){return isNaN(b)?/^[\-+(]?\d+[)]?$/.test(b.toString().replace(/[,.'"\s]/g,"")):!0}}});var r=h.tablesorter;h.fn.extend({tablesorter:r.construct});r.addParser({id:"no-parser",is:function(){return!1}, format:function(){return""},type:"text"});r.addParser({id:"text",is:function(){return!0},format:function(d,q){var p=q.config;d&&(d=h.trim(p.ignoreCase?d.toLocaleLowerCase():d),d=p.sortLocaleCompare?r.replaceAccents(d):d);return d},type:"text"});r.addParser({id:"digit",is:function(d){return r.isDigit(d)},format:function(d,q){var p=r.formatFloat((d||"").replace(/[^\w,. \-()]/g,""),q);return d&&"number"===typeof p?p:d?h.trim(d&&q.config.ignoreCase?d.toLocaleLowerCase():d):d},type:"numeric"});r.addParser({id:"currency", is:function(d){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((d||"").replace(/[+\-,. ]/g,""))},format:function(d,q){var p=r.formatFloat((d||"").replace(/[^\w,. \-()]/g,""),q);return d&&"number"===typeof p?p:d?h.trim(d&&q.config.ignoreCase?d.toLocaleLowerCase():d):d},type:"numeric"});r.addParser({id:"ipAddress",is:function(d){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(d)},format:function(d,h){var p,y=d?d.split("."):"",v="",w=y.length; for(p=0;p<w;p++)v+=("00"+y[p]).slice(-3);return d?r.formatFloat(v,h):d},type:"numeric"});r.addParser({id:"url",is:function(d){return/^(https?|ftp|file):\/\//.test(d)},format:function(d){return d?h.trim(d.replace(/(https?|ftp|file):\/\//,"")):d},parsed:!0,type:"text"});r.addParser({id:"isoDate",is:function(d){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(d)},format:function(d,h){return d?r.formatFloat(""!==d?(new Date(d.replace(/-/g,"/"))).getTime()||d:"",h):d},type:"numeric"});r.addParser({id:"percent", is:function(d){return/(\d\s*?%|%\s*?\d)/.test(d)&&15>d.length},format:function(d,h){return d?r.formatFloat(d.replace(/%/g,""),h):d},type:"numeric"});r.addParser({id:"usLongDate",is:function(d){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(d)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(d)},format:function(d,h){return d?r.formatFloat((new Date(d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||d,h):d},type:"numeric"});r.addParser({id:"shortDate",is:function(d){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((d|| "").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(d,h,p,y){if(d){p=h.config;var v=p.$headers.filter("[data-column="+y+"]:last");y=v.length&&v[0].dateFormat||r.getData(v,r.getColumnData(h,p.headers,y),"dateFormat")||p.dateFormat;d=d.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===y?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===y?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===y&&(d=d.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3"))}return d?r.formatFloat((new Date(d)).getTime()||d,h):d},type:"numeric"});r.addParser({id:"time",is:function(d){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(d)},format:function(d,h){return d?r.formatFloat((new Date("2000/01/01 "+d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||d,h):d},type:"numeric"});r.addParser({id:"metadata",is:function(){return!1},format:function(d,q,p){d=q.config;d=d.parserMetadataName?d.parserMetadataName:"sortValue";return h(p).metadata()[d]}, type:"numeric"});r.addWidget({id:"zebra",priority:90,format:function(d,q,p){var y,v,w,z,D,E=new RegExp(q.cssChildRow,"i"),C=q.$tbodies;q.debug&&(D=new Date);for(d=0;d<C.length;d++)w=0,y=C.eq(d),y=y.children("tr:visible").not(q.selectorRemove),y.each(function(){v=h(this);E.test(this.className)||w++;z=0===w%2;v.removeClass(p.zebra[z?1:0]).addClass(p.zebra[z?0:1])});q.debug&&r.benchmark("Applying Zebra widget",D)},remove:function(d,q,p){var r;q=q.$tbodies;var v=(p.zebra||["even","odd"]).join(" ");for(p= 0;p<q.length;p++)r=h.tablesorter.processTbody(d,q.eq(p),!0),r.children().removeClass(v),h.tablesorter.processTbody(d,r,!1)}})}(jQuery);;
/**
 * @file
 * Foobartable sorting helpers.
 */
(function($) {

    var foobartableHelper = {
        getTableId: function (table) {
            var classes = table.attr("class").split(" ");
            for (var i in classes) {
                var cl = classes[i];
                if (cl.indexOf("foobartable-id-") === 0) {
                    return cl.substring("foobartable-id-".length);
                }
            }

            return "";
        },
        saveSortingOrder: function (id, order) {
            var sortings = foobartableHelper.loadSortingOrders();
            if (sortings === null) {
                sortings = {};
            }
            sortings[id] = order;
            $.cookie("foobarsorting", JSON.stringify(sortings), {path: window.location.pathname + ""});
        },
        loadSortingOrders: function () {
            var sortingString = $.cookie("foobarsorting");
            return sortingString === null ? JSON.parse(sortingString) : null;
        },
        loadSortingOrder: function (id) {
            var sortings = foobartableHelper.loadSortingOrders();
            if (sortings === null || !sortings.hasOwnProperty(id)) {
                return null;
            }
            var parts = sortings[id].split(",");
            return [[parts[0], parts[1]]];
        },
        getDefaultSortingOrder: function (tableId, defaultOrder) {
            var savedOrder = foobartableHelper.loadSortingOrder(tableId);
            return savedOrder !== null ? savedOrder : defaultOrder;
        }
    };
    
    Drupal.behaviors.foobartableInitSorting = {
        attach: function(context, settings) {
            if ($("table.foobartable-sorting-enabled", context).length === 0) {
                return;
            }
            
            $.tablesorter.defaults.widgets = ["zebra"];

            $("table.foobartable-sorting-enabled:not(.foobartable-processed)", context).each(function () {
                var table = $(this);
                var id = foobartableHelper.getTableId(table);
                var headers = {};
                for(var i in settings.foobartableSorters[id]) {
                    if (settings.foobartableSorters[id].hasOwnProperty(i)) {
                        headers[i] = { sorter: settings.foobartableSorters[id][i] };
                    }
                }
                table.tablesorter({
                    headers: headers,
                    sortList: foobartableHelper.getDefaultSortingOrder(id, settings.foobartableDefaultSortOrder[id]),
                });
                table.bind("sortEnd", function (sorter) {
                    var tableId = foobartableHelper.getTableId($(sorter.target));
                    foobartableHelper.saveSortingOrder(tableId, sorter.target.config.sortList);
                });
                table.addClass("foobartable-processed");
            })
        }
    };

})(jQuery);;
(function ($) {

  Drupal.behaviors.foobartableAddparsers = {
    attach: function (context, settings) {
      $.tablesorter.addParser({
        id: 'myPrices',
        type: 'numeric',
        is: function (s) {
          return false;
        },
        format: function (s) {
          return s.replace(' ', '');
        }
      });

      $.tablesorter.addParser({
        id: 'myDates',
        type: 'numeric',
        is: function (s) {
          return false;
        },
        format: function (s) {
          var parts = s.replace(new RegExp('<[^<]+\>', 'g'), "").split(" ");
          if (parts.length === 0) {
            return 0;
          }
          for (var iPart in parts) {
            if (/^\d{10,11}$/.test(parts[iPart])) {
              return parts[iPart];
            }
          }

          var dateParts = parts[0].split(".");
          if (dateParts.length < 3) {
            return 0;
          }
          if (parts.length === 1) {
            return new Date(dateParts[2], dateParts[1], dateParts[0]).getTime();
          }
          var timeParts = parts[1].split(":");
          if (timeParts.length < 3) {
            return 0;
          }
          return new Date(dateParts[2], dateParts[1], dateParts[0], timeParts[0], timeParts[1], timeParts[2]).getTime();
        }
      });
      $('sub.date-sorting-time').css('display', 'none');
    }
  };

})(jQuery);;
window.alert = function(arg) { if (window.console && console.error) { console.error(arg);}};;
(function ($) {

  $(document).ready(function () {
    MobileConverter.addMobileTransform(headerConvert, headerTurnBack);
    MobileConverter.addTabletTransform(partnerRequestsTableConvert, partnerRequestsTableTurnBack);
    MobileConverter.addMobileTransform(mainMenuConvert, mainMenuTurnBack);
    MobileConverter.addMobileTransform(cartInfoConvert, cartInfoTurnBack);

    MobileConverter.init();

    expandPricelistServicesGroups();
  });

  function headerConvert() {
    $(".footer .container").prepend($("#block-testlab-cabinet-sub-header-info"));
  }

  function headerTurnBack() {
    $(".region-sub-header").append($("#block-testlab-cabinet-sub-header-info"));
  }

  function partnerRequestsTableConvert(context) {
    $(".requests-table tr .form-results-btn-td", context).hide();
    $(".requests-table thead .requests-table-td-icon", context).hide();

    $(".requests-table tbody tr", context).each(function () {
      var row = $(this);
      var allBtnsCell = $("<td class='all-btns-cell'></td>");
      row.find(".form-results-btn-td").each(function () {
        var btnCell = $(this);
        allBtnsCell.append(btnCell.html());
      });
      row.append(allBtnsCell);
    });
    $(".requests-table thead tr", context).append($("<th class='all-btns-cell sorter-false'></th>"));
    $(".requests-table tfoot tr", context).append($("<td class='all-btns-cell'></td>"));
  }

  function partnerRequestsTableTurnBack(context) {
    $(".requests-table tr .form-results-btn-td", context).show();
    $(".requests-table thead .requests-table-td-icon", context).show();
    $(".requests-table .all-btns-cell", context).remove();
  }

  function mainMenuConvert() {
    var mainMenu = $(".main-menu");
    if ($("body.cabinet__logged_in").length > 0) {
      mainMenu.hide();
    }

    $(".burger").click(function () {
      mainMenu.toggle();
    });
  }

  function mainMenuTurnBack() {
    $(".main-menu").show();
  }

  function cartInfoConvert() {
    $(".sidebar_first").prepend($("#block-testlab-ng2-ng2-cart-info-block"));
  }

  function cartInfoTurnBack() {
    $(".region-sub-header").prepend($("#block-testlab-ng2-ng2-cart-info-block"));
  }

  function expandPricelistServicesGroups() {
    var toggler =  $("#block-views-pricelist-services-groups-block h2");
    var groupList = $(".view-pricelist-services-groups");

    toggler.addClass("toggler");

    toggler.click(function() {
      groupList.slideToggle("slow");

      if ($(".toggler--is-open").length === 0) {
        toggler.addClass("toggler--is-open");
      } else {
        toggler.removeClass("toggler--is-open");
      }
    });
  }
})(jQuery);

function attachMobileSwitch() {
  document.querySelector(".full-version-link").addEventListener("click", function () {
    MobileConverter.forceDesktopVersion();
  });
}

;
