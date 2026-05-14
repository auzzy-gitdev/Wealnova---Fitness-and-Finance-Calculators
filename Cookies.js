document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    const banner = document.createElement("div");
    banner.innerHTML = 
      `<div style="position:fixed; bottom:0; width:100%; background:beige; color:black; padding:5px; margin: 0 auto; text-align:center; z-index:999; font-size: 1rem;">
        This site uses cookies to enhance functionality, analyze traffic, and offer personalized content. You can choose to accept or 
        decline. Read our <a href="Privacy.html">Privacy Policy</a> for more info.

        <p></p>
        <div style="display: inline-flex; gap: 2rem;">
          <button style="margin: 0 auto; font-size: 0.8rem; font-weight: normal; padding: 0.5rem;" id="accept-cookies">Allow</button>
          <button style="margin: 0 auto; font-size: 0.8rem; font-weight: normal; padding: 0.5rem;" id="deny-cookies">Deny</button>
        </div>
      </div>`
    ;
    document.body.appendChild(banner);
    document.getElementById("accept-cookies").onclick = function () {
      banner.remove();
      localStorage.setItem("cookiesAccepted", "true");
    };

    document.getElementById("deny-cookies").onclick = function () {
      banner.remove();
      localStorage.setItem("cookiesAccepted", "false");
    };
  }
});
