import React, { useRef, useEffect } from 'react'
import { GlobeKitView, PointGlobe, Background, Atmosphere } from 'globekit-public'

function Globe () {
  const globeRef = useRef(null)

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
      const background = new Background('images/bg.png')
      gkview.addDrawable(background)
      const atmosphere = new Atmosphere({
        texture: 'images/disk_1.png'
      })
      gkview.addDrawable(atmosphere)
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
      // console.log({ ...pointglobe })
      pointglobe.setInteractive(true, true, false)
      gkview.addDrawable(pointglobe, () => {
        gkview.startDrawing()
      })
    }

    if (globeRef.current) {
      fetchMyAPI()
    }
  }, [globeRef])
  return (
    <canvas ref={globeRef} />
  )
}

export default Globe
