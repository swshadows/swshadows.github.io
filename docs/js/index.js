import { fetchJSON } from "./fetchs.js";

fetchJSON("social-links").then((res) => formatSocials(res));

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
