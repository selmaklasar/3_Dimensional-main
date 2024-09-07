import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial, TextureLoader } from 'three';
import Button1 from '../../common/button';
import Lighting from '../../common/lighting';

const CropTop = ({ url, textureUrl, selectedpart }) => {
  const [modelUrl, setModelUrl] = useState(url);
  const [texture, setTexture] = useState(null);
  const [error, setError] = useState(null);
  const { scene, nodes } = useGLTF(modelUrl); // Load the GLTF model
  const cameraRef = useRef();

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const newUrl = URL.createObjectURL(blob);
          setModelUrl(newUrl);
        })
        .catch((err) => {
          console.error('Error fetching model:', err);
          setError('Failed to load model.');
        });
    }
  }, [url]);

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
            (selectedpart === 'front' &&
              (child.geometry === nodes.Pattern_24855.geometry ||
                child.geometry === nodes.Pattern_24855_1.geometry));

          const shouldUpdateMaterial2 =
            selectedpart === 'back' &&
            (child.geometry === nodes.Pattern_24856.geometry ||
              child.geometry === nodes.Pattern_24856_1.geometry);

          const shouldUpdateMaterial3 =
            selectedpart === 'right' &&
            (child.geometry === nodes.Pattern_36841.geometry ||
              child.geometry === nodes.Pattern_36841_1.geometry ||
              child.geometry === nodes.Pattern_36841_2.geometry ||
              child.geometry === nodes.Pattern_117295.geometry ||
              child.geometry === nodes.Pattern_117295_1.geometry ||
              child.geometry === nodes.Pattern_117295_2.geometry ||
              child.geometry === nodes.Pattern_200678.geometry ||
              child.geometry === nodes.Pattern_200678_1.geometry ||
              child.geometry === nodes.Pattern_200678_2.geometry);

          const shouldUpdateMaterial4 =
            selectedpart === 'left' &&
            (child.geometry === nodes.Pattern_36842.geometry ||
              child.geometry === nodes.Pattern_36842_1.geometry ||
              child.geometry === nodes.Pattern_36842_2.geometry ||
              child.geometry === nodes.Pattern_117296.geometry ||
              child.geometry === nodes.Pattern_117296_1.geometry ||
              child.geometry === nodes.Pattern_117296_2.geometry ||
              child.geometry === nodes.Pattern_200679.geometry ||
              child.geometry === nodes.Pattern_200679_1.geometry ||
              child.geometry === nodes.Pattern_200679_2.geometry);

          if (
            shouldUpdateMaterial ||
            shouldUpdateMaterial2 ||
            shouldUpdateMaterial3 ||
            shouldUpdateMaterial4
          ) {
            child.material = new MeshStandardMaterial({
              map: texture,
            });
            child.material.needsUpdate = true;
          }
        }
      });
      setTexture(null); // Clear texture after applying
    }

    if (selectedpart === 'front') {
      cameraRef.current.position.set(0, 2, 2); // Adjusted y and z values
    } else if (selectedpart === 'back') {
      cameraRef.current.position.set(0, 2, -2); // Adjusted y and z values
    }
  }, [scene, texture, nodes, selectedpart]);

  const ref = useRef();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Canvas shadows camera={{ position: [0, 10, 2], fov: 50 }} ref={cameraRef}>
        <Lighting />
        <primitive object={scene} ref={ref} scale={[8, 8, 8]} position={[0, -10, 0]} />
  
      </Canvas>

      <Button1 scene={scene} />
    </>
  );
};

export default CropTop;
