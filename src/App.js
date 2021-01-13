import Nav from './nav'
import { Container } from "react-bootstrap"


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Nav/>
      </div>
    </Container>
  )
}

export default App
