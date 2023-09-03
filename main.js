document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяет действие по умолчанию (отправку формы)
  
    // Получаем данные из формы
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Здесь можно добавить код для валидации данных
  
    // Отправляем данные на сервер или обрабатываем как вам нужно
    console.log(data);
  
    // Очищаем форму после отправки
    event.target.reset();
  });
  