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
          <p>
            A fun mobile clicker game with satisfying haptics and destruction
            physics.
          </p>
          <div>
            <p className="pill2">Expo</p>
            <p className="pill2">React Native</p>
            <p className="pill2">JavaScript</p>
            <p className="pill2">Firebase</p>
            <p className="pill2">ThreeJS</p>
            <p className="pill2">Blender</p>
          </div>

          <div style={{ alignSelf: 'flex-end', marginTop: 30 }}>
            <Button
              title="View on GitHub"
              href="https://github.com/blackflarez/SmashBlock"
            />
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        Built on my{' '}
        <a href="https://github.com/blackflarez/ReactNative3DModel">
          ReactNative3DModel
        </a>{' '}
        project, I expanded this engine to a fully fledged self made clicker
        game. The object of the game is to mine the cube and collect resources,
        build better tools, unlock new areas, and advance your mining career.
      </p>

      <h2 className="title">Development</h2>
      <p>
        Initially, the game started out as a simple prototype, utilising the
        haptic engine in iPhones mixed with destruction animations baked in
        blender to create quite a satisfying combo.
        <br />
        <br />
        As my first large scale game, I learned far too much in trial and error
        as I went along. I learned how to develop custom dynamic user interfaces
        in React Native, came up with unique solutions to the unique problems
        game development presents, discovered modelling and animating physics in
        Blender, and learned how to update game data in real time using Firebase
        to enable online functionality.
        <br />
        <br />
        Though the game is playable, it may have been a bit too ambitious.
      </p>
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
