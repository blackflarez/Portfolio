import './App.css'

function App() {
  return (
    <div className="content">
      <body>
        <header>
          <h1>
            Hey, I'm <span className="gradient-text">Ruben Gueorguiev</span>.
          </h1>

          <div className="card">
            <h4>
              <a className="link" href="/">
                Email
              </a>
            </h4>

            <h4>
              <a className="link" href="/">
                GitHub
              </a>
            </h4>

            <h4>
              <a className="link" href="/">
                LinkedIn
              </a>
            </h4>
          </div>
        </header>

        <h2 className="title">Work in progress</h2>

        <a href="/" className="link">
          <div>
            <h3>Dasher</h3>
            <p>
              An accessible real-time air qualtity monitoring dashboard app for
              communities around New Zealand.
            </p>
          </div>
        </a>

        <a href="/" className="link">
          <div>
            <h3>SmashBlock</h3>
            <p>
              A fun mobile clicker game with satisfying haptics and destruction
              physics.
            </p>
          </div>
        </a>

        <h2 className="title">Completed projects</h2>

        <h5 className="pill">2022</h5>
        <a href="/" className="link">
          <div>
            <h3>VxtTest</h3>
            <p>
              First place for the Vxt Virtual Competition software category;
              automating the testing of Vxt infrastructure.
            </p>
          </div>
        </a>

        <h5 className="pill">2021</h5>

        <a href="/" className="link">
          <div>
            <h3>Software Practice Empirical Evidence Repository</h3>
            <p>
              A searchable database with evidence about different claims and
              different Software Engineering practices.
            </p>
          </div>
        </a>

        <a href="/" className="link">
          <div>
            <h3>React Native 3D Model</h3>
            <p>
              A fully textured GLTF model viewable on mobile devices, utilising
              ExpoTHREE.
            </p>
          </div>
        </a>

        <a href="/" className="link">
          <div>
            <h3>JobSpy</h3>
            <p>
              Aggrigates job listings from the top job posting sites and
              presents them in one simple website.
            </p>
          </div>
        </a>

        <h5 className="pill">2020</h5>
        <a href="/" className="link">
          <div>
            <h3>Pettokonpanion</h3>
            <p>A mini Java based game inspired by Tamagotchi.</p>
          </div>
        </a>
      </body>
    </div>
  )
}

export default App
