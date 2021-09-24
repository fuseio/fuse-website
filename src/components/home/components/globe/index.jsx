import React, { useRef, useEffect } from 'react'
import { GlobeKitView, PointGlobe, Background, Atmosphere, CalloutManager, CalloutDefinition } from 'globekit-public'

import { PinCallout } from './pinCallout.js'
import { DetailCallout } from './detailCallout'

import placesData from './data.json'

function Globe () {
  const globeRef = useRef(null)
  const calloutManagerRef = useRef(null)
  const calloutDisplayTimeout = 10000
  const calloutDisplayInterval = 2000
  let selectedDetailDef = null

  useEffect(() => {
    async function fetchMyAPI () {
      const gkview = new GlobeKitView(globeRef.current, {
        apiKey: 'gk_fbb5b82000622ec2c4746c659bc539983d5789c38e0d7af617379e6b40dac27c308c27a2ec09fcb087ed5b968e0b3727b44f28b13dfbe2c550649de4025d0161',
        wasmPath: 'https://fuselogo.s3.eu-central-1.amazonaws.com/gkweb_bg.wasm',
        attributes: {
          // alpha: false,
          // attributes: {
          //   alpha: true,
          // },
          // clearColor: [10, 5, 0.0, 0.0]
        }
      })

      // **********************************************************************
      //                   CALLOUTMANAGER
      // **********************************************************************
      // Callout manager moves callouts to keep them attached to their points
      const calloutManager = new CalloutManager(calloutManagerRef.current)

      gkview.registerCalloutManager(calloutManager)

      // This gets called when the calloutManager removes a callout, i.e. when it rotates behind the globe.
      calloutManager.shouldAutoRemoveCallout = (def) => {
        return false
      }

      // **********************************************************************
      //                   BACKGROUNDS
      // **********************************************************************
      const background = new Background('images/bg.png')
      gkview.addDrawable(background)

      // **********************************************************************
      //                   ATMOSPHERES
      // **********************************************************************
      const atmosphere = new Atmosphere({
        texture: 'images/disk_1.png'
      })
      gkview.addDrawable(atmosphere)

      // **********************************************************************
      //                   POINTGLOBE
      // **********************************************************************
      const data = await fetch('https://fuselogo.s3.eu-central-1.amazonaws.com/pointglobe.bin').then(res => res.arrayBuffer())
      const pointglobeParams = {
        pointSize: 0.004,
        randomPointSizeVariance: 0.004,
        randomPointSizeRatio: 0.1,
        minPointAlpha: 0.0,
        minPointSize: 0.006,
        color: '#fae83e'
      }
      const pointglobe = new PointGlobe({ noise: 'images/clouds.png' }, data, pointglobeParams)
      pointglobe.setInteractive(true, true, false)
      gkview.addDrawable(pointglobe, () => {
        gkview.startDrawing()
      })

      // **********************************************************************
      //                   PINS
      // **********************************************************************
      let pinDefs = []
      pinDefs = placesData.features.map((el) => {
        const lat = el.geometry.coordinates[1]
        const lon = el.geometry.coordinates[0]
        return new CalloutDefinition(lat, lon, PinCallout, el.properties)
      })
      calloutManager.replaceCallouts(pinDefs)

      // **********************************************************************
      //                   ONUPDATE and ONTAP
      // **********************************************************************
      let pinCalloutElementActive = []
      let pinCalloutElementPrev = null
      let activeCallout = false
      let openTimeCallout = null
      let closeTimeCallout = null

      gkview.onUpdate = () => {
        const pinCalloutElementCurrent = [];
        [...calloutManagerRef.current.children].forEach((pinCalloutElement) => {
          if (pinCalloutElement.classList.contains('pin-callout') && !pinCalloutElement.classList.contains('hidden')) {
            pinCalloutElementCurrent.push(pinCalloutElement)
          }
        })
        pinCalloutElementActive = pinCalloutElementCurrent
        if (pinCalloutElementPrev) {
          pinCalloutElementActive = pinCalloutElementActive.filter((pinCalloutElement) => {
            return pinCalloutElement.id !== pinCalloutElementPrev.id
          })
        }
        if (!activeCallout) {
          const randomIndex = Math.floor(Math.random() * pinCalloutElementActive.length)
          const pinCalloutElement = pinCalloutElementActive[randomIndex]
          if (pinCalloutElement) {
            pinCalloutElement.click()
          }
        }
      }

      gkview.onTap = () => {
        resetSelectedCallout()
        setTimeout(function () {
          activeCallout = false
        }, 2000)
      }

      const onPinClick = (e) => {
        const lat = e.detail.latitude
        const lon = e.detail.longitude
        const data = e.detail.data
        clearTimeout(openTimeCallout)
        clearTimeout(closeTimeCallout)
        resetSelectedCallout()
        e.target.querySelector('.connecting-line').style.display = 'block'
        e.target.querySelector('.pin-spinner').style.display = 'block'
        selectedDetailDef = new CalloutDefinition(lat, lon, DetailCallout, data)
        selectedDetailDef.connectionLine = e.target.querySelector('.connecting-line')
        selectedDetailDef.pinSpinner = e.target.querySelector('.pin-spinner')
        pinCalloutElementPrev = e.target
        setTimeout(() => {
          calloutManager.replaceCallouts([...pinDefs, selectedDetailDef])
        }, 200)
        activeCallout = true
        openTimeCallout = setTimeout(() => {
          resetSelectedCallout()
          closeTimeCallout = setTimeout(() => {
            activeCallout = false
          }, calloutDisplayInterval)
        }, calloutDisplayTimeout)
      }

      function resetSelectedCallout () {
        if (selectedDetailDef) {
          if (selectedDetailDef.connectionLine) {
            selectedDetailDef.connectionLine.style.display = 'none'
          }
          if (selectedDetailDef.pinSpinner) {
            selectedDetailDef.pinSpinner.style.display = 'none'
          }
        }
        selectedDetailDef = null
        calloutManager.replaceCallouts(pinDefs)
      }

      calloutManagerRef.current.addEventListener('pinclick', onPinClick)
    }

    if (globeRef.current) {
      fetchMyAPI()
    }
  }, [globeRef])
  return (
    <div id='globekit-container'>
      <canvas ref={globeRef} />
      <div id='callout-manager' ref={calloutManagerRef} />
    </div>
  )
}

export default Globe
