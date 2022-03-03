// input dan output nama
let inputName = document.getElementById("inputName");
const profileName = document.querySelector("#profile");

// input dan output role
let inputRole = document.getElementById("inputRole");
const roleName = document.querySelector("#role");

// input dan output availability
let inputAvailability = document.getElementById("inputAvailability");
const availabilityName = document.querySelector("#availability");

// input dan output age
let inputAge = document.getElementById("inputAge");
const ageName = document.querySelector("#age");

// input dan output location
let inputLocation = document.getElementById("inputLocation");
const locationName = document.querySelector("#location");

// input dan output yearsexperience
let inputYE = document.getElementById("inputYearsExperience");
const YEName = document.querySelector("#yearsExperience");

// input dan output email
let inputEmail = document.getElementById("inputEmail");
const emailAddress = document.querySelector("#email");

// edit data
let edit = document.getElementById("edit");

editData = () => {
  // show name
  inputName.value = profileName.innerHTML;
  // show role
  inputRole.value = roleName.innerHTML;
  // show availability
  inputAvailability.value = availabilityName.innerHTML;
  // show age
  inputAge.value = ageName.innerHTML;
  // show location
  inputLocation.value = locationName.innerHTML;
  // show yearsexperience
  inputYE.value = YEName.innerHTML;
  // show email
  inputEmail.value = emailAddress.innerHTML;
};
// Edit Data
edit.addEventListener("click", function () {
  editData();
});

// show hide
showHide = () => {
  var showHide = document.querySelector("section.form");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
};
// show HideForm
edit.addEventListener("click", function () {
  showHide();
});

// Submit
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // input dan output nama
  profileName.innerHTML = inputName.value;
  // input dan output role
  roleName.innerHTML = inputRole.value;
  // input dan output availability
  availabilityName.innerHTML = inputAvailability.value;
  // input dan output age
  ageName.innerHTML = inputAge.value;
  // input dan output location
  locationName.innerHTML = inputLocation.value;
  // input dan output yearsexperience
  YEName.innerHTML = inputYE.value;
  // input dan output email
  emailAddress.innerHTML = inputEmail.value;
});

form.addEventListener("submit", function () {
  alert("data berhasil diubah");
});
