import Button from '../components/Button'
import vxttest1 from '../images/vxttest1.png'

function VxtTest() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">VxtTest</h1>
          </div>
          <p>
            First place for the Vxt Virtual Competition; automating the testing
            of Vxt infrastructure in a handy web interface.
          </p>
          <div>
            <p className="pill2">React</p>
            <p className="pill2">NodeJS + Express</p>
            <p className="pill2">JavaScript</p>
            <p className="pill2">ngrok</p>
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        VxtTest automates some of the most common unit tests for Vxt Call
        software in a simple web app, developed with two teammates in a timespan
        of 48 hours.
        <br />
        <br />
        Tests include backend testing, utilising a server and APIs to test
        various calls and flows from Vxt's phones and our own phones. Tests also
        include frontend testing, using Selenium to automate functionality such
        as searches and logging in.
      </p>

      <h2 className="title">Development</h2>

      <p>
        Initially, our main hurdle was understanding the technologies and APIs
        required. But once we (sort of) got over that, our concern was
        differenciating ourselves from the other teams.
        <br />
        <br />
        This is when I thought to create a web based frontend, where tests could
        easily be accessed in a simple user interface, rather than tediously
        typing them all in a CLI.
      </p>

      <div className="imageContainer">
        <div style={{ width: '100%' }}>
          <img src={vxttest1} alt="VxtTest App" />
        </div>
        <p>VxtTest in action.</p>
      </div>
    </div>
  )
}

export default VxtTest
