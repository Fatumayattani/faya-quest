const submitButton = document.getElementById('submitCommand') as HTMLButtonElement;
const userCommandInput = document.getElementById('userCommand') as HTMLTextAreaElement;
const commandsList = document.getElementById('commandsList') as HTMLUListElement;

submitButton.addEventListener('click', () => {
  const userCommand = userCommandInput.value.trim();
  if (userCommand) {
    const li = document.createElement('li');
    li.textContent = userCommand;
    commandsList.appendChild(li);
    userCommandInput.value = ''; // clear input field
    // You can add a call to the backend here to process the command
  }
});
