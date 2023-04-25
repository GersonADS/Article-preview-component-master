const $Share_click = document.querySelector("#Share_click");

const $Display_Text = document.querySelector("#display-text");

const $Image_set = document.querySelector("#image-seta");

const $Share_js = document.querySelector("#share_js");

let checkClick = false;

console.log(`window.inner width ${window.innerWidth}`);

$Share_click.addEventListener("click", () => {

  if (window.innerWidth >= 1001) {
    if (!checkClick) {

      $Image_set.style.filter = "brightness(1000%)";

      $Share_click.style.backgroundColor = "var(--VD-grayish-blue)";

      $Display_Text.style.display = "flex";

    } else {

      $Image_set.style.filter = "brightness(100%)";

      $Share_click.style.backgroundColor = "";

      $Display_Text.style.display = "none";

    }

    checkClick === true ? (checkClick = false) : (checkClick = true);

  } else {

    if (!checkClick) {

      $Display_Text.style.display = "flex";
      $Share_click.style.backgroundColor = "var( --D-dark-blue)";
      $Share_js.style.backgroundColor = "var(--VD-grayish-blue)";

      $Image_set.style.filter = "brightness(1000%)";

    } else {

      $Display_Text.style.display = "none";
      $Share_click.style.backgroundColor = "var(--L-grayish-blue)";
      $Share_js.style.backgroundColor = "";


      $Image_set.style.filter = "brightness(100%)";
    }

    checkClick === true ? (checkClick = false) : (checkClick = true);

  }
});
