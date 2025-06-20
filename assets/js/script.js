// element observer

const observer = new IntersectionObserver(entries => {
    // loop the entries data
    entries.forEach(entry => {
        const squareEl = entry.target.querySelector('.square');

        if (entry.isIntersecting) {
            // adding the animation
            squareEl.classList.add("square-animation");
            return;
        }

        // remove animation if not intersecting
        squareEl.classList.remove('square-animation');
    })
});


// tracked element
observer.observe(document.querySelector('.wrapper'));
