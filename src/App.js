import { useEffect, useState } from "react";
import ChatArea from "./components/ChatArea";
import ChatItem from "./components/ChatItem";
import Search from "./components/Search";
import "./index.css";

export default function App() {
  const [chats, setChats] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedChat, setSelected] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
      );
      if (response.status === 200) {
        const parsedData = await response.json();
        setChats(parsedData);
      }
    })();
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredChats = () => {
    return chats.filter((chat) =>
      chat.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div className="App">
      <h1>Filter By Title</h1>
      <Search value={searchInput} onInput={handleSearch} />
      <div
        className="chat-area-container"
        style={{
          flexBasis: selectedChat ? "40%" : "100%",
          height: "80vh",
        }}>
        <div
          style={{ width: selectedChat ? "40%" : "100%", overflowY: "scroll" }}>
          {filteredChats().map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              selectedChatId={selectedChat.id}
              onClick={(chat) => setSelected(chat)}
            />
          ))}
        </div>
        {selectedChat && <ChatArea chat={selectedChat} />}
      </div>
    </div>
  );
}
