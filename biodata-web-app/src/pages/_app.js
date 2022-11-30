import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { 
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <>
   <Provider store={store}>
    <main className={styles.main}>
      <Row>
        <Col md={{ offset: 0, size: 12 }} sm="12">
          <Card
            className="my-2"
            color="dark"
            outline
            style={{width: '100%'}}
          >
            <CardHeader>
              Form Biodata
            </CardHeader>
            <CardBody>
              <Component {...pageProps} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      </main>
    </Provider>
  </>
}

export default MyApp
