function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const getLocal = function () {
  const storeddata = JSON.parse(storage.getItem("person"));
  return storeddata || [];
};
