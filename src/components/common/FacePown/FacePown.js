import React, { useRef } from 'react';

import { EdgesGeometry, LineSegments, LineBasicMaterial } from 'three';
import { useGLTF } from '@react-three/drei';




function HandModel({ x, y, z }) {


	const gltfPath = 'models/hand/hand.glb';
	const gltf = useGLTF(gltfPath);

	const model = gltf.scene;

	// Создаем геометрию для голограммы из синих линий
	// const wireframeGeometry = new WireframeGeometry(model?.children[0].geometry);
	const edgesGeometry = new EdgesGeometry(model.children[0].geometry, 3);

	// // Удалите каждую вторую линию
	// wireframeGeometry.deleteAttribute('index');

	// Измените положение линий
	// wireframeGeometry.translate(0, 0, 1);

	// Создаем материал для голограммы из синих линий
	const material = new LineBasicMaterial({ color: 0x5a0494, linewidth: 0.1 }); // измените толщину на 2

	// Создаем объект LineSegments для отображения голограммы из синих линий
	const wireframe = new LineSegments(edgesGeometry, material);

	// Добавляем голограмму в сцену
	model.add(wireframe);
	model.rotation.z = x;
	model.rotation.y = y;
	model.rotation.x = z;

	model.position.y = -7;
	model.position.z = 0;
	model.position.x = -8;
	model.scale.set(1, 1, 1);

	return (
		<mesh>
			<primitive object={model} />

			
		</mesh>
	);
}

export default HandModel;
