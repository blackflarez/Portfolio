import Button from '../components/Button'
import dasher1 from '../images/dasher1.png'
import dasher2 from '../images/dasher2.png'
import dasher3 from '../images/dasher3.png'
import dasher4 from '../images/dasher4.png'

function Dasher() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">Dasher</h1>
          </div>

          <div>
            <p className="pill2">Expo</p>
            <p className="pill2">React Native</p>
            <p className="pill2">JavaScript</p>
            <p className="pill2">Firebase</p>
            <p className="pill2">Python</p>
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        By aggrigating, cleaning, and presenting raw air qualtity data, the
        project aims to inform vulnerable communities where air quality often
        exceeds the National Environmental Standards for Air Quality, as well as
        generally informing the public and shaping their understanding of air
        pollution and emissions.
        <br />
        <br />
        The client for this project is the National Institute of Water and
        Atmospheric Research (NIWA), and has been developed by a small team as
        part of our final year Research and Development Project. I was
        responsible for project management, design, and full stack development.
      </p>

      <h2 className="title">Design</h2>

      <div className="imageContainer">
        <div style={{ width: '100%' }}>
          <img src={dasher1} alt="Dasher App" />
          <img src={dasher2} alt="Dasher App" />
        </div>
        <p>Figma mobile design mockups.</p>
      </div>

      <h2 className="title">Development</h2>

      <div style={{ width: '100%' }}>
        <img src={dasher3} alt="Dasher App" />
        <img src={dasher4} alt="Dasher App" />
      </div>
      <p>Dasher Prototype on iOS.</p>
    </div>
  )
}

export default Dasher
