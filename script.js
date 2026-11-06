document.addEventListener('DOMContentLoaded', () => {

    const inputField = document.getElementById('input-field');

    const buttons = document.querySelectorAll('.keyboard button');

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            const buttonText = button.textContent;

            if (button.classList.contains('backspace')) {

                inputField.value = inputField.value.slice(0, -1);

            } else if (button.classList.contains('space')) {

                inputField.value += ' ';

            } else {

                inputField.value += buttonText;

            }

        });

    });

});