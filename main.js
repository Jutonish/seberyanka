import './assets/style/normalize.css'
import './assets/style/style.sass'

function hamDropdown() {
  document.querySelector(".dropdown__noidung").classList.toggle("hienThi");
}
document.getElementById('btn').onclick = hamDropdown;

function profileDropdown() {
  document.querySelector(".profile__dropdown-noidung").classList.toggle("block");
}
document.getElementById('profileBtn').onclick = profileDropdown;

