import { Callout } from 'globekit-public'
import './detailCallout.css'
import UK from '@/assets/img/flags/uk.png'
import AU from '@/assets/img/flags/au.png'
import CN from '@/assets/img/flags/cn.png'
import CW from '@/assets/img/flags/cw.png'
import LB from '@/assets/img/flags/lb.png'
import PE from '@/assets/img/flags/pe.png'
import TH from '@/assets/img/flags/th.png'
import US from '@/assets/img/flags/us.png'

const Flags = {
  UK,
  AU,
  CN,
  CW,
  LB,
  PE,
  TH,
  US
}

/**
 * This is the definition of the callout that appears over the selected airport
 */
class DetailCallout extends Callout {
  createElement () {
    // Here is the html element that will be attached to the coord
    const div = document.createElement('div')
    div.className = 'detail-callout'
    div.innerHTML = `<div class="callout-container">
      <h3 class="callout-container__title">
        <img src="${Flags[this.definition.data.flag]}" alt="${this.definition.data.flag}" />
        ${this.definition.data.name}
      </h3>
      <div class="callout-container__desc">${this.definition.data.desc}</div>
    </div>`
    return div
  }

  // This function sets offsets for the htmlElement from the lat/lon coord
  setPosition (position) {
    const nx = position.screen.x - this.element.offsetWidth
    const ny = position.screen.y - 180
    this.element.style.transform = `translate(${nx.toFixed(1)}px, ${ny.toFixed(0)}px)`
    if (position.world.similarityToCameraVector < 0.3) {
      this.element.style.display = 'none'
    }
  }
}

export { DetailCallout }
