const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const leftButton = document.querySelector('.left .btn');
const rightButton = document.querySelector('.right .btn');


left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));


// apply animation to the page before navigating to the new one
leftButton.addEventListener('click', (e) => {
    left.classList.add('fully-open');
    right.classList.add('closed');

    setTimeout(() => {
        left.classList.add('loader');
    }, 1000);

});

// split the timeouts into a single function for efficiency

rightButton.addEventListener('click', (e) => {
    right.classList.add('fully-open');
    left.classList.add('closed');

    setTimeout(() => {
        right.classList.add('loader');
    }, 1000);

});
