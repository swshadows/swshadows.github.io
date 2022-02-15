const navlinks = document.getElementById("nav-links");
let sideStatus = 0;
const sideTimer = 10;
const mainul = document.getElementById("main-ul");
let bg = 0;

fetch("./json/index.json")
  .then((DATA_JSON) => DATA_JSON.json())
  .then((DATA_JSON) => {
    for (i in DATA_JSON) {
      mainul.innerHTML += `<li class="li-content">
      <span class="li-num">${i}</span> ${DATA_JSON[i].text}
      </li`;
    }
    const lis = document.getElementsByClassName("li-content");
    let counter = 0;
    let interval = setInterval(() => {
      lis[counter].classList.add("flashing");
      counter++;
      if (lis[counter] == undefined) clearInterval(interval);
    }, 50);
  });

function showTooltip(arg) {
  arg.children[1].classList.toggle("tooltip-show");
}

function hideTooltip(arg) {
  arg.children[1].classList.toggle("tooltip-hide");
  setTimeout(() => {
    arg.children[1].classList.toggle("tooltip-hide");
    arg.children[1].classList.toggle("tooltip-show");
  }, 280);
}

function toggleSidebar(arg) {
  arg.disabled = true;
  const sidebar = document.querySelector("aside");

  if (sideStatus == 0) {
    sideStatus++;
    sidebar.classList.toggle("aside-show");
    setTimeout(() => {
      sidebar.style.left = "0";
    }, 290);
    arg.disabled = false;
  } else {
    sideStatus--;
    sidebar.classList.toggle("aside-show");
    sidebar.classList.toggle("aside-hide");
    setTimeout(() => {
      sidebar.classList.toggle("aside-hide");
      sidebar.style.left = "-500%";
    }, 290);
    arg.disabled = false;
  }
  arg.children[0].src = `assets/icons/sidebar-menu_${sideStatus}.svg`;
}

function enterSideTip(arg) {
  arg.children[2].classList.toggle("sidetip-show");
}

function leaveSideTip(arg) {
  arg.children[2].classList.toggle("sidetip-hide");
  setTimeout(() => {
    arg.children[2].classList.toggle("sidetip-hide");
    arg.children[2].classList.toggle("sidetip-show");
  }, 80);
}

function changeBG() {
  bg++;
  if (bg >= 6) bg = 0;
  document.documentElement.style.setProperty("--bg", `url("../assets/bg_${bg}.svg")`);
}

const headerName = document.getElementsByClassName("header-name")[0];
headerName.addEventListener("mouseenter", (e) => {
  e.target.innerHTML = `Ou também Joe`;
});
headerName.addEventListener("mouseleave", (e) => {
  e.target.innerHTML = `@swshadows`;
});
