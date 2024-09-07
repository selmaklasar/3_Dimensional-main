import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial, TextureLoader } from 'three';
import Button1 from '../../common/button';
import Lighting from '../../common/lighting';

const Wclth = ({ url, textureUrl, selectedpart }) => {
  const [modelUrl, setModelUrl] = useState(url);

  useEffect(() => {
  
    if (url) {

      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const newUrl = URL.createObjectURL(blob);
        
          setModelUrl(newUrl);
        })
        .catch(err => {
          console.error('Error fetching model:', err);
          setError('Failed to load model.');
        });
    }
  }, [url]);




  const { scene, nodes, materials } = useGLTF(modelUrl);
  const [texture, setTexture] = useState(null);


  useEffect(() => {
    if (textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (loadedTexture) => {
        setTexture(loadedTexture);
      });
    }
  }, [textureUrl]);


  useEffect(() => {
    if (scene && texture) {
      scene.traverse((child) => {
        if (child.isMesh) {
   

        
const shouldUpdateMaterial3 = (

    selectedpart === "full" &&
  (
    (child.geometry === nodes.Cloth_mesh.geometry ||
        child.geometry === nodes.Cloth_mesh_1.geometry ||
        child.geometry === nodes.Cloth_mesh_2.geometry ||
        child.geometry === nodes.Cloth_mesh_3.geometry ||
        child.geometry === nodes.Cloth_mesh_4.geometry ||
        child.geometry === nodes.Cloth_mesh_5.geometry ||
        child.geometry === nodes.Cloth_mesh_6.geometry ||
        child.geometry === nodes.Cloth_mesh_7.geometry ||
        child.geometry === nodes.Cloth_mesh_8.geometry ||
        child.geometry === nodes.Cloth_mesh_9.geometry )));

             
    

          if (shouldUpdateMaterial3) {
      
            child.material = new MeshStandardMaterial({
              map: texture,
            });
            child.material.needsUpdate = true;

            setTexture(null)
          }
        



        }
      });
    }
  }, [scene, texture, nodes, materials, selectedpart]);

  const ref = useRef();

  return (
    <> 
    <Canvas>
 
    <Lighting/>
      <primitive object={scene} ref={ref} scale={[4.5, 4.5, 4.5]} position={[0, -4, 0]} />
    
    </Canvas>
    <Button1 scene={scene} />

    </>
  );
};

export default Wclth;
