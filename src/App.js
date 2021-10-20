import React, {useState} from 'react';
import './App.css';
import { Col, Row, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './Component/SideBar';
import Feed from './Component/Feed';
import TwitterFeed from './Component/TwitterFeed'
import FacebookFeed from './Component/FacebookFeed'

function App() {
  
  const [feedType, setFeedType] = useState('home')

  const changeFeed = (type) => {
    setFeedType(type)
  }
  return (
      <Row>
        <Col sm={4} className="bg-light">
          <SideBar/>
        </Col>
        <Col sm={8}>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={()=>changeFeed('home')} active={feedType === 'home'}>Our Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>changeFeed('twitter')} active={feedType === 'twitter'}>Twitter Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>changeFeed('facebook')} active={feedType === 'facebook'}>Facebook Feed</Nav.Link>
            </Nav.Item>
          </Nav>
          {feedType === 'twitter' ? <TwitterFeed /> : feedType === 'facebook' ? <FacebookFeed /> : <Feed/>}
        </Col>
        <footer class="bg-light text-center text-lg-start bg-light">
          <div class="text-center p-3">
            © 2021 Copyright   &  
            <a class="text-dark" href="mailto:saam.mode@gmail.com"> Created by: Saam Mohamed</a>
          </div>
        </footer>
      </Row>
  );
}

export default App;
