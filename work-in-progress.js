var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  autoStart: true,
  cursor: '█',
  strings: []
});
typewriter
  .deleteAll(1)

  .pauseFor(1000)