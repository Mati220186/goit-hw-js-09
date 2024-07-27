document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  const STORAGE_KEY = 'feedback-form-state';

  const saveToLocalStorage = () => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email || '';
      messageInput.value = message || '';
    }
  };

  form.addEventListener('input', saveToLocalStorage);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  });

  loadFromLocalStorage();
});
