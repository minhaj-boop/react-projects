import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';

function App() {

  const [news, setNews] = useState([]);

  useEffect(()=> {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-02&sortBy=publishedAt&apiKey=624bfd658f4f434686c7e04d55d41898')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])

  return (
    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" /> 
        :
        <Row xs={1} md={3} className="g-4">
          { 
            news.length === 0 ? <Spinner animation="grow" variant="dark" />
            : 
            news.map(nw => <Cards news={nw}></Cards>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
