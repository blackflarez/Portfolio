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
          <p>
            An accessible real-time air qualtity monitoring dashboard app for
            communities around New Zealand.
          </p>
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
        Atmospheric Research (NIWA), and is being developed by a small team as
        part of our final year Research and Development Project.
      </p>

      <h2 className="title">Design</h2>

      <p>
        With accessibility being a core priority, the rationale behind the
        design is the idea that anybody should be able to pick up the app and
        immediatley know how to use it.
        <br />
        <br />
        The app launches with a familiarity to anyone who has used a maps app,
        zooming into your current location. A heatmap gives an immediate cue to
        the area's air quality, with the ability to tap anywhere to get more
        information at a glance, or to scroll up for more context and
        information in a dashboard.
      </p>

      <div className="imageContainer">
        <div style={{ width: '100%' }}>
          <img src={dasher1} alt="Dasher App" />
          <img src={dasher2} alt="Dasher App" />
        </div>
        <p>Figma mobile design mockups.</p>
        <div style={{ width: '100%' }}>
          <img src={dasher3} alt="Dasher App" />
        </div>
        <p>Figma tablet design mockups.</p>
      </div>

      <h2 className="title">Development</h2>
      <p>
        Our team is utilising an Expo, React Native, Firebase, tech stack for
        development. <br />
        <br />
        In doing so, we are able to develop a single frontend application that
        will run natively across a majority of mobile devices, as well as web
        browsers. A backend Python application regularly downloads and cleans
        data, then uploads it to the database to be used by frontend clients.
      </p>
      <div style={{ width: '100%' }}>
        <img src={dasher4} alt="Dasher App" />
      </div>
      <p>Dasher Development Environment.</p>
    </div>
  )
}

export default Dasher
