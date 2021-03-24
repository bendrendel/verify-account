const inputs = document.querySelectorAll('input');

inputs.forEach((input, idx) => {
    input.addEventListener('beforeinput', e => {
        if (e.target.value !== '') {
            e.target.value = '';
        }
    });

    input.addEventListener('input', e => {
        if (e.target.value !== '' && idx < inputs.length - 1) {
            inputs[idx + 1].focus();
        }
    });

    input.addEventListener('keydown', e => {
        if (e.target.value === '' && e.key === 'Backspace' && idx > 0) {
            e.preventDefault();
            inputs[idx - 1].focus();
        }
    });
})