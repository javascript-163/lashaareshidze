// დავალება 1



function parseFile() {
    let fileInput = document.getElementById('fileInput');
    let outputDiv = document.getElementById('output');

    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
        let text = event.target.result;
        let totalCharacters = text.length;
        let words = text.split(/\s+/).filter(word => word !== '');
        let totalWords = words.length;
        let longestWord = words.reduce((a, b) => a.length >= b.length ? a : b, '');
        let shortestWord = words.reduce((a, b) => a.length <= b.length ? a : b, '');
        let totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
        let averageWordLength = totalWordLength / totalWords;

        outputDiv.innerHTML = `
            <p>Total symbols: ${totalCharacters}</p>
            <p>Total words: ${totalWords}</p>
            <p>Longest Word: ${longestWord}</p>
            <p>Shortest Word: ${shortestWord}</p>
            <p>Average word length: ${averageWordLength}</p>
        `;
    };

    reader.readAsText(file);
}



function displayImage() {
    let selectElement = document.getElementById('imageSelect');
    let imageContainer = document.getElementById('imageContainer');
    let selectedValue = selectElement.value;

    if (selectedValue) {
        let imageElement = document.createElement('img');
        imageElement.src = selectedValue;
        imageElement.style.maxWidth = '100%';
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    } else {
        imageContainer.innerHTML = '';
    }
}


// დავალება 2


document.getElementById('image-selector').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = e.target.result;
    }

    reader.readAsDataURL(file);
});




// დავალება 3



document.getElementById('file-upload').addEventListener('change', function(event) {
    const files = event.target.files;

    const filePreviews = document.getElementById('file-previews');
    filePreviews.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = file.type.split('/')[0];

        const filePreview = document.createElement('div');
        filePreview.classList.add('file-preview');

        if (fileType === 'image') {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = file.name;
            img.style.maxWidth = '300px';
            filePreview.appendChild(img);
        } else if (fileType === 'video') {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.autoplay = false;
            filePreview.appendChild(video);
        } else if (fileType === 'text') {
            const p = document.createElement('p');
            p.textContent = `File Name: ${file.name}`;
            filePreview.appendChild(p);
        }

        filePreviews.appendChild(filePreview);
    }
});