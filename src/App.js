import './App.css'

function App() {
  return (
    <div className="content">
      <body>
        <header>
          <div class="header">
            <h1 class="title">
              Hi, I'm Ruben Gueorguiev. <br />
              <br /> I design and develop apps, websites and games with an
              emphasis on a great user experience.
            </h1>

            <div className="outline">
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="mailto:rubengueorguiev@gmail.com"
              >
                Email
              </a>
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/blackflarez"
              >
                GitHub
              </a>
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ruben-gueorguiev-1bb0151b8/"
              >
                LinkedIn
              </a>
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="RubenGueorguiev.pdf"
              >
                CV
              </a>
            </div>
          </div>
        </header>

        <h2 className="title">Work in progress</h2>

        <a href="/" className=" card">
          <div>
            <h3>Dasher</h3>
            <p>
              An accessible real-time air qualtity monitoring dashboard app for
              communities around New Zealand.
            </p>
          </div>
          <h5 class="pill">Mobile Development</h5>
        </a>

        <a href="/" className=" card">
          <div>
            <h3>ProjectPOS</h3>
            <p>An intiutive Point of Sale for restaurant businesses.</p>
          </div>
          <h5 class="pill">Mobile Development</h5>
        </a>

        <h2 className="title">Completed projects</h2>

        <h3>2022</h3>
        <a href="/" className=" card">
          <div>
            <h3>VxtTest</h3>
            <p>
              First place for the Vxt Virtual Competition; automating the
              testing of Vxt infrastructure in a handy web interface.
            </p>
          </div>
          <h5 class="pill">Testing / Automation</h5>
        </a>
        <a href="/" className=" card">
          <div>
            <h3>SmashBlock</h3>
            <p>
              A fun mobile clicker game with satisfying haptics and destruction
              physics.
            </p>
          </div>
          <h5 class="pill">Game Development</h5>
        </a>
        <a href="/" className=" card">
          <div>
            <h3>Retro Linktree</h3>
            <p>
              A retro terminal landing page website with realistic CRT shaders.
            </p>
          </div>
          <h5 class="pill">Web Development</h5>
        </a>

        <h3>2021</h3>
        <a href="/" className=" card">
          <div>
            <h3>JobSpy</h3>
            <p>
              Aggrigates job listings from the top job posting sites and
              presents them in one simple website.
            </p>
          </div>
          <h5 class="pill">Fullstack Development</h5>
        </a>
        <a href="/" className=" card">
          <div>
            <h3>Software Practice Empirical Evidence Repository</h3>
            <p>
              A searchable database with evidence about different claims and
              different Software Engineering practices.
            </p>
          </div>
          <h5 class="pill">Frontend Development</h5>
        </a>

        <a href="/" className=" card">
          <div>
            <h3>React Native 3D Model</h3>
            <p>
              A fully textured GLTF model viewable on mobile devices, utilising
              ExpoTHREE.
            </p>
          </div>
          <h5 class="pill">Mobile Development</h5>
        </a>

        <h3>2020</h3>
        <a href="/" className=" card">
          <div>
            <h3>Pettokonpanion</h3>
            <p>A mini Java based game inspired by Tamagotchi.</p>
          </div>
          <h5 class="pill">Game Development</h5>
        </a>
      </body>
    </div>
  )
}

export default App
