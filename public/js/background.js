import * as THREE from 'https://cdn.skypack.dev/three@v0.129.0'

var mesh, renderer, scene, camera

function init() {
  //renderer
  var container = document.getElementById('canvas')
  renderer = new THREE.WebGLRenderer()

  renderer.setPixelRatio(window.devicePixelRatio * 0.005)
  renderer.setSize(
    document.documentElement.scrollWidth,
    document.documentElement.scrollHeight
  )
  renderer.antialias = false
  container.appendChild(renderer.domElement)

  //scene
  scene = new THREE.Scene()
  const light = new THREE.AmbientLight(0x404040, 0) // soft white light
  scene.add(light)

  //camera
  camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 3
  camera.position.x = 0
  camera.position.y = 0

  //textures
  var geometry = new THREE.SphereGeometry(2.9, 15, 7)

  //materials

  const m = new THREE.ShaderMaterial({
    uniforms: {},

    vertexShader: [
      'varying vec2 vUV;',
      'varying vec3 vNormal;',

      'void main() {',

      'vUV = uv;',
      'vNormal = vec3( normal );',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

      '}',
    ].join('\n'),

    fragmentShader: [
      'varying vec2 vUV;',
      'varying vec3 vNormal;',

      'void main() {',

      'vec4 c = vec4( abs( vNormal ) + vec3( vUV, 0.0 ), 0.0 );',
      'gl_FragColor = c;',

      '}',
    ].join('\n'),
  })

  m.alphaTest = true

  //meshes
  mesh = new THREE.Mesh(geometry, m)
  scene.add(mesh)
  mesh.rotation.y += Math.random()
}

var rotationSpeed = 0.0005
function animate() {
  mesh.rotation.y += rotationSpeed
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

window.addEventListener('resize', onWindowResize, false)
window.addEventListener('popstate', onWindowResize)

function onWindowResize() {
  camera.aspect =
    document.documentElement.scrollWidth / document.documentElement.scrollHeight
  renderer.setSize(
    document.documentElement.scrollWidth,
    document.documentElement.scrollHeight
  )
  camera.updateProjectionMatrix()
}

init()
animate()
