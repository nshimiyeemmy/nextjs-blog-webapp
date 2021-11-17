
import { AuthorIntro } from 'components/AuthorIntro';
import { CardItem } from 'components/CardItem';
import { CardListItem } from 'components/CardListItem';
import PageLayout from 'components/PageLayout';
import { Col, Row } from 'react-bootstrap';
const index = () => {
  return (
    <PageLayout>
    <AuthorIntro />
    <hr/>
    <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
</PageLayout>
  )
}

export default index
