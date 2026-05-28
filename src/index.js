function displayMsg(response) {
  let messageElement = document.querySelector("#message");
  messageElement.innerHTML = "";

  new Typewriter("#message", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateMessage(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5c9fa8tb15a0808c494ddd28db3adc8o";
  let prompt = `Generate a Portuguese christmas message about ${instructionsInput.value}`;
  let context =
    "User instructions: You are a christmas lovely warm messages expert. Generate a 5 line message in HTML using <p> tags only. Do not use markdown, do not use code blocks, do not include backticks. End the message with a <p> signed by <br> `Santa Claus AI 💫` inside a <strong> element. Only return HTML, nothing else.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let messageElement = document.querySelector("#message");
  messageElement.classList.remove("hidden");
  messageElement.innerHTML = `<div class="generating">⏳ Generating a Portuguese Christmas message about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayMsg);
}

let messageFormElement = document.querySelector("#msg-generator-form");
messageFormElement.addEventListener("submit", generateMessage);
