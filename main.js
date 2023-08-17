document.getElementById('editor').addEventListener('input', function(e) {
    const markdown = e.target.value;
    document.getElementById('preview').innerHTML = marked(markdown);
});