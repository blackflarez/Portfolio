import Button from '../components/Button'
import jobspy1 from '../images/jobspy1.png'
import jobspy2 from '../images/jobspy2.png'
import jobspy3 from '../images/jobspy3.png'

function JobSpy() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">JobSpy</h1>
          </div>

          <div>
            <p className="pill2">HTML + CSS</p>
            <p className="pill2">NodeJS + Express</p>
            <p className="pill2">JavaScript</p>
            <p className="pill2">Python</p>
            <p className="pill2">Stripe</p>
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        JobSpy was created for Program Design and Construction at AUT. It uses a
        job scraping algorithm to find developer jobs on popular jobseeker
        websites such as Seek and Trade Me. Just search for a desired job and be
        presented with relevant results. Employers are also able to purchase
        their own job listings and have them featured on the front page. <br />
        <br />I was mainly responsible for designing the UI/UX, frontend
        development, integration, and the job listing payment gateway.
      </p>

      <h2 className="title">Development</h2>

      <div style={{ width: '100%' }}>
        <img src={jobspy1} alt="JobSpy App" />
      </div>
      <p>JobSpy in action.</p>
      <div style={{ width: '100%' }}>
        <img src={jobspy2} alt="JobSpy App" />
        <img src={jobspy3} alt="JobSpy App" />
      </div>
      <p>JobSpy's listing feature.</p>
    </div>
  )
}

export default JobSpy
