const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("form");

submitButton.addEventListener("submit", function (event) {
  event.preventDefault();
  if (document.getElementById("username").value == "") {
    alert("please enter your username");
    return;
  }
  const person = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };
const userinfo= getLocal();
userinfo.push(person);
  localStorage.setItem("person", JSON.stringify(userinfo));
  location.href = "./blog.html";
});

  

