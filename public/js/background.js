var mesh,
  renderer,
  scene,
  dummyScene,
  camera,
  dummyCamera,
  container,
  rtTexture,
  uniforms,
  quad,
  mesh,
  composer,
  renderPass,
  bloomPass,
  badTVPass,
  filmPass,
  rgbPass,
  time

function init() {
  //renderer
  container = document.getElementById('canvas')
  renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(0x121212)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.autoClear = false
  renderer.antialias = false
  container.appendChild(renderer.domElement)

  //scene
  scene = new THREE.Scene()
  dummyScene = new THREE.Scene()

  rtTexture = new THREE.WebGLRenderTarget(
    window.innerWidth / 3, //resolution x
    window.innerHeight / 3, //resolution y
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
    }
  )

  uniforms = {
    tDiffuse: { value: rtTexture.texture },
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
  }
  var materialScreen = new THREE.ShaderMaterial({
    uniforms: uniforms, // rtTexture = material from perspective camera
    vertexShader: ` varying vec2 vUv;
    
    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }`,
    fragmentShader: ` #include <common>
     
    uniform vec3 iResolution;
    uniform float iTime;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    
    void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    
        vec2 uv = vUv / 1.0;
        fragColor = texture2D(tDiffuse, uv + vec2(sin(iTime*120.0 + uv.y * 5.0) * 0.0005, 0.0));
    
    }
    
    void main() {
    
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }`,
    depthWrite: false,
  })

  var plane = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
  // plane to display rendered texture
  quad = new THREE.Mesh(plane, materialScreen)
  quad.position.z = -100
  dummyScene.add(quad)

  //camera
  camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  camera.position.z = 500
  dummyCamera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    -10000,
    10000
  )
  dummyCamera.position.z = 1

  //lights
  scene.add(new THREE.AmbientLight(0xffffff, 2))

  //geometry
  var plane = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)

  // plane to display rendered texture
  quad = new THREE.Mesh(plane, materialScreen)
  quad.position.z = -100
  dummyScene.add(quad)

  var geometry = new THREE.BoxGeometry(80, 80, 80)

  var mat1 = new THREE.MeshPhongMaterial({ color: 0x00ff44 })

  mesh = new THREE.Mesh(geometry, mat1)
  mesh.position.set(0, 100, 100)
  scene.add(mesh)

  let text = new THREE.TextSprite({
    alignment: 'left',
    color: '#00ff44',
    fontFamily: '"Courier", monospace',
    fontSize: 48,
    fontStyle: 'bold',
    text: ['Wake up, Neo...'].join('\n'),
  })
  scene.add(text)

  //postprocessing
  composer = new THREE.EffectComposer(renderer)
  renderPass = new THREE.RenderPass(dummyScene, dummyCamera)
  bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.7,
    0.5,
    0.5
  )
  badTVPass = new THREE.ShaderPass(THREE.BadTVShader)
  badTVPass.renderToScreen = true
  badTVPass.uniforms.distortion.value = 0.125
  badTVPass.uniforms.distortion2.value = 1.75
  badTVPass.uniforms.speed.value = 1
  badTVPass.uniforms.rollSpeed.value = 0

  filmPass = new THREE.ShaderPass(THREE.FilmShader)
  filmPass.uniforms.grayscale.value = 0
  filmPass.uniforms.sCount.value = 1024
  filmPass.uniforms.sIntensity.value = 0.05
  filmPass.uniforms.nIntensity.value = 0.4

  rgbPass = new THREE.ShaderPass(THREE.RGBShiftShader)
  rgbPass.uniforms.angle.value = 2

  composer.addPass(renderPass)
  composer.addPass(bloomPass)
  composer.addPass(badTVPass)
  composer.addPass(filmPass)
  composer.addPass(rgbPass)
}

function animate(time) {
  time *= 0.001
  badTVPass.uniforms['time'].value = time
  filmPass.uniforms['time'].value = time

  mesh.rotation.y += 0.001
  uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1)
  uniforms.iTime.value = time
  requestAnimationFrame(animate)
  render()
}

function render() {
  camera.lookAt(scene.position)

  // Render first scene into texture
  renderer.setRenderTarget(rtTexture)
  renderer.clear()
  renderer.render(scene, camera)

  // Render full screen quad with generated texture
  renderer.setRenderTarget(null)
  renderer.clear()
  composer.render()
  renderer.render(dummyScene, dummyCamera)
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
