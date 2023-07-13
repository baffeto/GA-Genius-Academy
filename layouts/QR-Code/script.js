const wrapper = document.querySelector(".wrapper"),
      form = document.querySelector(".form"),
      input = document.querySelector(".form input"),
      btn = document.querySelector(".form button"),
      img = document.querySelector(".qr-code img")

let currentValueInput;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = input.value.trim() // Убираем нижние пробелы в начале и в конце
    if (!inputValue || inputValue === currentValueInput) return;
    currentValueInput = inputValue;

    btn.textContent = "Идет создание QR-кода..."
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`

    img.addEventListener('load', () => {
        wrapper.classList.add("active");
        btn.textContent = "Сгенерировать QR-код";
    })

    img.addEventListener('error', () => {
        alert("Ошибка при загрузке изображения QR-кода. Пожалуйста, попробуйте еще раз!");
        location.reload(); // Перезагрузка страницы
    })
})

input.addEventListener('input', function() {
    if(!this.value.trim() && wrapper.classList.contains("active")) {
        wrapper.classList.remove("active");
    }
})
