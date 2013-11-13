
// $("header").stellar({
// 	parallaxElements: false
// });

var Parallax = function (el, opts) {
	this.$el = $(el);
	this.inertia = opts && opts.inertia || 0.3;
	this.beginEffect = opts && opts.beginEffect ? opts.beginEffect : 0;
	this.endEffect = opts && opts.endEffect || 400;
	$(window).on("scroll", $.proxy(this.__window_scroll, this));
};

Parallax.prototype = {
	__window_scroll: function () {
		this.parallax()
	},
	reset_offset: function () {
		this.$el.css({
			transform: "translateY(" + this.beginEffect + ")"
		})
	},
	parallax: function () {
		var offset = $(window).scrollTop();
		if (offset > this.endEffect) return;
		var t = Math.round(offset * this.inertia);
		this.$el.css({
			transform: "translateY(" + -t + "px)"
		});
	}
};

$(function () {
	new Parallax($("header .bg"), {
		inertia: 0.5,
		beginEffect: 0,
		endEffect: $("header").height() + $("nav").height()
	});
});
