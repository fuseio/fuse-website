import { Callout } from 'globekit-public'
import './pinCallout.css'

class PinCallout extends Callout {
  createElement () {
    // Here is the html element that will be attached to the coord
    const div = document.createElement('div')
    div.id = `pin-${this.definition.data.flag}`
    div.className = 'pin-callout'
    div.innerHTML = `<div class="callout-container">
       <div class="pin-spinner"></div>
       <svg class="connecting-line" height="104" width="104"  >
        <path d="M  4 8 q 2 80 100 96" stroke="white" stroke-width="2" fill="none" />
        <circle id="pointA" cx="4" cy="8" fill="white" r="3" />
      </svg></div>`

    this.onClick = this.onClick.bind(this)
    div.addEventListener('click', this.onClick)

    return div
  }

  // This function sets offsets for the htmlElement from the lat/lon coord
  setPosition (position) {
    const nx = position.screen.x - 7
    const ny = position.screen.y - 14
    this.element.style.transform = `translate(${nx.toFixed(2)}px, ${ny.toFixed(2)}px)`
    this.element.style.zIndex = Math.round(10000 * position.screen.y)

    if (position.world.similarityToCameraVector < 0.3) {
      this.element.classList.add('hidden')
      if (this.element.querySelector('.connecting-line')) {
        this.element.querySelector('.connecting-line').style.display = 'none'
      }
      if (this.element.querySelector('.pin-spinner')) {
        this.element.querySelector('.pin-spinner').style.display = 'none'
      }
    } else {
      this.element.classList.remove('hidden')
    }
  }

  onClick () {
    this.element.dispatchEvent(new CustomEvent('pinclick', { bubbles: true, detail: this.definition }))
  }
}

export { PinCallout }
