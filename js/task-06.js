const inputRef = document.getElementById("validation-input");
const validLength = +inputRef.attributes["data-length"].value;

function validateInput() {
  const currentInputLength = inputRef.value.length;

  if (currentInputLength === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  } else if (currentInputLength === validLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

// Добавление слушателя события
inputRef.addEventListener("blur", validateInput);