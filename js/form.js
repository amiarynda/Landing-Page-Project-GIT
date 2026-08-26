const formLink = "https://formspree.io/f/xvkpbpqp";

const formElement = document.getElementById('form-contact');
// form element ada nama lengkap (input), email (input), subjek (input), pesan (textarea)

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch(formLink, {
    method: "POST",
    body: new FormData(formElement),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    formElement.reset();
    alert("Message is successfully sent");
  }
});
