const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

document.getElementById('dice').addEventListener('click', () => {
    document.querySelector('#dice img').src = `img/${getRandomIntNumberInRange(1, 6)}.png`;
});