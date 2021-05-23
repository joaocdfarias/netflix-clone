const header = document.querySelector('header')

function scrollBackgroundChanger() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
}

document.addEventListener('scroll', scrollBackgroundChanger)
