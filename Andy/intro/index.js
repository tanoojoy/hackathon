const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

const player = new Player({
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
      idleRight: {
        frameRate: 11,
        frameBuffer: 2,
        loop: true,
        imageSrc: './img/king/idle.png',
      },
      idleLeft: {
        frameRate: 11,
        frameBuffer: 2,
        loop: true,
        imageSrc: './img/king/idleLeft.png',
      },
      runRight: {
        frameRate: 8,
        frameBuffer: 4,
        loop: true,
        imageSrc: './img/king/runRight.png',
      },
      runLeft: {
        frameRate: 8,
        frameBuffer: 4,
        loop: true,
        imageSrc: './img/king/runLeft.png',
      },
      enterDoor: {
        frameRate: 8,
        frameBuffer: 4,
        loop: false,
        imageSrc: './img/king/enterDoor.png',
        onComplete: () => {
          console.log('completed animation')
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              level++
  
              if (level === 4) level = 1
              levels[level].init()
              player.switchSprite('idleRight')
              player.preventInput = false
              gsap.to(overlay, {
                opacity: 0,
              })
            },
          })
        },
      },
    },
  })



function animate() {
    window.requestAnimationFrame(animate)
}
animate()