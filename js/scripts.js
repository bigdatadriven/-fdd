function adduser() {
    const InputTextBox = document.getElementById("useremail");
    mootrack('identify', InputTextBox.value, 'fdd');
    const button = document.getElementById('submit-button');
    const thanksDiv = document.getElementById('thanksMessage');
    disableButton = true;
    if (disableButton) {
        button.disabled = true;
        button.innerText = "Subscribed!";
        InputTextBox.value = "";
        thanksDiv.style = "padding-left: 500px; display: block"
    } else { button.disabled = false; thanksDiv.style = "display: none" };
}