document
.getElementById("enrollmentForm")
.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("Name");
  const mobile = document.getElementById("Mobile");
  const email = document.getElementById("Email");
  const message = document.getElementById("Message");

  let isValid = true;
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxD8dnw585byzMl43XuM5QL3DGUKcvqSXsa2pLcpz8XLOJJkmS_fZWoR8MwDkr9XoDs/exec'
  const form = document.forms['google-sheet']
  // Reset previous error states
  resetErrorState(name, "nameLabel");
  resetErrorState(mobile, "mobileLabel");
  resetErrorState(email, "emailLabel");
  resetErrorState(message, "messageLabel");

  // Check if all fields are filled
  if (!name.value) {
    setErrorState(name, "nameLabel");
    isValid = false;
  }
  if (!mobile.value) {
    setErrorState(mobile, "mobileLabel");
    isValid = false;
  }
  if (!email.value) {
    setErrorState(email, "emailLabel");
    isValid = false;
  }
  if (!message.value) {
    setErrorState(message, "messageLabel");
    isValid = false;
  }

  if (isValid) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert("Thanks for Contacting us..! We Will Contact You Soon...");
      form.reset(); // Reset the form after alert
    })
    .catch(error => console.error('Error!', error.message))

  }
});

function setErrorState(element, labelId) {
  element.classList.add("error-input");
  document.getElementById(labelId).classList.add("error-label");
}

function resetErrorState(element, labelId) {
  element.classList.remove("error-input");
  document.getElementById(labelId).classList.remove("error-label");
}

document.getElementById("enrollmentForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for now, we'll handle validation

  // Reset error states
  resetErrorState(document.getElementById("Name"), "nameLabel");
  resetErrorState(document.getElementById("Mobile"), "mobileLabel");
  resetErrorState(document.getElementById("Email"), "emailLabel");
  resetErrorState(document.getElementById("Message"), "messageLabel");

  // Validate form fields
  let name = document.getElementById("Name").value.trim();
  let mobile = document.getElementById("Mobile").value.trim();
  let email = document.getElementById("Email").value.trim();
  let message = document.getElementById("Message").value.trim();
  let isValid = true;

  // Check if fields are empty
  if (name === "") {
      setErrorState(document.getElementById("Name"), "nameLabel");
      isValid = false;
  }
  if (mobile === "") {
      setErrorState(document.getElementById("Mobile"), "mobileLabel");
      isValid = false;
  }
  if (email === "") {
      setErrorState(document.getElementById("Email"), "emailLabel");
      isValid = false;
  }
  if (message === "") {
      setErrorState(document.getElementById("Message"), "messageLabel");
      isValid = false;
  }

  // If form is valid, proceed with submission
  if (isValid) {
      // You can submit the form here if needed
      console.log("Form submitted!");
      // Example: document.getElementById("enrollmentForm").submit();
  } else {
      // Form has errors, do not submit
      console.log("Form has errors. Please fill in all required fields.");
  }
});