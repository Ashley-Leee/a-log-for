const content = document.getElementById("content");

async function loadWorks() {

    const response = await fetch("library.json");
    const library = await response.json();

    let html = `<div class="work-list">`;

    library.works.forEach((work, index) => {

        html += `
        <div class="work-item">

            <a class="work-link" href="reader.html?work=${index}">

                <div class="work-title">
                    ${work.title}
                </div>

                <div class="work-description">
                    ${work.description}
                </div>

            </a>

        </div>
        `;

    });

    html += "</div>";

    content.innerHTML = html;

}

loadWorks();

const video = document.getElementById("home-video");

if (video) {

    const randomVideo = Math.random() < 0.75
        ? "images/mov3.mp4"
        : "images/mov4.mp4";

    video.querySelector("source").src = randomVideo;

    video.load();

}