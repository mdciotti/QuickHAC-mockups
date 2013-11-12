

var Workspace = Backbone.Router.extend({

	routes: {
		"login": "login",
		"logout": "logout",
		"dashboard": "dashboard",
		"preferences": "preferences",
		"preferences/:category": "preferences",
		"details/:course": "details",
		"table": "table"
	},

	login: function () {

	},

	logout: function () {

	},

	dashboard: function () {

	},

	preferences: function (category) {

	},

	details: function (courseID) {

	},

	table: function () {

	}

})

var MainView = Backbone.View.extend({

	el: $("#preview"),

	initialize: function () {
		_.bindAll(this, "render")

		this.render();
	},

	render: function () {
		var container = this.el;

		dust.render("details", {
			"current_cycle": 2,
			"current_page": "dashboard",
			"pages": [
				{
					"name": "Dashboard",
					"route": "dashboard",
					"icon": "icon-stats-bars"
				},
				{
					"name": "Table",
					"route": "table",
					"icon": "icon-grid"
				},
				{
					"name": "Details",
					"route": "details",
					"icon": "icon-archive"
				},
				{
					"name": "Grade Point Average",
					"route": "gpa",
					"icon": "icon-gpa"
				}
			],
			"current_student": "Gordon Freeman",
			"students": [
				{
					"id": "101010",
					"name": "Gordon Freeman",
					"color": "pumpkin"
				},
				{
					"id": "313337",
					"name": "Eli Vance",
					"color": "silver"
				},
				{
					"id": "011235",
					"name": "Alyx Vance",
					"color": "amethyst"
				}
			],
			"categories": [
				{
					"name": "General",
					"route": "preferences/general",
					"icon": "icon-gear-a"
				},
				{
					"name": "Notifications",
					"route": "preferences/notifications",
					"icon": "icon-ios7-bell"
				},
				{
					"name": "Colorization",
					"route": "preferences/colorization",
					"icon": "icon-waterdrop"
				},
				{
					"name": "Students",
					"route": "preferences/students",
					"icon": "icon-person-stalker"
				},
				{
					"name": "Refresh",
					"route": "preferences/refresh",
					"icon": "icon-refresh"
				},
				{
					"name": "Security",
					"route": "preferences/security",
					"icon": "icon-locked"
				},
				{
					"name": "Experimental",
					"route": "preferences/experimental",
					"icon": "icon-beaker"
				},
				{
					"name": "About",
					"route": "preferences/about",
					"icon": "icon-information-circled"
				}
			],
			"banner": {
				"active": true,
				"type": "promotion",
				"url": "https://www.facebook.com/",
				"text": "Let&apos;s keep in touch on Facebook!"
			}
		}, function (err, out) {
			if (err) throw err;
			container.innerHTML = out;
		});
	}

});

var mainView = new MainView();
