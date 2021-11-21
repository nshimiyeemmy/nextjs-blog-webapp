import Head from 'next/head'
import { Container } from "react-bootstrap"
import Navigationbar from "./Navigationbar"

const PageLayout = ({children,className}) => {
    return (
        <>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
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
        </>
    )
}

export default PageLayout
