document.getElementById("contact-form").addEventListener("submit", function (e) {
  const form = this;
  const response = document.getElementById("form-response");

  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      response.textContent = "Message sent successfully! ✅";
    } else {
      response.textContent = "Oops! Something went wrong.";
    }
  });
});
