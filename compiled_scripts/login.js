// To allow forEach on NodeList
function forEach() {
	var args = [].slice.call(arguments, 0);
	var ctx = args.shift();
	return [].forEach.apply(ctx, args);
}

window.addEventListener("load", function () {

	var form = document.forms["login"];
	form["username"].addEventListener("input", validate, false);
	form["password"].addEventListener("input", validate, false);
	form["id"].addEventListener("input", validate, false);
	var button = form.querySelector("button");

	forEach(document.querySelectorAll(".split-button-group input"), function (el) {
		el.addEventListener("change", function (e) {
			var username = form["username"].value;
			var password = form["password"].value;
			var id = form["id"].value;

			if (username === "") {
				form["username"].focus();
			} else if (password === "") {
				form["password"].focus();
			} else if (id === "") {
				form["id"].focus();
			} else {
				button.focus();
			}
		}, false);
	});

	function disableForm() {
		form.classList.add("busy");
		forEach(form.querySelectorAll(".split-button-group input"), function (el) {
			el.disabled = true;
		});
		form["username"].disabled = true;
		form["password"].disabled = true;
		form["id"].disabled = true;
		button.disabled = true;
	}
	function enableForm() {
		form.classList.remove("busy");
		forEach(form.querySelectorAll(".split-button-group input"), function (el) {
			el.disabled = false;
		});
		form["username"].disabled = false;
		form["password"].disabled = false;
		form["id"].disabled = false;
		button.disabled = false;
	}

	function responseHandler(error) {
		if (error) {
			// Error while logging in
			// Allow input
			enableForm();
			form.classList.add("error");
			setTimeout(function () {
				form.classList.remove("error");
			}, 3000);
			console.error("Unable to log in.");
			return;
		}
		// Login succeeded
		// Placeholder navigation
		location.href = location.href.replace("login", "dashboard");
	}

	form.addEventListener("submit", function (e) {
		console.log("logging in...");
		// Prevent form from changing page
		e.preventDefault();
		// Disallow further input
		disableForm();

		// Placeholder server success
		var success = form["username"].value === "admin" && form["password"].value === "abc" && form["id"].value === "123456";

		// Placeholder server response
		setTimeout(responseHandler.bind(null, !success), success ? 1000 : 3000);
	}, false);

	function validate() {
		var ID_isNumeric = !form["id"].validity.patternMismatch;
		var ID_isLongEnough = form["id"].value.length >= 6;
		var ID_isValid;

		// If ID entered is numeric
		if (ID_isNumeric) {
			// Do not display it as invalid
			form["id"].classList.remove("invalid");
			// Validate only if ID is long enough
			ID_isValid = ID_isLongEnough;
		} else {
			// ID is not numeric
			// Display ID as invalid
			form["id"].classList.add("invalid");
			// Do not validate
			ID_isValid = false;
		}

		if (form["username"].checkValidity() && form["password"].checkValidity() && ID_isValid) {
			// Display submit button
			button.disabled = false;
		} else {
			// Hide submit button
			button.disabled = true;
		}
	}
	
}, false);
