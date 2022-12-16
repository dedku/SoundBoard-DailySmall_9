import './style.css'

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'] as string[]

sounds.forEach(sound => {
  const btn = document.createElement('button') as HTMLButtonElement
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()

    // @ts-ignore
    document.getElementById(sound).play()
  })
  // @ts-ignore
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound) as HTMLAudioElement

    song.pause()
    song.currentTime = 0;
  })
}