import { fromBase64 } from 'js-base64'

import './assets/styles/app.css'

function initBeian () {
  let beian = import.meta.env.VITE_BEIAN
  if (beian.substring(0, 7) === 'base64:') {
    beian = fromBase64(beian.substring(7))
  }

  if (beian) {
    document.querySelectorAll('[data-beian]').forEach((ele) => {
      const a = document.createElement('a')
      a.href = 'https://beian.miit.gov.cn'
      a.target = '_blank'
      a.rel = 'noreferrer'
      a.innerText = beian

      ele.innerHTML = ''
      ele.appendChild(a)
    })
  }
}

function initDate () {
  const date = new Date()

  const year = date.getFullYear()

  document.querySelectorAll('[data-year]').forEach((ele) => {
    ele.innerText = year
  })
}

function initParticles () {
  window.particlesJS('particles', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#94a3b8' // slate-400
      },
      size: {
        value: 2.5,
        random: false
      },
      opacity: {
        value: 0.5,
        random: false
      },
      line_linked: {
        enable: true,
        distance: 125,
        color: '#94a3b8', // slate-400
        opacity: 0.5,
        width: 0.5
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        out_mode: 'out',
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        }
      }
    },
    retina_detect: true
  })
}

(function () {
  initBeian()
  initDate()
  initParticles()
})()
