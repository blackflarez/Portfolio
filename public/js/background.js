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
  cursor,
  composer,
  renderPass,
  bloomPass,
  badTVPass,
  filmPass,
  rgbPass,
  time,
  motif,
  background
var textProperties = {
    alignment: 'left',
    color: '#ffffff',
    fontFamily: '"B612 Mono", monospace',
    fontSize: 24,
  },
  text,
  title,
  subtitleText
var button1, button2, button3, button4, button5
var mouse = { x: 0, y: 0 },
  raycaster,
  object,
  highlighted = []
var pageHome,
  pageContact,
  pageWorks,
  pages = [],
  currentPage
var imageMesh, jobspymobile

window.isMobile = function () {
  let check = false
  ;(function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

function init() {
  raycaster = new THREE.Raycaster()

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
  pageHome = new THREE.Group()
  pageContact = new THREE.Group()
  pageWorks = new THREE.Group()

  pageContact.visible = false
  pageWorks.visible = false

  pageHome.name = 'pageHome'
  pageContact.name = 'pageContact'
  pageWorks.name = 'pageWorks'

  scene.add(pageHome)
  scene.add(pageContact)
  scene.add(pageWorks)

  pages = [pageHome, pageContact, pageWorks]

  var scale = 2
  if (window.screen.availWidth < 1080) {
    scale = 1.25
  }
  rtTexture = new THREE.WebGLRenderTarget(
    window.innerWidth / scale, //resolution x
    window.innerHeight / scale, //resolution y
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
  scene.add(new THREE.AmbientLight(0xffffff, 0.35))

  //images
  const texture = new THREE.TextureLoader().load('images/jobspycover.png')
  jobspymobile = new THREE.MeshStandardMaterial({
    map: texture,
    color: 0xeeeeee,
  })
  imageMesh = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), jobspymobile)

  //geometry
  motif = new THREE.Mesh(
    new THREE.SphereGeometry(256, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0x0015ff, wireframe: true })
  )
  motif.position.set(250, 300, -400)

  scene.add(Object.create(motif))

  var plane = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
  quad = new THREE.Mesh(plane, materialScreen)
  quad.position.z = -100
  dummyScene.add(quad)

  var geometry = new THREE.PlaneGeometry(20, 20)
  var mat1 = new THREE.MeshBasicMaterial({ color: 0xffffff })

  cursor = new THREE.Mesh(geometry, mat1)
  cursor.position.set(1000, 1000, 0)
  if (window.isMobile()) {
    cursor.visible = false
  }
  cursor.name = 'cursor'
  scene.add(cursor)

  background = new THREE.Mesh(
    new THREE.PlaneGeometry(9999, 9999),
    new THREE.MeshBasicMaterial({ color: 0x121212 })
  )
  background.position.set(0, 0, -5000)
  background.rotation.set(0, 0, Math.PI / 2)
  for (let i of pages) {
    i.add(Object.create(background))
  }

  //text and buttons
  text = new THREE.TextSprite(textProperties)
  text.fontSize = 32

  text.position.set(
    (-1 * window.innerWidth) / 2 / 6,
    window.innerHeight / 2 / 6 + 200,
    10
  )

  scene.add(text)
  //buttons
  button1 = new THREE.TextSprite(textProperties)
  button2 = new THREE.TextSprite(textProperties)
  button3 = new THREE.TextSprite(textProperties)
  button4 = new THREE.TextSprite(textProperties)
  button5 = new THREE.TextSprite(textProperties)

  pageHome.add(Object.create(button1))
  pageHome.add(Object.create(button2))

  //contact
  subtitleText = new THREE.TextSprite(textProperties)
  subtitleText.fontSize = 28

  pageContact.add(Object.create(button1))
  pageContact.add(Object.create(button2))
  pageContact.add(Object.create(button3))
  pageContact.add(Object.create(button4))
  pageContact.add(Object.create(subtitleText))

  //selectworks
  subtitleText = new THREE.TextSprite(textProperties)
  subtitleText.fontSize = 28

  pageWorks.add(Object.create(button1))
  pageWorks.add(Object.create(button2))
  pageWorks.add(Object.create(button3))
  pageWorks.add(Object.create(subtitleText))
  pageWorks.add(Object.create(imageMesh))

  //postprocessing
  composer = new THREE.EffectComposer(renderer)
  renderPass = new THREE.RenderPass(dummyScene, dummyCamera)
  bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6,
    0.1,
    0.2
  )
  badTVPass = new THREE.ShaderPass(THREE.BadTVShader)
  badTVPass.renderToScreen = true
  badTVPass.uniforms.distortion.value = 0.1
  badTVPass.uniforms.distortion2.value = 1
  badTVPass.uniforms.speed.value = 1
  badTVPass.uniforms.rollSpeed.value = 0

  filmPass = new THREE.ShaderPass(THREE.FilmShader)
  filmPass.uniforms.grayscale.value = 0
  filmPass.uniforms.sCount.value = 2048
  filmPass.uniforms.sIntensity.value = 0.05
  filmPass.uniforms.nIntensity.value = 0.4

  rgbPass = new THREE.ShaderPass(THREE.RGBShiftShader)
  rgbPass.uniforms.angle.value = 2
  rgbPass.uniforms.amount.value = 0.002

  composer.addPass(renderPass)
  composer.addPass(bloomPass)
  composer.addPass(badTVPass)
  composer.addPass(filmPass)
  composer.addPass(rgbPass)

  //intro
  setPage(null, true)

  document.addEventListener('mousemove', onMouseMove, false)
  document.addEventListener('mousedown', onMouseDown, false)
  window.addEventListener('resize', onWindowResize, false)
  window.addEventListener('popstate', onWindowResize)
}

