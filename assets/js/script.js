$(function () {
  $("#price-slider-range").slider({
    range: true,
    min: 0,
    max: 6000,
    values: [1250, 5000],
    slide: function (event, ui) {
      $("#price-from-amount").val(ui.values[0]);
      $("#price-to-amount").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#price-slider-range2").slider({
    range: true,
    min: 0,
    max: 6000,
    values: [1250, 5000],
    slide: function (event, ui) {
      $("#price-from-amount2").val(ui.values[0]);
      $("#price-to-amount2").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#outside-slider-range").slider({
    range: true,
    min: 0,
    max: 1100,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#outside-from-amount").val(ui.values[0]);
      $("#outside-to-amount").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#outside-slider-range2").slider({
    range: true,
    min: 0,
    max: 1100,
    values: [0, 1000],
    slide: function (event, ui) {
      $("#outside-from-amount2").val(ui.values[0]);
      $("#outside-to-amount2").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#inside-slider-range").slider({
    range: true,
    min: 0,
    max: 250,
    values: [0, 230],
    slide: function (event, ui) {
      $("#inside-from-amount").val(ui.values[0]);
      $("#inside-to-amount").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#inside-slider-range2").slider({
    range: true,
    min: 0,
    max: 250,
    values: [0, 230],
    slide: function (event, ui) {
      $("#inside-from-amount2").val(ui.values[0]);
      $("#inside-to-amount2").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#width-slider-range").slider({
    range: true,
    min: 0,
    max: 3200,
    values: [0, 3000],
    slide: function (event, ui) {
      $("#width-from-amount").val(ui.values[0]);
      $("#width-to-amount").val(ui.values[1]);
    }
  });
});

$(function () {
  $("#width-slider-range2").slider({
    range: true,
    min: 0,
    max: 3200,
    values: [0, 3000],
    slide: function (event, ui) {
      $("#width-from-amount2").val(ui.values[0]);
      $("#width-to-amount2").val(ui.values[1]);
    }
  });
});

function toggleDropdown(e) {
  e.querySelector(".dropdown__arrow").classList.toggle("dropdown__opened-arrow")
  e.parentElement.querySelector(".dropdown__content").classList.toggle("dropdown__open")
}

function openMenu() {
  let wrapper = document.querySelector(".popup__menu")
  let container = document.querySelector(".menu__container")
  wrapper.style.display = "flex"
  setTimeout(() => {
    wrapper.style.opacity = "1"
    container.style.transform = "translateX(0)"
  }, 10)
  wrapper.onclick = (e) => {
    if (e.target.className === "popup__menu flex-center") {
      closeMenu()
    }
  }
  document.body.style.overflow = "hidden"
}

function closeMenu() {
  let wrapper = document.querySelector(".popup__menu")
  let container = document.querySelector(".menu__container")
  container.style.transform = "translateX(100%)"
  wrapper.style.opacity = "0"
  setTimeout(() => {
    wrapper.style.display = "none"
  }, 300)
  document.body.style.overflow = "auto"
}

function openFilter() {
  let wrapper = document.querySelector(".main__filter-popup-wrapper")
  let container = document.querySelector(".main__filter-wrapper-mobile")
  wrapper.style.display = "flex"
  setTimeout(() => {
    wrapper.style.opacity = "1"
    container.style.transform = "translateY(0)"
  }, 10)
  wrapper.onclick = (e) => {
    if (e.target.className === "main__filter-popup-wrapper flex-center") {
      closeFilter()
    }
  }
  document.body.style.overflow = "hidden"
}

function closeFilter() {
  let wrapper = document.querySelector(".main__filter-popup-wrapper")
  let container = document.querySelector(".main__filter-wrapper-mobile")
  container.style.transform = "translateY(-100%)"
  wrapper.style.opacity = "0"
  setTimeout(() => {
    wrapper.style.display = "none"
  }, 300)
  document.body.style.overflow = "auto"
}