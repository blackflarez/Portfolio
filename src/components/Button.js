function Button(props) {
  return (
    <a
      className="link"
      target={props.sameTab ? '' : '_blank'}
      rel="noreferrer"
      href={props.href}
    >
      {props.title}
    </a>
  )
}

export default Button
