import { Container } from "react-bootstrap"
import Navigationbar from "./Navigationbar"

const PageLayout = ({children,className}) => {
    return (
        <Container>
            <Navigationbar />
        <div className={`page-wrapper ${className}`} >
            {children}
        </div>
    <footer className="page-footer">
        <div>
        <a href="#">Twitter</a>{' * '}
        <a href="#">Gmail</a>{' * '}
        <a href="#">LinkedIn</a>{' * '}
        <a href="#">Facebook</a>{' * '}
        <a href="#">Github</a>
        
        </div>
  </footer>
        </Container>
    )
}

export default PageLayout
