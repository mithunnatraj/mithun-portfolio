import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015); // Add subtle fog to match dark background
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Add canvas to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // --- Create Particles (Stars) ---
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const posArray = new Float32Array(starCount * 3);
    for(let i = 0; i < starCount * 3; i++) {
       // Spread particles out
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starMaterial = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff, transparent: true, opacity: 0.8 });
    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    // --- Create Floating Geometries ---
    const shapes = [];
    const geometry = new THREE.IcosahedronGeometry(1, 0); // basic icosahedron
    const colors = [0x3b82f6, 0xa855f7, 0xec4899]; // tailwind text-blue-500, purple-500, pink-500
    
    // Position offset scaled for responsive view
    const isMobile = window.innerWidth < 768;
    const baseOffset = isMobile ? 0.6 : 1;

    const positions = [
      [-4 * baseOffset, 2 * baseOffset, -5],
      [4 * baseOffset, -2 * baseOffset, -3],
      [0, -5 * baseOffset, -8]
    ];

    for(let i = 0; i < 3; i++) {
      const material = new THREE.MeshStandardMaterial({ 
        color: colors[i], 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const mesh = new THREE.Mesh(geometry, material);
      const [x, y, z] = positions[i];
      mesh.position.set(x, y, z);
      
      // Dynamic scaling for all inches of screen
      const baseScale = isMobile ? 0.5 : 0.8;
      const stepScale = isMobile ? 0.2 : 0.4;
      const scale = baseScale + i * stepScale;
      
      mesh.scale.set(scale, scale, scale);
      // Store reference scale for resize handling
      mesh.userData.baseScale = scale;
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2);
    dirLight1.position.set(10, 10, 5);
    scene.add(dirLight1);
    
    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 2);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    camera.position.z = 5;

    // --- Mouse Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Resize Handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      const isMobileNow = window.innerWidth < 768;
      const baseOffset = isMobileNow ? 0.6 : 1;
      const positions = [
        [-4 * baseOffset, 2 * baseOffset, -5],
        [4 * baseOffset, -2 * baseOffset, -3],
        [0, -5 * baseOffset, -8]
      ];
      
      shapes.forEach((shape, i) => {
        const [x, y, z] = positions[i];
        shape.position.set(x, y, z);
        
        const baseScale = isMobileNow ? 0.5 : 0.8;
        const stepScale = isMobileNow ? 0.2 : 0.4;
        const scale = baseScale + i * stepScale;
        shape.scale.set(scale, scale, scale);
      });
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Constantly rotate stars slowly
      starMesh.rotation.y = elapsedTime * 0.05;
      starMesh.rotation.x = elapsedTime * 0.02;

      // Float shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002 * (index + 1);
        shape.rotation.y += 0.003;
        shape.position.y += Math.sin(elapsedTime * 2 + index) * 0.005;
      });

      // Camera parallax smooth effect
      targetX = mouseX * 0.002;
      targetY = mouseY * 0.002;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      geometry.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
