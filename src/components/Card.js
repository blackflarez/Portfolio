function Card(props) {
  return (
    <a className="card" href={props.href}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: -20,
        }}
      >
        <h3 style={{ fontWeight: 500 }}>{props.title.toString()}</h3>
        <h5 className="pill">{props.category}</h5>
      </div>
      <p className="cardText">{props.description}</p>
    </a>
  )
}

export default Card
