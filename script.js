const inputs = document.querySelectorAll('input');
const validValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];

inputs[0].focus();

inputs.forEach((input, idx) => {
    input.addEventListener('keydown', e => {
        if (!validValues.includes(e.key)) {
            e.preventDefault();
        } else if (e.target.value !== '') {
            e.target.value = '';
        } else if (e.key === 'Backspace' && idx > 0) {
            inputs[idx - 1].focus();
        }
    });

    input.addEventListener('input', e => {
        if (e.target.value !== '' && idx < inputs.length - 1) {
            inputs[idx + 1].focus();
        }
    });
})