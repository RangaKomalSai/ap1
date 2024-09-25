import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import map from "../assets/map.jpg"

const ThreeJSScene = () => {
  const canvasRef = useRef(null);

  // Refs for mutable variables that don't need to trigger re-renders
  const materialsRef = useRef([]);
  const grabbingRef = useRef(false);
  const isIntersectingRef = useRef(false);
  const mouseRef = useRef(new THREE.Vector2());

  useEffect(() => {
    let renderer, scene, camera, controls, raycaster, baseMesh;
    let minMouseDownFlag = false;
    let mouseDown = false;

    const vertexShader = `
      #ifdef GL_ES
      precision mediump float;
      #endif

      uniform float u_time;
      uniform float u_maxExtrusion;

      void main() {
        vec3 newPosition = position;
        if(u_maxExtrusion > 1.0) newPosition.xyz = newPosition.xyz * u_maxExtrusion + sin(u_time);
        else newPosition.xyz = newPosition.xyz * u_maxExtrusion;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
      }
    `;

    const fragmentShader = `
      #ifdef GL_ES
      precision mediump float;
      #endif

      uniform float u_time;
      vec3 colorA = vec3(0.196, 0.631, 0.886);
      vec3 colorB = vec3(0.192, 0.384, 0.498);

      void main() {
        vec3 color = vec3(0.0);
        float pct = abs(sin(u_time));
        color = mix(colorA, colorB, pct);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const init = () => {
      const container = canvasRef.current.parentElement;

      const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      };

      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(
        30,
        sizes.width / sizes.height,
        1,
        1000
      );
      camera.position.z = 100;

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: false,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lights
      const pointLight = new THREE.PointLight(0x081b26, 17, 200);
      pointLight.position.set(-50, 0, 60);
      scene.add(pointLight);
      const hemisphereLight = new THREE.HemisphereLight(
        0xffffbb,
        0x080820,
        1.5
      );
      scene.add(hemisphereLight);

      // Raycaster
      raycaster = new THREE.Raycaster();

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.minPolarAngle = Math.PI / 2 - 0.5;
      controls.maxPolarAngle = Math.PI / 2 + 0.5;

      // Base Sphere
      const baseSphere = new THREE.SphereGeometry(19.5, 35, 35);
      const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0x0b2636,
        transparent: true,
        opacity: 0.9,
      });
      baseMesh = new THREE.Mesh(baseSphere, baseMaterial);
      scene.add(baseMesh);

      // Shader Material
      const shaderMaterial = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: {
          u_time: { value: 1.0 },
          u_maxExtrusion: { value: 1.0 },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      materialsRef.current.push(shaderMaterial);

      // Load Map and Create Dots
      loadMapAndCreateDots(shaderMaterial);

      // Event Listeners
      window.addEventListener("resize", onResize);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);

      // Start Rendering
      animate();
    };

    const loadMapAndCreateDots = (shaderMaterial) => {
      const activeLatLon = {};
      const dotSphereRadius = 20;

      const readImageData = (imageData) => {
        for (
          let i = 0, lon = -180, lat = 90;
          i < imageData.length;
          i += 4, lon++
        ) {
          if (!activeLatLon[lat]) activeLatLon[lat] = [];

          const red = imageData[i];
          const green = imageData[i + 1];
          const blue = imageData[i + 2];

          if (red < 80 && green < 80 && blue < 80) activeLatLon[lat].push(lon);

          if (lon === 180) {
            lon = -180;
            lat--;
          }
        }
      };

      const visibilityForCoordinate = (lon, lat) => {
        let visible = false;

        if (!activeLatLon[lat] || activeLatLon[lat].length === 0)
          return visible;

        const closest = activeLatLon[lat].reduce((prev, curr) => {
          return Math.abs(curr - lon) < Math.abs(prev - lon) ? curr : prev;
        }, activeLatLon[lat][0]);

        if (Math.abs(lon - closest) < 0.5) visible = true;

        return visible;
      };

      const calcPosFromLatLonRad = (lon, lat) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -(dotSphereRadius * Math.sin(phi) * Math.cos(theta));
        const z = dotSphereRadius * Math.sin(phi) * Math.sin(theta);
        const y = dotSphereRadius * Math.cos(phi);

        return new THREE.Vector3(x, y, z);
      };

      const createMaterial = (timeValue) => {
        const mat = shaderMaterial.clone();
        mat.uniforms.u_time.value = timeValue * Math.sin(Math.random());
        materialsRef.current.push(mat);
        return mat;
      };

      const setDots = () => {
        const dotDensity = 2.5;
        let vector = new THREE.Vector3();

        for (let lat = 90, i = 0; lat > -90; lat--, i++) {
          const radius =
            Math.cos(Math.abs(lat) * (Math.PI / 180)) * dotSphereRadius;
          const circumference = radius * Math.PI * 2;
          const dotsForLat = circumference * dotDensity;

          for (let x = 0; x < dotsForLat; x++) {
            const long = -180 + (x * 360) / dotsForLat;

            if (!visibilityForCoordinate(long, lat)) continue;

            vector = calcPosFromLatLonRad(long, lat);

            const dotGeometry = new THREE.CircleGeometry(0.1, 5);
            dotGeometry.lookAt(vector);
            dotGeometry.translate(vector.x, vector.y, vector.z);

            const mat = createMaterial(i);
            const mesh = new THREE.Mesh(dotGeometry, mat);

            scene.add(mesh);
          }
        }
      };

      const image = new Image();
      image.onload = () => {
        const imageCanvas = document.createElement("canvas");
        imageCanvas.width = image.width;
        imageCanvas.height = image.height;

        const context = imageCanvas.getContext("2d");
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(
          0,
          0,
          imageCanvas.width,
          imageCanvas.height
        );
        readImageData(imageData.data);

        setDots();
      };

      image.src = map;
    };

    const onResize = () => {
      const container = canvasRef.current.parentElement;
      const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      };
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);

      if (window.innerWidth > 700) camera.position.z = 100;
      else camera.position.z = 140;
    };

    const onMouseMove = (event) => {
      const mouse = mouseRef.current;
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(baseMesh);
      if (intersects.length > 0) {
        isIntersectingRef.current = true;
        if (!grabbingRef.current) document.body.style.cursor = "pointer";
      } else {
        isIntersectingRef.current = false;
        if (!grabbingRef.current) document.body.style.cursor = "default";
      }
    };

    const onMouseDown = () => {
      if (!isIntersectingRef.current) return;

      materialsRef.current.forEach((el) => {
        gsap.to(el.uniforms.u_maxExtrusion, {
          value: 1.07,
        });
      });

      mouseDown = true;
      minMouseDownFlag = false;

      setTimeout(() => {
        minMouseDownFlag = true;
        if (!mouseDown) onMouseUp();
      }, 500);

      document.body.style.cursor = "grabbing";
      grabbingRef.current = true;
    };

    const onMouseUp = () => {
      mouseDown = false;
      if (!minMouseDownFlag) return;

      materialsRef.current.forEach((el) => {
        gsap.to(el.uniforms.u_maxExtrusion, {
          value: 1.0,
          duration: 0.15,
        });
      });

      grabbingRef.current = false;
      if (isIntersectingRef.current) document.body.style.cursor = "pointer";
      else document.body.style.cursor = "default";
    };

    const animate = () => {
      materialsRef.current.forEach((el) => {
        el.uniforms.u_time.value += 0.03;
      });
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);

      // Dispose Three.js objects to prevent memory leaks
      materialsRef.current.forEach((mat) => mat.dispose());
      scene.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry.dispose();
        if (object.material.isMaterial) {
          cleanMaterial(object.material);
        } else {
          // an array of materials
          for (const material of object.material) cleanMaterial(material);
        }
      });
      renderer.dispose();
    };
  }, []); // Empty dependency array ensures this runs once

  // Helper function to clean materials
  const cleanMaterial = (material) => {
    material.dispose();

    // dispose textures
    for (const key in material) {
      const value = material[key];
      if (value && typeof value === "object" && "minFilter" in value) {
        value.dispose();
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden">
      <canvas ref={canvasRef} className="absolute w-full h-full"></canvas>
    </div>
  );
};

export default ThreeJSScene;
