import './index.css'

const LaptopOnly = props => {
  const handleClick = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="laptop-container">
      <h1 className="laptop-heading">This App can be viewed only on Desktop</h1>
      <img
        src="https://cdn.dribbble.com/users/788099/screenshots/10905791/media/a68e61df6a99b1813cf5010c79d51eee.png"
        alt="laptop"
        className="laptop-img"
      />
      <div className="d-flex justify-content-center align-items-center w-25">
        <p className="mr-3 p-2 mt-2 text-secondary">On a Desktop?</p>
        <button onClick={handleClick} className="btn btn-warning btn-sm ml-3">Click here</button>
      </div>
    </div>
  )
}

export default LaptopOnly
