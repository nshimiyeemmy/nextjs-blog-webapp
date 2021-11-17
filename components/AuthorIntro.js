
import { Col, Image, Media, Row } from 'react-bootstrap';

export const AuthorIntro = () => {
    return (
        <Row>
        <Col md="8">
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro">
            <Image
              roundedCircle
              width={64}
              height={64}
              className="mr-3"
              src="https://avatars.githubusercontent.com/u/52126336?v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0">Hello👋 Awesome People,</h5>
              <p className="welcome-text" style={{paddingTop:"15px"}}>
              I'm Emmy Nshimiye based in Rwanda and I am an experienced software developer and freelancer,
                I write daily development tips for you,so that we can learn something new or refresh something every single day!.
              </p>
            </Media.Body>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
      </Row>
    )
}
