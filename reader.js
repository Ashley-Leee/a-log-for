async function loadReader() {

    const params = new URLSearchParams(window.location.search);

    const workIndex = Number(params.get("work"));

    const library = await fetch("library.json").then(r => r.json());

    const work = library.works[workIndex];

    if (!work) {

        document.getElementById("content").innerHTML = "<h2>作品不存在</h2>";

        return;

    }

    document.title = work.title;

    const md = await fetch(work.file).then(r => r.text());

    const html = marked.parse(md);

    let nav = `<div class="reader-nav">`;

    // 上一篇
    if (workIndex > 0) {

        nav += `
        <a class="button" href="reader.html?work=${workIndex - 1}">
            ← Previous
        </a>
        `;

    }

    // 返回 Works
    nav += `
    <a class="button" href="works.html">
        Works
    </a>
    `;

    // 返回首页
    nav += `
    <a class="button" href="index.html">
        Home
    </a>
    `;

    // 下一篇
    if (workIndex < library.works.length - 1) {

        nav += `
        <a class="button" href="reader.html?work=${workIndex + 1}">
            Next →
        </a>
        `;

    }

    nav += `</div>`;

    document.getElementById("content").innerHTML = `
        <h1 class="reader-title">${work.title}</h1>
        <hr>
        ${html}
        ${nav}
`;

}

loadReader();