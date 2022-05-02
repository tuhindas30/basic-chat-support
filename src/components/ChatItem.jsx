const ChatItem = ({ chat, selectedChatId, onClick }) => {
  const lastMessage =
    chat.messageList.length > 0
      ? chat.messageList[chat.messageList.length - 1].message
      : "";
  const isSelected = chat.id === selectedChatId;
  return (
    <>
      <div
        className="card"
        onClick={() => onClick(chat)}
        style={{
          backgroundColor: isSelected ? "rgba(0, 0, 0, 0.2)" : "white",
        }}>
        <div className="image-container">
          <img src={chat.imageURL} alt={chat.title} />
        </div>
        <div className="chat-details">
          <p>{chat.title}</p>
          <p>{chat.orderId}</p>
          <p className="text-grey">{lastMessage}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ChatItem;

/*
  id: 1
  title: "Flipkart Support"
  imageURL: "https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/4/n/n/boat-stone-grenade-original-imafg96ffpnpgdv4.jpeg?q=90"
  orderId: "OD1234567890"
  latestMessageTimestamp: 1632205237669
  */
