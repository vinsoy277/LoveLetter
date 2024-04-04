document.getElementById('messageState').addEventListener('change', function (event) {
    var message = document.querySelector('.message');
    var heart = document.querySelector('.heart');
    var container = document.querySelector('.container');

    message.classList.remove('openNor', 'closeNor');
    heart.classList.remove('closeHer', 'openedHer');
    
    if (event.target.checked) {
        message.classList.remove('closed', 'no-anim');
        message.classList.add('openNor');
        heart.classList.add('openHer');
        container.style.backgroundColor = '#f48fb1';
        console.log('Opening');
    } else {
        message.classList.remove('no-anim');
        message.classList.add('closeNor');
        heart.classList.add('closeHer');
        container.style.backgroundColor = '#fce4ec';
        console.log('Closing');
    }
});

document.querySelector('.message').addEventListener('animationend', function (event) {
    console.log('Animation End');
    var message = document.querySelector('.message');
    
    if (message.classList.contains('closeNor')) {
        message.classList.add('closed');
    }
    
    message.classList.remove('openNor', 'closeNor');
    message.classList.add('no-anim');
});

document.querySelector('.heart').addEventListener('animationend', function (event) {
    console.log('Animation End');
    var heart = document.querySelector('.heart');
    
    if (!heart.classList.contains('closeHer')) {
        heart.classList.add('openedHer', 'beating');
    } else {
        heart.classList.add('no-anim');
        heart.classList.remove('beating');
    }
    
    heart.classList.remove('openHer', 'closeHer');
});
