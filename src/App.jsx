import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Empty from "./components/Empty";
import AddNoteMenu from "./components/AddNoteMenu";

function App() {
  const [cards, setCards] = React.useState([]);

  return (
    <main>
      <Navbar/>
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {cards.length === 0
          ? <Empty />
          : cards.map(card => <Card key={card.id} card={card} />)}
      </div>
      <AddNoteMenu />
    </main>
  )
}

export default App;