
import React,{useEffect,useState} from 'react';
import './App.css';
import Card from "./components/Card"
import Header from "./components/Header"
import './firebase config/fb'
import app from 'firebase';
import { Link } from 'react-router-dom';

function App() {
  
  const [cards, SetCard] = useState([]);
  useEffect(() => {
    app
      .firestore()
      .collection("OfferBag")
      .onSnapshot((snapshot) => {
        const newCards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(newCards);
        SetCard(newCards);
      });
  }, []);

      
  
  console.log(cards)
 
  return (
    <>
    <Header />
    <div className="home">
    {cards.map((card)=>{
    return(
      <Link to={'/details'}>
      <Card data={card}/>
      </Link>
    )
  })}
    
    </div>
    </>
  );
}

export default App;
