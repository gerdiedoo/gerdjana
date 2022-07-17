const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const things_i_made = document.querySelector('#things_i_made')
const about_content = document.querySelector('#about_content')
const contact_content = document.querySelector('#contact_content')
const things_i_made_content = document.querySelector('#things_i_made_content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '300px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: about_content,
    onfocus: function () {
      this.setBackground('#1c1c24')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '300px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contact_content,
    onfocus: function () {
      this.setBackground('#1c1c24')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

things_i_made.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Things I Made',
    // modal: true,
    width: '300px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: things_i_made_content,
    onfocus: function () {
      this.setBackground('#1c1c24')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
