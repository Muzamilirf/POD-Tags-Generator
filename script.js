
document.getElementById('splitButton').addEventListener('click', function () {
    const inputSentence = document.getElementById('inputSentence').value;
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (inputSentence.trim() !== '') {
        const words = splitSentence(inputSentence);
        words.forEach(word => {
            const wordElement = document.createElement('span');
            wordElement.textContent = word;
            output.appendChild(wordElement);
        });

        // Show the 'Copy Tags' button
        document.getElementById('copyButton').style.display = 'inline-block';
    }
});

document.getElementById('copyButton').addEventListener('click', function () {
    const output = document.getElementById('output');
    const tags = Array.from(output.children).map(el => el.textContent).join(', ');
    copyTags(tags);
});

function copyTags(tags) {
    const textarea = document.createElement('textarea');
    textarea.textContent = tags;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Display the "Tags copied successfully" message
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.textContent = 'Tags copied successfully!';
    copyMessage.style.display = 'block';

    // Hide the message after 3 seconds
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 3000);
}

function splitSentence(sentence) {
    const stopwords = new Set(["a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]);

    // Remove punctuation and convert to lowercase
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();

    // Split the sentence into words
    const words = sentence.split(/\s+/);

    // Remove stop words
    const filteredWords = words.filter(word => !stopwords.has(word));

    // Remove duplicate words
    const uniqueWords = Array.from(new Set(filteredWords));

    return uniqueWords;
}
















