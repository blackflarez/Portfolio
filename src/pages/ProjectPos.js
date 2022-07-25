import Button from '../components/Button'
import pos1 from '../images/pos1.png'
import pos2 from '../images/pos2.png'
import pos3 from '../images/pos3.png'

function ProjectPos() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">ProjectPOS</h1>
          </div>
          <p>An intiutive Point of Sale for restaurant businesses.</p>
          <div>
            <p className="pill2">Expo</p>
            <p className="pill2">React Native</p>
            <p className="pill2">JavaScript</p>
            <p className="pill2">Firebase</p>
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        This is a self-developed mobile POS app made to replace an aging Windows
        XP POS system at my family business, without the costs of solutions out
        there.
        <br />
        <br />
        Currently, as someone with intimate usage of the POS system in the real
        world, I have been aiming to replicate the most useful core
        functionality, while aligning it with modern sensibilities and
        conviniences.
      </p>

      <h2 className="title">Design</h2>

      <p>
        I find that muscle memory is a key when effectively navigating a POS
        system. This is why I aim to keep the design simple and consistent,
        without too many moving parts.
      </p>

      <div className="imageContainer">
        <div style={{ width: '100%' }}>
          <img src={pos1} alt="ProjectPos App" />
          <img src={pos2} alt="ProjectPos App" />
        </div>
        <p>Figma design mockups.</p>
      </div>

      <h2 className="title">Development</h2>
      <p>
        This is mainly an Expo, React Native project with Firebase
        authentication. <br />
        <br />
        Though only a few commits in, I have been focusing on keeping the code
        clean. Stakes are high on a busy night, so it's important to keep this
        app as reliable as possible.
      </p>
      <div style={{ width: '100%' }}>
        <img src={pos3} alt="ProjectPos App" />
      </div>
      <p>Early ProjectPOS development build.</p>
    </div>
  )
}

export default ProjectPos
