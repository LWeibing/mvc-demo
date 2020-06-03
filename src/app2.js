import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tarContent = $("#app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("active").siblings().removeClass("active");
  const index = $li.index();
  $tarContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
