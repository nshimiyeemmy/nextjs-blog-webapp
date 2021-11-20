
import { AuthorIntro } from 'components/AuthorIntro';
import { CardItem } from 'components/CardItem';
import { CardListItem } from 'components/CardListItem';
import PageLayout from 'components/PageLayout';
//import functions
import { getBlogs } from 'lib/api';
import { Col, Row } from 'react-bootstrap';


export default function index({Blogs}){
  return (
    <PageLayout>
    <AuthorIntro />
    <hr/>
    {/* displaying json data as a string */}
    {JSON.stringify(Blogs)}
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

/*this function is called when you are building your nextjs app & then it will create static page which will be sent to your browser
this means it's called on the server & never called on the client & it's not part of your javascript when it's sent to the browser
Provides props to your page & It will create static page
*/
export async function getStaticProps(){

  const Blogs = await getBlogs();

  return{
    props:{
      Blogs
    }
  }

}
