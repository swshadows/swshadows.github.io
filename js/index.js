const navlinks = document.getElementById("nav-links");
const sidelinks = document.getElementById("sidebar-links");
let sideStatus = 0;
const sideTimer = 10;
const mainul = document.getElementById("main-ul");

fetch("./json/footer-links.json")
  .then((DATA_JSON) => DATA_JSON.json())
  .then((DATA_JSON) => {
    for (i in DATA_JSON) {
      navlinks.innerHTML += `<a onmouseenter="showTooltip(this)" onmouseleave="hideTooltip(this)" class="nav-a" target="_blank" href="${DATA_JSON[i].url}">
      <img class="nav-icon" src="${DATA_JSON[i].icon}">
      <span class="nav-tooltip">${DATA_JSON[i].tooltip}</span>
      </a>`;
    }
  });

fetch("./json/sidebar-links.json")
  .then((DATA_JSON) => DATA_JSON.json())
  .then((DATA_JSON) => {
    for (i in DATA_JSON) {
      if (DATA_JSON[i].text) {
        sidelinks.innerHTML += `<p class="sidebar-desc">${DATA_JSON[i].text}</p>`;
      } else {
        sidelinks.innerHTML += `<a onmouseenter="enterSideTip(this)" onmouseleave="leaveSideTip(this)" target="_blank" href="${DATA_JSON[i].url}">
      <span class="sidebar-a-icon">${DATA_JSON[i].icon}</span>&nbsp;
      <span class="sidebar-a-text">${DATA_JSON[i].name}</span>
      <small class="sidebar-a-tooltip">${DATA_JSON[i].description}</small>
      </a>`;
      }
    }
  });

fetch("./json/text.json")
  .then((DATA_JSON) => DATA_JSON.json())
  .then((DATA_JSON) => {
    for (i in DATA_JSON) {
      mainul.innerHTML += `<li class="li-content">
      <span class="li-num">${i}</span>
      ${DATA_JSON[i].text}
      </li`;
    }
    const lis = document.getElementsByClassName("li-content");
    let counter = 0;
    let interval = setInterval(() => {
      lis[counter].classList.add("flashing");
      counter++;
      if (lis[counter] == undefined) clearInterval(interval);
    }, 100);
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
