import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial, TextureLoader } from 'three';
import Button1 from '../../common/button';
import Lighting from '../../common/lighting';

const Basic_shirt = ({ url, textureUrl, selectedpart }) => {

  
  const [modelUrl, setModelUrl] = useState(url);
  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(null);
 // 

  // Fetch and load the GLTF model
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



  const { scene, nodes } = useGLTF(modelUrl);



  // Load the texture whenever textureUrl changes
   useEffect(() => {
    if (textureUrl) {
      const loader = new TextureLoader();
      loader.load(
        textureUrl,
        (loadedTexture) => {
          setTexture(loadedTexture);
        },
        undefined,
        (err) => {
          console.error('Error loading texture:', err);
          setError('Failed to load texture.');
        }
      );
    }
  }, [textureUrl]); 

  // Apply the texture to the specific mesh
 useEffect(() => {
    if (scene && texture) {
      scene.traverse((child) => {
        if (child.isMesh) {
          const shouldUpdateMaterial =
            (selectedpart === "front" &&
              (child.geometry === nodes['2_1'].geometry ||
                child.geometry === nodes['2_2'].geometry||
                child.geometry === nodes['2_3'].geometry||
                child.geometry === nodes['4_1'].geometry||
                child.geometry === nodes['4_2'].geometry||
                child.geometry === nodes['4_3'].geometry||
                child.geometry === nodes['9_1'].geometry||
                child.geometry === nodes['9_2'].geometry||
                child.geometry === nodes['9_3'].geometry||
                child.geometry === nodes['12_1'].geometry||
                child.geometry === nodes['12_2'].geometry||
                child.geometry === nodes['12_3'].geometry
            ));

          const shouldUpdateMaterial2 = (selectedpart === "back" &&
            (

                child.geometry === nodes['1_5'].geometry ||
                child.geometry === nodes['1_6'].geometry||
                child.geometry === nodes['1_7'].geometry||
                child.geometry === nodes['6_1'].geometry||
                child.geometry === nodes['6_2'].geometry||
                child.geometry === nodes['6_3'].geometry
           

            )
          );

          const shouldUpdateMaterial3 = (
            selectedpart === "right" &&
            (
                child.geometry === nodes['3_1'].geometry ||
                child.geometry === nodes['3_2'].geometry||
                child.geometry === nodes['3_3'].geometry||
                child.geometry === nodes['10_1'].geometry||
                child.geometry === nodes['10_2'].geometry||
                child.geometry === nodes['10_3'].geometry||
                child.geometry === nodes['13_1'].geometry||
                child.geometry === nodes['13_2'].geometry||
                child.geometry === nodes['13_3'].geometry
            )
          );

          const shouldUpdateMaterial4 = (
            selectedpart === "left" &&
            (
                child.geometry === nodes['1_1'].geometry ||
                child.geometry === nodes['1_2'].geometry||
                child.geometry === nodes['1_3'].geometry||
                child.geometry === nodes['7_1'].geometry||
                child.geometry === nodes['7_2'].geometry||
                child.geometry === nodes['7_3'].geometry
            )
          );

          if (shouldUpdateMaterial || shouldUpdateMaterial2 || shouldUpdateMaterial3 || shouldUpdateMaterial4) {
            child.material = new MeshStandardMaterial({
              map: texture,
            });
            child.material.needsUpdate = true;
          }
        }
      });
      setTexture(null); 
    }
  }, [scene, texture, nodes, selectedpart]);

  const ref = useRef();

  if (error) {
    return <div>Error: {error}</div>;
  }


 

   return (

   <>
  <Canvas>
     <Lighting/>
      <primitive object={scene} ref={ref} scale={[6.8, 6.8, 6.8]} position={[0, -8.5, 0]} />
    
    </Canvas>
        <Button1 scene={scene} />
        </>
 ); 
};

export default Basic_shirt;
