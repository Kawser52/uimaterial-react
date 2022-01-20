import logo from './logo.svg';
import './App.css';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import News from './component/Card/News';

function App() {
  const [news,setNews]=useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=1fa405b431094ad7943e8d423b35a103')
    .then(res=>res.json())
    .then(data=> setNews(data.articles))
  },[])
  return (
    <div className="App">
     <Card sx={{ maxWidth: 345 }}>
        {
          news.map(nw=><News news={nw}></News>)
        }
    </Card>
        
    </div>
  );
}

export default App;
