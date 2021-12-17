var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  autoStart: true,
  delay: 500,
  cursor: '█',
  strings: []
});
typewriter
  .deleteAll(1)
  .typeString('hi, In')
  .pauseFor(500)
  .deleteChars(2)
  .pauseFor(500)
  .typeString('Im Gerd Jana <br />')
  .pauseFor(500)
  .typeString('A computer science student<br />')
  .pauseFor(500)
  .typeString('Check me out on <br />')
  .typeString('<br />')
  .typeString('<a href="https://www.youtube.com/channel/UC72iZhxJaBlkwdOrWXflC8Q">youtube</a> <br />')
  .typeString('<a href="https://twitter.com/gerdjana">twitter</a> <br />')
  .typeString('<a href="https://www.instagram.com/gerdiedoo/">instagram</a> <br />')
  .typeString('<a href="C:\\Users\\gerd1\\port\\playground\\templates\\work-in-progress.html">blog</a> <br />')
  .typeString('<a href="C:\\Users\\gerd1\\port\\playground\\templates\\work-in-progress.html">works</a> <br />')
  .pauseFor(1000)
