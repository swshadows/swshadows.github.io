let data;

fetch("./json/links.json")
  .then((DATA_JSON) => DATA_JSON.json())
  .then((DATA_JSON) => {
    data = DATA_JSON;
    structure(data);
  });

function structure(obj) {
  let navlinks;
  for (i in obj) {
    if (obj[i].type == "dev") {
      navlinks = document.getElementById("links-dev");
    } else if (obj[i].type == "game") {
      navlinks = document.getElementById("links-game");
    } else if (obj[i].type == "media") {
      navlinks = document.getElementById("links-media");
    } else {
      navlinks = document.getElementById("links-social");
    }

    navlinks.innerHTML += `<a onmouseenter="mouseIn(this)" onmouseleave="mouseOut(this)" class="nav-a" target="_blank" href="${obj[i].url}">
    <img class="nav-icon" src="${obj[i].icon}">
    <span class="nav-tooltip">${obj[i].tooltip}</span>
    <span class="nav-tooltip-extra">${obj[i].description}</span>
    </a>`;
  }
}

function mouseIn(arg) {
  arg.dataset.icon = arg.children[0].src;
  arg.children[0].src = "assets/icons/external_link.svg";
  arg.children[2].style.display = "block";
}
function mouseOut(arg) {
  arg.children[0].src = arg.dataset.icon;
  arg.dataset.icon = undefined;
  arg.children[2].style.display = "none";
}
