export function validateInput(searchInput, value) {
    let result = true;

    removeError(searchInput);

    if (value.trim().length < searchInput.dataset.minLength) {
        removeError(searchInput);
        createError(
            searchInput, 'Длина ввода должна быть не менее 3-х символов!'
        );
        result = false;
    }

    if (value === '' || value.trim() === '') {
        removeError(searchInput);
        createError(searchInput, 'Поле должно быть заполнено!');
        result = false;
    }

    return result;
}

function createError(element, message) {
    const form = element.closest('.search-form');
    const errorLabel = document.createElement('label');

    errorLabel.className = 'error-label';
    errorLabel.textContent = message;

    form.classList.toggle('search-form_error')
    form.append(errorLabel);
}

export function removeError(element) {
    const form = element.closest('.search-form');
    const sendButton = document.querySelector('.button_search');
    console.log(sendButton);

    if (form.classList.contains('search-form_error')) {
        sendButton.disabled = false;
        form.querySelector('.error-label').remove();
        form.classList.toggle('search-form_error');
    }
}