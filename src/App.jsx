import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Html } from '@react-three/drei'
import Desk from './components/Desk.jsx'
import ScreenUI from './components/ScreenUI.jsx'
import { useDeskStore } from './store.js'

export default function App() {
  const setOpenApp = useDeskStore(s => s.setOpenApp)
  const [ready, setReady] = useState(false)

  return (
    <>
      <Canvas shadows camera={{ position: [2.6, 1.6, 3.2], fov: 40 }} onCreated={()=>setReady(true)}>
        <color attach="background" args={['#f6efe7']} />
        <hemisphereLight intensity={0.8} color={'#fff2e1'} groundColor={'#d9d9d9'} />
        <directionalLight position={[3,3,2]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Suspense fallback={null}>
          <Desk onOpen={()=>setOpenApp('Projects')} />
        </Suspense>
        <ContactShadows position={[0,-1,0]} opacity={0.4} scale={10} blur={2.4} />
        <OrbitControls enablePan={false} minPolarAngle={Math.PI/4} maxPolarAngle={Math.PI/2.2} />
        {/* UI anchored near the monitor */}
        <Html position={[0,0.9,-0.3]} transform distanceFactor={1.7}>
          <ScreenUI />
        </Html>
      </Canvas>
      {!ready && <div className="notice">Initializing WebGL…</div>}
      <div className="notice">Tip: click the monitor to open Projects.</div>
    </>
  )
}
