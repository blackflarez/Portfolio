import Card from '../components/Card'
import Button from '../components/Button'

function Home() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <h1 className="title">
            Hi, I'm Ruben Gueorguiev. <br />
            <br /> I design and develop apps, websites and games with an
            emphasis on a great user experience.
          </h1>

          <div className="outline">
            <Button title="Email" href="mailto:rubengueorguiev@gmail.com" />
            <Button title="GitHub" href="https://github.com/blackflarez" />
            <Button
              title="LinkedIn"
              href="https://www.linkedin.com/in/ruben-gueorguiev-1bb0151b8/"
            />
          </div>
        </div>
      </header>

      <h2 className="title">Featured projects</h2>

      <h3 className="green year">2022</h3>

      <Card
        href="/nftgo"
        title="NFT GO"
        category="Blockchain Experience"
        description="A Geolocation/Augmented Reality experience, allowing participants to find hidden NFT treasures around New Zealand."
      />

      <Card
        href="/dasher"
        title="Dasher"
        category="Mobile Development"
        description="An accessible real-time air qualtity monitoring dashboard app for
            communities around New Zealand."
      />

      <Card
        href="/vxttest"
        title="VxtTest"
        category="Testing / Automation"
        description="First place for the Vxt Virtual Competition; automating the
          testing of Vxt infrastructure in a handy web interface."
      />

      <Card
        href="/smashblock"
        title="SmashBlock"
        category="Mobile Game Development"
        description="A fun mobile clicker game with satisfying haptics and destruction
          physics."
      />

      <h3 className="green year">2021</h3>

      <Card
        href="/jobspy"
        title="JobSpy"
        category="Web Development"
        description="Aggrigates job listings from the top job posting sites and
          presents them in one simple website."
      />

      <h3 className="green year">2020</h3>
      <Card
        href="/pettokonpanion"
        title="Pettokonpanion"
        category="Game Development"
        description="A mini Java based game inspired by Tamagotchi."
      />
    </div>
  )
}

export default Home
