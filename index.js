const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "!@#$%^&*()-=_+;\"':,";
const rangeValue = document.getElementById("display-password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veuillez selectionner des criteres");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;
  passwordOutput.select();
  document.execCommand("copy");
  generateButton.textContent = "copié !";
  setTimeout(() => {
    generateButton.textContent = "Generer un mot de pass";
  }, 2000);
}

const generateButton = document.querySelector("#generateButton");

generateButton.addEventListener("click", () => {
  generatePassword();
});
