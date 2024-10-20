const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
    'Anywhere But Here', 'An Old Dog'
];

// Function to strip unwanted words
function strip(article) {
    return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring the words 'a', 'an', and 'the'
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Get the 'band' ul element
const ul = document.getElementById('bands');

// Append each sorted band as an li element
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
