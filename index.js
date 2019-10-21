var fs = require('fs');

var md = fs.readFileSync('index.md', 'utf-8', (err, data)=>{
    if (err) throw err;
});

var showdown  = require('showdown'),
converter = new showdown.Converter(),
html      = converter.makeHtml(md);

const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CS208—Alt-Text</title>
    <link rel="stylesheet" href="https://use.typekit.net/abf2twd.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <nav></nav>
    ${html}
    <div id="citation-info">
        Presentation on Accessibility<br/>
        and Alt-text for CS 208<br/>
        October 21, 2019<br/>
        Patrick Steppan<br/>
    </div>
</body>
<script>
    let h1s = document.querySelectorAll('h1');
    let nav = document.querySelector('nav');
    let ol = document.createElement('ol');
    h1s.forEach((e) =>{
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = e.innerText;
        a.setAttribute('href', \`#\${e.id}\`)
        li.appendChild(a);
        ol.appendChild(li);
    })
    nav.appendChild(ol);
</script>
</html>`

fs.writeFileSync("index.html", content)
