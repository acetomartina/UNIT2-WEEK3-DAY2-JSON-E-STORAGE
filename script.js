const userName = document.getElementById("userName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");

const card = document.getElementById("userCard");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (userName.value && surname.value && email.value && password.value) {
    const user = {
      name: userName.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
    };
    alert("Thank you!");
    localStorage.setItem("User", JSON.stringify(user));
  } else {
    alert("You forgot something!");
  }
});

const userData = localStorage.getItem("User");
if (userData) {
  card.classList.remove("d-none");
  const user = JSON.parse(userData);
  const cardTitle = document.getElementById("cardTitle");
  cardTitle.innerHTML = `${user.name} ${user.surname}`;
  const cardEmail = document.getElementById("cardEmail");
  cardEmail.innerHTML = `${user.email}`;
  const cardPassword = document.getElementById("cardPassword");
  cardPassword.innerHTML = `${user.password}`;
  console.log(user);
} else {
  card.classList.add("d-none");
}

deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("User");
  alert("User removed!");
});
