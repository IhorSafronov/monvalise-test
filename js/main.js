/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll(".widget");

// Находим все виджеты на странице
widgets.forEach(function (widget) {
  // Слушаем клик внутри виджета
  widget.addEventListener("click", function (e) {
    // Если клик по заголовку - тогда скрываем/показывае тело виджета
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

// Поиск ползунка по id
const rangeSlider = document.getElementById("range-slider");

// Проверка налачия ползунка в коде
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
      min: [500],
      max: [999999],
    },
  });

  //   Привязываем циферки
  //   Находим инпуты по id
  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  //   Событие
  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

$(".filter-btn").on("click", function () {
  $(".sidebar").toggleClass("open");
});
