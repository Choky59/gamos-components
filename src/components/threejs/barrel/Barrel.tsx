import React, { useEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'

const Barrel = () => {
    const ref = useRef() as React.MutableRefObject<THREE.Group>
    const velocity = useRef(0.1)
    const rotation = useRef(-0.05)
    useFrame(() => {
        ref.current.rotation.y += rotation.current
        ref.current.rotation.x = 1.6
        ref.current.position.x += velocity.current
        if (ref.current.position.x > 10 ||ref.current.position.x < -10) {
            velocity.current = -velocity.current
            rotation.current = -rotation.current
        }
    })

    useEffect(() => {
        if (ref.current !== null) {
            ref.current.position.x = -10
        }
    }, [ref])

    const height = 1
    const radiusTop = 1.5
    const radiusBottom = 1.5
    const radialSegments = 10
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
    const material = new THREE.MeshBasicMaterial({ color: 0x996633 })

    const wireframe = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
        color: '#000000',
    });



    return (
        <group ref={ref}>
            <mesh geometry={geometry} material={material} />
            <lineSegments geometry={wireframe} material={wireframeMaterial} />
        </group>
    )
}

const BarrelScene = () => {

    return (
        <Canvas style={{ backgroundColor: "red" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Barrel />
        </Canvas>
    )
}


export default BarrelScene