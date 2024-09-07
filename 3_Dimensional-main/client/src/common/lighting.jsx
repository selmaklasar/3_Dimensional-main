
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'

const Lighting=()=>{

return(
<>
  <ambientLight intensity={0.1}/>
    <pointLight position={[10, 10, 10]} />
  
    <pointLight
      position={[0, 10, 4]} // Position the light above the model
      intensity={2} // Adjust intensity as needed
      castShadow
    />
<directionalLight
      position={[0, 10, 0]} // Position the light above the model
      intensity={2} // Adjust intensity as needed
      castShadow
      
    />
 <spotLight
    position={[0, 1, 2]} // Position the light above the model
    intensity={1} // Adjust intensity as needed
    castShadow
    
   />
    
    <spotLight
    position={[0, 0, -2]} // Position the light above the model
    intensity={1} // Adjust intensity as needed
    castShadow
    
   />
    <spotLight
    position={[0, 0, 2]} // Position the light above the model
    intensity={1} // Adjust intensity as needed
    castShadow
    
   />
    <ambientLight intensity={0.4} /> 
    <OrbitControls  minDistance={5} maxDistance={7} 
     enableRotate={true}
     
     maxPolarAngle={Math.PI / 3} // Restricts vertical rotation
     minPolarAngle={Math.PI / 3}// Restricts vertical rotation
     enableZoom={true}
     enablePan={false} // Optional: Disable panning if desired
     rotateSpeed={1.0}
     maxAzimuthAngle={Infinity} // Remove restrictions on horizontal rotation
     minAzimuthAngle={-Infinity}
     enableDamping={true}
     dampingFactor={0.1}
     autoRotate={false}
    />
</>
)

}

export default Lighting;