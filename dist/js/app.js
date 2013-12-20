var baseJSON = {
	"global": {
		"cycle": 1,
		"student": "Gordon Freeman"
	},
	"appmenu": [
		{
			"title": "Preferences",
			"url": "#/preferences",
			"icon": "icon-gear-a",
			"external": false
		},
		{
			"title": "Help",
			"url": "https://chrome.google.com/webstore/support/dnboopdmbbpaicaphfkcphonijbfhopg?hl=en&amp;gl=US#question",
			"icon": "icon-help-circled",
			"external": true
		},
		{
			"title": "Report Issue",
			"url": "https://chrome.google.com/webstore/support/dnboopdmbbpaicaphfkcphonijbfhopg?hl=en&amp;gl=US#bug",
			"icon": "icon-alert-circled",
			"external": true
		},
		{
			"title": "Sign Out",
			"url": "#/logout",
			"icon": "icon-log-out",
			"external": false
		}
	],
	"students": [
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
	"actions": [],
	"views": [
		{
			"title": "Dashboard",
			"route": "dashboard",
			"icon": "icon-stats-bars"
		},
		{
			"title": "Year at a Glance",
			"route": "fullyear",
			"icon": "icon-grid"
		}
	],
	"courses": [
		{
			"title": "Combinatorics & Graph Theory",
			"period": 1,
			"average": 98
		},
		{
			"title": "Statistics",
			"period": 2,
			"average": 95
		},
		{
			"title": "Software Development",
			"period": 3,
			"average": 96
		},
		{
			"title": "English",
			"period": 4,
			"average": 88
		},
		{
			"title": "Circuits",
			"period": 5,
			"average": 90
		},
		{
			"title": "Physics",
			"period": 6,
			"average": 93
		},
		{
			"title": "Orchestra",
			"period": 7,
			"average": 100
		}
	],
	"banner": {
		"active": true,
		"type": "promotion",
		"url": "https://www.facebook.com/",
		"text": "Let&apos;s keep in touch on Facebook!"
	}
};

function deepClone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

var Router = Backbone.Router.extend({

	routes: {
		"login": "login",
		"logout": "logout",
		"dashboard": "dashboard",
		"preferences": "preferences",
		"preferences/:category": "preferences",
		"details": "details",
		"details/cycle/:cycle/course/:courseID": "details",
		"fullyear": "fullyear",
		"gpa": "gpa"
	},

	login: function () {
		mainView.display("login", {}, LoginForm.init);
	},

	logout: function () {
		// Sign out code

		router.navigate("login", {trigger: true, replace: true});
	},

	dashboard: function () {
		var data = deepClone(baseJSON);
		data["views"][0]["selected"] = true;
		data["actions"].push({
			"title": "Refresh",
			"icon": "icon-refresh"
		});

		mainView.display("dashboard", data);
	},

	preferences: function (category) {
		var data = deepClone(baseJSON);

		data["appmenu"][0]["selected"] = true;

		data["categories"] = [
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
				"name": "Import & Export",
				"route": "import-export",
				"icon": "icon-ios7-download"
			},
			{
				"name": "About",
				"route": "preferences/about",
				"icon": "icon-information-circled"
			}
		];

		data["details"] = [
			{
				"title": "Consolidate Updates",
				"caption": "Notify once for all grade changes, instead of once for each individual change. This is required if password lock is enabled.",
				"type": "toggle",
				"id": "notif_consolidate",
				"defaultValue": false
			},
			{
				"title": "Auto-Hide Duration",
				"caption": "Duration in seconds to display the notification. Set to 0 to disable auto-hide (manual notification dismissal).",
				"type": "number",
				"id": "notif_duration",
				"defaultValue": "5"
			}
		];

		mainView.display("preferences", data);
	},

	details: function (courseID) {
		var data = deepClone(baseJSON);

		data["courses"][0]["selected"] = true;
		data["actions"].push({
			"title": "Refresh",
			"icon": "icon-refresh"
		});

		data["details"] = {
			"courseTitle": "Combinatorics & Graph Theory",
			"coursePeriod": 1,
			"teacherName": "Blaise Pascal",
			"teacherEmail": "bpascal@oxford.edu",
			"cycleAverage": 98,
			"courseGoal": 100,
			"cycleIndex": 1,
			"lastUpdated": "42 minutes ago",
			"categories": [
				{
					"title": "Homework",
					"weight": 10,
					"average": 100,
					"assignments": [
						{
							"title": "Factorials",
							"dateDue": "Sep 4",
							"dateAssigned": "Aug 28",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Permutations",
							"dateDue": "Sep 11",
							"dateAssigned": "Sep 4",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Combinations",
							"dateDue": "Sep 18",
							"dateAssigned": "Sep 11",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Combinatorics and Probability",
							"dateDue": "Sep 25",
							"dateAssigned": "Sep 18",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Review",
							"dateDue": "Oct 2",
							"dateAssigned": "Sep 25",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						}
					]
				},
				{
					"title": "Quizzes",
					"weight": 30,
					"average": 95,
					"assignments": [
						{
							"title": "Factorials",
							"dateDue": "Sep 4",
							"dateAssigned": "Sep 4",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Permutations",
							"dateDue": "Sep 11",
							"dateAssigned": "Sep 11",
							"ptsEarned": 100,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Combinations",
							"dateDue": "Sep 18",
							"dateAssigned": "Sep 18",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						},
						{
							"title": "Combinatorics and Probability",
							"dateDue": "Sep 25",
							"dateAssigned": "Sep 25",
							"ptsEarned": 90,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						}
					]
				},
				{
					"title": "Tests",
					"weight": 60,
					"average": 98,
					"assignments": [
						{
							"title": "Test 1",
							"dateDue": "Oct 9",
							"dateAssigned": "Oct 9",
							"ptsEarned": 98,
							"ptsPossible": 100,
							"weight": 1,
							"note": "",
							"extraCredit": false
						}
					]
				}
			]
		};

		mainView.display("details", data);
	},

	fullyear: function () {
		var data = deepClone(baseJSON);

		data["views"][1]["selected"] = true;
		data["actions"].push({
			"title": "Refresh",
			"icon": "icon-refresh"
		});

		mainView.display("fullyear", data);
	},

	gpa: function () {
		var data = deepClone(baseJSON);

		// mainView.display("gpa", data);
	}

});

var router = new Router();

var MainView = Backbone.View.extend({

	el: $("#preview"),

	initialize: function () {
		_.bindAll(this, "display");
	},

	display: function (template, context, success) {
		var container = this.el;

		dust.render(template, context, function (err, out) {
			if (err) throw err;

			container.innerHTML = out;
			if (typeof success === "function") success.call(window);
		});
	}

});

var mainView = new MainView();

Backbone.history.start({pushState: false});

if (window.location.hash === "") {
	router.navigate("details", {trigger: true, replace: true});	
}
