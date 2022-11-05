import Button from '../components/Button'
import nftgo1 from '../images/nftgo1.png'
import nftgo2 from '../images/nftgo2.png'
import nftgo3 from '../images/nftgo3.png'

function NftGo() {
  return (
    <div className="content">
      <header>
        <div className="header">
          <div>
            <Button title="←" href="/" sameTab={true} />
            <h1 className="title">NFT GO</h1>
          </div>

          <div>
            <p className="pill2">React Native</p>
            <p className="pill2">NodeJS + Express</p>
            <p className="pill2">Alchemy</p>
            <p className="pill2">HardHat</p>
            <p className="pill2">Solidity</p>
            <p className="pill2">MetaMask</p>
          </div>
        </div>
      </header>

      <h2 className="title">Description</h2>

      <p>
        NFT GO is a prototype AR app which scatters treasures in various GPS
        locations, inspired by Pokémon Go. These treasures can be found within a
        radius and claimed as an NFT.
        <br />
        <br />
        This app was created as my project for Blockchain & Cryptocurrency
        Technology at AUT. My aim for the future of this project is to partner
        with NFT artists to create unique, location specific tokens.
      </p>

      <h2 className="title">Design</h2>

      <div className="imageContainer">
        <div style={{ width: '100%' }}>
          <img src={nftgo3} alt="NFT GO Mockup" />
        </div>
        <p>NFT GO Figma mockup design.</p>
      </div>

      <h2 className="title">Development</h2>

      <div className="imageContainer">
        <div style={{ width: '100%' }}>
          <img src={nftgo2} alt="NFT GO App" />
          <img src={nftgo1} alt="NFT Go App" />
        </div>
        <p>NFT GO prototype on iOS.</p>
      </div>
    </div>
  )
}

export default NftGo
