import React from 'react';
import logo from './favicon.png';
import './App.css';
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-black">1회성 결제</Card.Title>
          <Card.Text className="text-black">
            문화상품권 외 여러 결제수단 지원.
          </Card.Text>
          <Button variant="primary">2900₩/30일</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title className="text-black">정기결제</Card.Title>
          <Card.Text className="text-black">
            신용카드만 지원.
          </Card.Text>
          <Button variant="primary">2100₩/월</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
