const openBtns = document.querySelectorAll('[data-popup]');
const overlays = document.querySelectorAll('.overlay');
const closeBtns = document.querySelectorAll('.close-btn');

console.log('Close buttons found:', closeBtns.length);

//Open popup
openBtns.forEach(button => {
  button.addEventListener('click', () => {
    const popupId = button.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    
    // Set all overlays to lower z-index
    overlays.forEach(o => o.style.zIndex = '100');
    
    // Set current popup to highest z-index
    popup.style.zIndex = '1000';
    popup.classList.add('active');
  });
});

//Close popup
closeBtns.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    console.log('Close button clicked:', index);
    console.log('Button element:', button);
    const overlay = button.closest('.overlay');
    console.log('Found overlay:', overlay);
    console.log('Overlay ID:', overlay ? overlay.id : 'NOT FOUND');
    console.log('Classes before remove:', overlay.classList);
    overlay.classList.remove('active');
    console.log('Classes after remove:', overlay.classList);
  });
});