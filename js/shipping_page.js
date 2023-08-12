var app = angular.module('MyApp', [])
app.controller('MyController', function ($scope) {
	//style for error email alert
	$scope.errornote = {
		"color": "red",
		"position": "absolute"
	}

	$scope.totalmoney = 0;
	angular.forEach($scope.personalDetails, function (value, key) {
		$scope.totalmoney += value.price
	});
	//script angularjs for shipping_methor.html
	$scope.showbtnaccess1 = function () {//only show the payment access 1 
		$scope.showpayment1 = $scope.showpayment1 == false ? true : false;
		$scope.showpayment2 = $scope.showpayment2 == false ? false : false;
		$scope.showpayment3 = $scope.showpayment3 == false ? false : false;
		$scope.payacces1 = true
		$scope.payacces2 = false
		$scope.payacces3 = false
	};
	$scope.showbtnaccess2 = function () {//only show the payment access 2
		$scope.showpayment1 = $scope.showpayment1 == false ? false : false;
		$scope.showpayment2 = $scope.showpayment2 == false ? true : false;
		$scope.showpayment3 = $scope.showpayment3 == false ? false : false;
		$scope.payacces1 = false
		$scope.payacces2 = true
		$scope.payacces3 = false
	};
	$scope.showbtnaccess3 = function () {//only show the payment access 3
		$scope.showpayment1 = $scope.showpayment1 == false ? false : false;
		$scope.showpayment2 = $scope.showpayment2 == false ? false : false;
		$scope.showpayment3 = $scope.showpayment3 == false ? true : false;
		$scope.payacces1 = false
		$scope.payacces2 = false
		$scope.payacces3 = true
	};
});
function getfname() {
	return localStorage.getItem("firstname");
}
function getlname() {
	return localStorage.getItem("lastname");
}
function getaddress() {
	return localStorage.getItem("address");
}
function getcountry() {
	return localStorage.getItem("shippingcountry");
}
function getplace() {
	return localStorage.getItem("place");
}
function getpost() {
	return localStorage.getItem("postcode");
}
function getphonenum() {
	return localStorage.getItem("phone");
}
function updateHTML() {
	var lname = getlname();
	var fname = getfname();
	var address = getaddress();
	var country = getcountry();
	var place = getplace();
	var postcode = getpost();
	var phone = getphonenum();
	document.getElementById("showfname").innerHTML = fname;
	document.getElementById("showlname").innerHTML = lname;
	document.getElementById("showaddress").innerHTML = address;
	document.getElementById("showcountry").innerHTML = country;
	document.getElementById("showplace").innerHTML = place;
	document.getElementById("showpost").innerHTML = postcode;
	document.getElementById("showphone").innerHTML = phone;
}
function save() {
	// Gets input value
	var name = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var address = document.getElementById("address").value;
	var country = document.getElementById("country").value;
	var place = document.getElementById("place").value;
	var postcode = document.getElementById("postcode").value;
	var phone = document.getElementById("phone").value;
	// Saves data to retrieve later
	localStorage.setItem("firstname", name);
	localStorage.setItem("lastname", lname);
	localStorage.setItem("address", address);
	localStorage.setItem("shippingcountry", country);
	localStorage.setItem("place", place);
	localStorage.setItem("postcode", postcode);
	localStorage.setItem("phone", phone);
	// Updates HTML
	updateHTML();
}
function nextpage() {
	if (document.getElementById("fname").value != null && document.getElementById("fname").value != ""
		&& document.getElementById("lname").value != null && document.getElementById("lname").value != ""
		&& document.getElementById("address").value != null && document.getElementById("address").value != ""
		&& document.getElementById("country").value != null && document.getElementById("country").value != ""
		&& document.getElementById("place").value != null && document.getElementById("place").value != ""
		&& document.getElementById("postcode").value != null && document.getElementById("postcode").value != ""
		&& document.getElementById("phone").value != null && document.getElementById("phone").value != ""
		&& document.getElementById("email").value != null && document.getElementById("email").value != ""
	) {
		location.href = "./shipping_methor.html";
		return false;
	}
};
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
	utilsScript:
		"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

