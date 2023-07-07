var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUsersRepos = function (user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

// function to be executed upon a form submission browser event
var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
//   get value from input element
var username = nameInputEl.value.trim();

if (username) {
    getUsersRepos(username)
    nameInputEl.value = ""
} else {
    alert("Please enter a GitHub username")
}
};

userFormEl.addEventListener("submit", formSubmitHandler);
