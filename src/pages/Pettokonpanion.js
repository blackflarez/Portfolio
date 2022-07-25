import Button from '../components/Button'
import pettokonpanion1 from '../images/pettokonpanion1.png'
import pettokonpanion2 from '../images/pettokonpanion2.png'

function Pettokonpanion() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">Pettokonpanion</h1>
          </div>
          <p>A mini Java based game inspired by Tamagotchi.</p>
          <div>
            <p className="pill2">Java</p>
            <p className="pill2">Photoshop</p>
          </div>

          <div style={{ alignSelf: 'flex-end', marginTop: 30 }}>
            <Button
              title="View on GitHub"
              href="https://github.com/blackflarez/Pettokonpanion"
            />
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        A Tamagotchi clone, but it lives on your desktop. Feet, pat and clean
        your pet to keep it happy and alive. Created for a second year
        university project.
      </p>

      <h2 className="title">Development</h2>
      <p>
        Though the game is very small, it was build as my first proper Java
        project. This meant it one of my first Object Oriented projects, and
        therefore everything had to be deliberately planned out with class
        diagrams.
        <br />
        <br />
        The game data such is updated in ticks every second, running on its own
        thread. This is how your pet will graually get hungrier.
      </p>
      <div style={{ width: '100%' }}>
        <img src={pettokonpanion1} alt="Pettokonpanion App" />
        <img src={pettokonpanion2} alt="Pettokonpanion App" />
      </div>
      <p>Pettokonpanion in action.</p>
    </div>
  )
}

export default Pettokonpanion
