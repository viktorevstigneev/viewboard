import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Group, Mesh, Points, ShaderMaterial } from 'three';
import * as THREE from 'three';
import { AdditiveBlending } from 'three';

const vertexShader = () => `
  attribute vec3 center;
  varying vec3 vCenter;
    
  void main() {
    vCenter = center;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
  }
`;

const fragmentShader = () => `
  varying vec3 vCenter;

  void main() {
    if (vCenter.x > 0.02 && vCenter.y > 0.02 && vCenter.z > 0.02) {
      discard;
    } else {
      if (vCenter.x < 0.02 && (vCenter.y < 0.25 || vCenter.z < 0.25)) {
        discard;
      }
      if (vCenter.y < 0.02 && (vCenter.x < 0.25 || vCenter.z < 0.25)) {
        discard;
      }
      if (vCenter.z < 0.02 && (vCenter.y < 0.25 || vCenter.x < 0.25)) {
        discard;
      }
    }
   gl_FragColor = vec4(0.77, 0.90 ,1.0 , 0.2);
  }`;
const TangramPerson = () => {
	const tangramPersonRef = useRef();

	useFrame((_,delta) => {
		tangramPersonRef.current.rotation.y += 0.001;
		tangramPersonRef.current.rotation.z += 0.01;
		tangramPersonRef.current.rotation.y += 0.001;
	});

	const addCenterAttribute = (geometry) => {
		const vectors = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)];

		const position = geometry.attributes.position;
		const centers = new Float32Array(position.count * 3);

		for (let i = 0, l = position.count; i < l; i++) {
			vectors[i % 3].toArray(centers, i * 3);
		}

		geometry.setAttribute('center', new THREE.BufferAttribute(centers, 3));
	};

	const geometry = new THREE.IcosahedronGeometry(6, 6);
	addCenterAttribute(geometry);

	const [sqwere] = useLoader(THREE.TextureLoader, ['textures/white_square.jpg']);
	const [atom] = useLoader(THREE.TextureLoader, ['textures/atom_alphamap.jpg']);


	const atomMaterial = new THREE.PointsMaterial({
		size: 0.2,
		color: 0x0567ba,
		transparent: true,
		depthWrite: false,
		// map: atom,
		// alphaMap: sqwere,
	});

	const bondMaterial = new THREE.ShaderMaterial({
		vertexShader: vertexShader(),
		fragmentShader: fragmentShader(),
		side: THREE.DoubleSide,
		transparent: true, // this is important for the alpha value to work in the fragment shader
	});

	return (
		<group ref={tangramPersonRef}>
			<points geometry={geometry} material={atomMaterial}/>
			<mesh geometry={geometry} material={bondMaterial} />
		</group>
	);
};

export default TangramPerson;
