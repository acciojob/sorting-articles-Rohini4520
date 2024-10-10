const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to sort bands
function sortBands(bands) {
    return bands.sort((a, b) => {
        const normalize = (str) => str.replace(/^(a|an|the)\s+/i, '').toLowerCase();
        return normalize(a).localeCompare(normalize(b));
    });
}

// Get sorted bands
const sortedBands = sortBands(bands);

// Display sorted bands in the unordered list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
