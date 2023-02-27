const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  }

  event.currentTarget.reset();
});
