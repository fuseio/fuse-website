import React, { useRef, useEffect } from 'react'
import { GlobeKitView, PointGlobe, Points, Icosphere } from 'globekit-public/globekit_v1_0_5/globekit.esm'
// import wasm from 'globekit-public/globekit_v1_0_5/gkweb_bg.wasm'

function Globe () {
  const globeRef = useRef(null)

  useEffect(() => {
    if (globeRef.current) {
      const gkview = new GlobeKitView(globeRef.current, {
        apiKey: 'gk_fbb5b82000622ec2c4746c659bc539983d5789c38e0d7af617379e6b40dac27c308c27a2ec09fcb087ed5b968e0b3727b44f28b13dfbe2c550649de4025d0161',
        wasmPath: '/globekit-public/globekit_v1_0_5/gkweb_bg.wasm'
      })
      gkview.startDrawing()
      // const icosphere = new Icosphere('/images/local_economies/DigitalRand/digitalrand-image.png')
      // gkview.addDrawable(icosphere, () => {
      // })
    }
  }, [globeRef])
  return (
    <canvas id='lottie' ref={globeRef} />

  )
}

export default Globe
