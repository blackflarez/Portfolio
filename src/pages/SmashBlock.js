import Button from '../components/Button'
import smashblock1 from '../images/smashblock1.png'
import smashblock2 from '../images/smashblock2.png'
import smashblock3 from '../images/smashblock3.png'
import smashblock4 from '../images/smashblock4.png'
import smashblock5 from '../images/smashblock5.png'

function SmashBlock() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">SmashBlock</h1>
          </div>

          <div>
            <p className="pill2">Expo</p>
            <p className="pill2">React Native</p>
            <p className="pill2">JavaScript</p>
            <p className="pill2">Firebase</p>
            <p className="pill2">ThreeJS</p>
            <p className="pill2">Blender</p>
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        The object of the game is to mine the cube and collect resources, build
        better tools, unlock new areas, and advance your mining career. I
        developed game in ThreeJS, with models and animations made in Blender,
        and designing and developing the UI in React Native.
      </p>

      <h2 className="title">Development</h2>

      <div style={{ width: '100%' }}>
        <img src={smashblock1} alt="SmashBlock App" />
        <img src={smashblock2} alt="SmashBlock App" />
        <img src={smashblock3} alt="SmashBlock App" />
        <img src={smashblock4} alt="SmashBlock App" />
      </div>
      <p>SmashBlock gameplay on iOS.</p>
      <div style={{ width: '100%' }}>
        <img src={smashblock5} alt="SmashBlock App" />
      </div>
      <p>A prototype of SmashBlock.</p>
    </div>
  )
}

export default SmashBlock
