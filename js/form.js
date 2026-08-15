const formLink = "https://formspree.io/f/xvkpbpqp";

const formElement = `
  <form action="${formLink}" method="POST">
    <!-- Form fields here -->
    <button type="submit">Send</button>
  </form>
`;

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
