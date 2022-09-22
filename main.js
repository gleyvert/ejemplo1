const app=document.getElementById('typewriter');

const typewriter= new Typewriter(app, {
    loop:true,
    delay:75
});

typewriter
    .typeString('la capital del son')
    .pauseFor(200)
    .start();