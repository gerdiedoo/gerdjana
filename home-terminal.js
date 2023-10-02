var app_wm =  document.getElementById('app_welcome_message')
var typewriter_wm =  new Typewriter(app_wm,{
  loop: false,
  autoStart: true,
  delay: 50,
  cursor: '|',
  strings: []
});
typewriter_wm
  .typeString('HI...')

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
  loop: false,
  autoStart: true,
  delay: 50,
  cursor: '|',
  strings: []
});
typewriter
  .pauseFor(100)
  .typeString('./intro_typewriter')
  .typeString('<br />') 
  .pauseFor(500)
  .typeString('<br />') 
  .typeString('hi, In')
  .pauseFor(500)
  .deleteChars(2)
  .pauseFor(500)
  .typeString('Im Gerd Jana <br />')
  .pauseFor(500)
  .typeString('A computer science graduate<br />')
  .pauseFor(500)
  .typeString('Check me out on: <br />')
  .typeString('<br />')
  .pauseFor(500)
  .typeString('<a href="https://www.youtube.com/channel/UC72iZhxJaBlkwdOrWXflC8Q">youtube</a> <br />')
  .typeString('<a href="https://twitter.com/gerdjana">twitter</a> <br />')
  .typeString('<a href="https://www.instagram.com/gerdiedoo/">instagram</a> <br />')
  .typeString('<a href="https://github.com/gerdiedoo">github</a>')
  .pauseFor(1000)
