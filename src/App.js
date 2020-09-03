import React, {useState} from 'react';
import logo from './favicon.png';

import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
// import Iframe from 'react-iframe'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const Paddle = window.Paddle;
  const openCheckout  = () => { 
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(Email)) return document.getElementById("notice").innerHTML = '올바른 이메일 주소를 입력해주세요.'
    document.getElementById("notice").innerHTML = '결제를 완료해 주세요.'
    document.getElementById("button_buy").innerHTML = '결제 대기중'
    Paddle.Checkout.open({ 
      product: secret, 
      email: Email,
      successCallback: (data, err) =>{
        console.log(data)
        document.getElementById("notice").innerHTML = '결제해주셔서 감사합니다.\n이메일을 확인해주세요.'
        document.getElementById("button_buy").innerHTML = '결제완료'
        document.getElementById("vat").innerHTML = ''
        document.getElementById("email").style.width ='0px'
        document.getElementById("email").style.height ='0px'
      } 
    })
  }
  const [Email, setEmail] = useState("")
  const email = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div className="App-header">
      
      <h1>파크봇 프리미엄</h1>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-black">1회성 결제</Card.Title>
          <Card.Text className="text-black">
            문화상품권 외 여러 결제수단 지원.
          </Card.Text>
          <Button variant="primary">2900₩/30일</Button>
        </Card.Body>
      </Card> */}

      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title className="text-black">정기결제</Card.Title>
          <Card.Text className="text-black" id="notice">
            Visa/Master카드만 지원.
          </Card.Text>
          <form><input id="email" style={{ width: '250px' }} onChange={email} name="email" type="email" placeholder="email@email.com" value={Email}></input></form>
          <Button variant="primary" onClick={openCheckout} id="button_buy">2100₩/월</Button>
        </Card.Body>
      </Card>
      <p id="vat" style={{ size: '5px' }}>VAT별도.</p>
    </div>
  )
}

export default App;
