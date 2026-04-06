import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Empty from "./components/Empty";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  
  useEffect(() => {
    setCards([{ id: 1, title: "Your First Note", content: "This is the content of your first note." }, { id: 2, title: "Your Second Note", content: "This is the content of your second note." }, { id: 3, title: "Your Third Note", content: "This is the content of your third note." }])
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode])

  return (
    <main>
      <Navbar isDarkMode={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)} />
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {cards.length === 0
          ? <Empty />
          : cards.map(card => <Card key={card.id} card={card} />)}
      </div>
    </main>
  )
}

export default App;