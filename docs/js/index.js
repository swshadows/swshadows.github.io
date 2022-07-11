import { fetchJSON } from "./fetchs.js";

fetchJSON("social-links").then((res) => formatSocials(res));
fetchJSON("techstack").then((res) => formatTechstack(res));
fetchJSON("projects").then((res) => formatProjects(res));

function formatSocials(res) {
  const socialLinks = document.querySelector(".social-links");
  res.forEach((e) => {
    socialLinks.innerHTML += `
        <a target="_blank" href="${e.link}">
          <div class="image-wrapper">
            <img src="assets/social_icons/${e.img_src}.png" alt="${e.name} icon" />
          </div>
        </a>
        `;
  });
}

function formatTechstack(res) {
  let shieldArea = document.querySelector(".techstack__shields-1");
  let count = 1;
  res.forEach((e) => {
    if (e.tag) {
      count++;
      shieldArea = document.querySelector(`.techstack__shields-${count}`);
    } else {
      shieldArea.innerHTML += `
      <div class="shield-wrapper">
        <img src="https://img.shields.io/badge/-${e.name}-informational?style=for-the-badge&color=1e1d20&logo=${e.icon}&logoColor=${e.icon_color}">
      </div
      `;
    }
  });
}

function formatProjects(res) {
  let projectArea = document.querySelector(".projects__grid");
  res.forEach((e) => {
    e.extraClasses = e.extraClasses ? e.extraClasses : "";
    projectArea.innerHTML += `
    <div class="card${e.extraClasses}">
      <img class="project-banner" src="assets/banners/${e.img_src}.png" alt="" />
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <a target="_blank" href="${e.link}">
          <div class="image-wrapper">
            <img class="link-icon" src="assets/social_icons/${e.link_icon}.png" />
          </div>
        </a>
    </div>
    `;
  });
}
