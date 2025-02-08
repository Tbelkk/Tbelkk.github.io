const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenTimeline = document.querySelectorAll('.timeline-item');
hiddenTimeline.forEach((el) => timelineObserver.observe(el));

const hiddenProject = document.querySelectorAll('.project-square');
hiddenProject.forEach((el) => projectObserver.observe(el));

const updateCursor = (event) => {
    const x = event.clientX + 'px';
    const y = event.clientY + 'px';

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--y', y);
  };

  document.body.addEventListener('pointermove', updateCursor);


