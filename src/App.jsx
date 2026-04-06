import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Empty from "./components/Empty";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  return (
    <main className="w-full h-full">
      <Navbar isDarkMode={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)} />
      <div className="cards grid grid-cols-4 gap-4 px-6">
        {cards.length === 0
          ? <Empty />
          : cards.map(card => <Card key={card.id} card={card} />)}
      </div>
    </main>
  )
}

export default App;