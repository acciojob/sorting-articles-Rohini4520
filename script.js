//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
    'Anywhere But Here', 'An Old Dog'
];

// Function to strip the articles "a", "an", and "the" from the start of the string
function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array ignoring articles
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Get the unordered list by its id
const ul = document.getElementById('band');

// Populate the list dynamically
sortedBands.forEach(band => {
    const li = document.createElement('li'); // Create a list item
    li.textContent = band; // Set the text content to the band name
    ul.appendChild(li); // Add the list item to the unordered list
});