function animate(time) {
  motif.rotation.y += 0.001
  time *= 0.001
  badTVPass.uniforms['time'].value = time
  filmPass.uniforms['time'].value = time

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
  renderer.render(dummyScene, dummyCamera)
  composer.render()
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

function onMouseMove(event) {
  event.preventDefault()
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  var vector = new THREE.Vector3(mouse.x, mouse.y, 0)
  vector.unproject(camera)
  var dir = vector.sub(camera.position).normalize()
  var distance = -camera.position.z / dir.z
  var pos = camera.position.clone().add(dir.multiplyScalar(distance))
  cursor.position.copy(pos)

  //raycasting
  if (!window.isMobile() && currentPage) {
    raycaster.setFromCamera(mouse, camera)

    var intersects = raycaster.intersectObject(currentPage, true)
    if (intersects)
      if (intersects.length > 0) {
        object = intersects[0].object

        if (object.name.includes('button') || object.name.includes('link')) {
          cursor.visible = false
          if (highlighted[1]) {
            highlighted[0].backgroundColor = 'transparent'
            highlighted[0].color = '#ffffff'
            highlighted.shift()
          }
          highlighted.push(object)
          highlighted[0].backgroundColor = '#33ff5f'
          highlighted[0].color = '#000000'
        } else {
          cursor.visible = true
          if (highlighted[0]) {
            highlighted[0].backgroundColor = 'transparent'
            highlighted[0].color = '#ffffff'
            highlighted.shift()
          }
        }
      }
  }
}

function onMouseDown(event) {
  event.preventDefault()

  if (currentPage) {
    raycaster.setFromCamera(mouse, camera)
    var intersects = raycaster.intersectObject(currentPage, true)

    if (intersects)
      if (intersects.length > 0) {
        object = intersects[0].object

        if (object.name.includes('button')) {
          setPage(object)
        } else if (object.name.includes('link')) {
          if (object.name === 'linkEmail') {
            window.location.href = 'mailto:rubengueorguiev@gmail.com'
          } else if (object.name === 'linkGitHub') {
            window.open('https://github.com/blackflarez', '_blank')
          } else if (object.name === 'linkLinkedIn') {
            window.open(
              'https://www.linkedin.com/in/ruben-gueorguiev-1bb0151b8/',
              '_blank'
            )
          }
        }
      }
  }
}

async function setPage(object, init) {
  if (init) {
    object = new THREE.TextSprite(textProperties)
    object.name = 'buttonHome'
  }

  if (object.name === 'buttonHome') {
    await animateTitle(
      "                \nHello, world...\nI'm Ruben.    ",
      init
    )

    for (let i of pages) {
      for (let e of i.children) {
        if (e.isTextSprite) {
          e.dispose()
        }
      }
      if (i.name === 'pageHome') {
        currentPage = pageHome
        i.visible = true
        i.position.set(0, 0, 0)

        motif.geometry = new THREE.SphereGeometry(256, 8, 8)
        motif.material = new THREE.MeshBasicMaterial({
          color: 0x0015ff,
          wireframe: true,
        })

        button1.text = 'Contact ▸       '
        button2.text = 'Selected Works ▸'

        button1.name = 'buttonContact'
        button2.name = 'buttonWorks'

        button1.fontWeight = 'bold'
        button2.fontWeight = 'bold'

        button1.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6,
          10
        )

        button2.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6 - 50,
          10
        )
      }
    }
  } else if (object.name === 'buttonContact') {
    await animateTitle('                \nContact.    ', init)
    for (let i of pages) {
      for (let e of i.children) {
        if (e.isTextSprite) {
          e.dispose()
        }
      }
      if (i.name === 'pageContact') {
        currentPage = pageContact
        i.visible = true
        i.position.set(0, 0, 0)

        motif.geometry = new THREE.TorusKnotBufferGeometry(256, 24, 4, 5, 2, 3)
        motif.material = new THREE.MeshBasicMaterial({
          color: 0xff9100,
          wireframe: true,
        })

        subtitleText.text = 'Ruben Gueorguiev'
        button1.text = 'Email ▸         '
        button2.text = 'GitHub ▸        '
        button3.text = 'LinkedIn ▸      '
        button4.text = '◂ Back      '

        button1.name = 'linkEmail'
        button2.name = 'linkGitHub'
        button3.name = 'linkLinkedIn'
        button4.name = 'buttonHome'

        button1.fontWeight = 'bold'
        button2.fontWeight = 'bold'
        button3.fontWeight = 'bold'
        button4.fontWeight = 'bold'

        subtitleText.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6,
          10
        )
        button1.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6 - 50,
          10
        )
        button2.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6 - 100,
          10
        )
        button3.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6 - 150,
          10
        )
        button4.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6 - 300,
          10
        )
      }
    }
  } else if (object.name === 'buttonWorks') {
    await animateTitle('                \nSelected Works.    ', init)
    for (let i of pages) {
      for (let e of i.children) {
        if (e.isTextSprite) {
          e.dispose()
        }
      }
      if (i.name === 'pageWorks') {
        currentPage = pageWorks
        i.visible = true
        i.position.set(0, 0, 0)

        motif.geometry = new THREE.BoxGeometry(256, 256, 256)
        motif.material = new THREE.MeshBasicMaterial({
          color: 0xff9100,
          wireframe: true,
        })

        background.material = THREE.MeshBasicMaterial({ color: 0xffffff })

        subtitleText.text = 'JobSpy'
        button1.text = ' ◂ '
        button2.text = ' ▸ '
        button3.text = '◂ Back      '

        button1.name = 'buttonNext'
        button2.name = 'buttonBack'
        button3.name = 'buttonHome'

        button1.fontWeight = 'bold'
        button2.fontWeight = 'bold'
        button3.fontWeight = 'bold'

        subtitleText.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6,
          -350
        )
        button1.position.set(-200, window.innerHeight / 2 / 6 - 350, 10)
        button2.position.set(200, window.innerHeight / 2 / 6 - 350, 10)
        button3.position.set(
          (-1 * window.innerWidth) / 2 / 6,
          window.innerHeight / 2 / 6 - 400,
          10
        )
      }
    }
  }
}

function animateTitle(title, init, promise) {
  var typingSpeed = 1
  if (init) {
    typingSpeed = 100
  }
  cursor.material.side = THREE.BackSide
  badTVPass.uniforms.distortion.value = 5
  badTVPass.uniforms.distortion2.value = 2
  rgbPass.uniforms.amount.value = 0.99

  return new Promise((resolve) => {
    for (let i of pages) {
      for (let e of i.children) {
        e.text = ''
      }
    }

    text.text = ''
    var i = 0
    function typeAnimation() {
      if (i < title.length) {
        text.dispose()
        text.text += title[i]
        i++
        setTimeout(typeAnimation, 5 + Math.random() * typingSpeed)
      } else {
        badTVPass.uniforms.distortion.value = 0.1
        badTVPass.uniforms.distortion2.value = 1
        rgbPass.uniforms.amount.value = 0.002
        cursor.material.side = THREE.FrontSide
        resolve(promise)
      }
    }
    typeAnimation()
  })
}

init()
animate()
