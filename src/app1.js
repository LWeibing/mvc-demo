import "./app1.css";
import $ from "jquery";

const $number = $("#number");
const $add = $("#add");
const $sub = $("#sub");
const $mul = $("#mul");
const $div = $("#div");

let n = localStorage.getItem("n");
$number.text(n || 100);
$add.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$sub.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$mul.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
$div.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
