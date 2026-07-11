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