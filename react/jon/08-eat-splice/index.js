import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data = [
  { id: 1, name: "Bo", image: "https://picsum.photos/50", balance: 0 },
  { id: 2, name: "Lowe", image: "https://picsum.photos/50", balance: 0 }
]


function App() {
  const [friends, setFriends] = useState(data);
  const [selFriend, setSelFriend] = useState(null)

  const handleAddFriend = (friend) => {
    const date = new Date();
    setFriends(val=> [...val, {
      id: date.getTime(),
      name: friend.name,
      image: friend.image,
      balance: friend.balance
    }])
  }

  const handleSelectFriend = (selectedFriend) => {
    setSelFriend(selectedFriend)
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelFriend(null);
  }

  return (
    <div className="app">
      <FriendList friends={friends} onAddFriend={handleAddFriend} onFriendSelect={handleSelectFriend}></FriendList>
      {selFriend && <Calculator friend={selFriend} onSplitBill={handleSplitBill}></Calculator>}
    </div>
  );
}

function FriendList({friends, onAddFriend, onFriendSelect}) {
  const [showAddFriendPanel, setShowAddFriendPanel] = useState(false);

  const handleAddFriend = (friend) => {
    setShowAddFriendPanel(!showAddFriendPanel)
    onAddFriend(friend)
  }
  return (
    <div className="col">
      {
        friends.map(el=><Friend onFriendSelect={onFriendSelect} friend={el}></Friend>)
      }
      {!showAddFriendPanel && <button onClick={()=>setShowAddFriendPanel(val=>!val)}>Add friend</button>}
      {showAddFriendPanel && <AddFriend onAddFriend={handleAddFriend}></AddFriend>}
    </div>
  )
}
function AddFriend({onAddFriend}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://picsum.photos/50")
  const [balance, setBalance] = useState(0)

  const addFriend = () => {
    const data = {
      name, image, balance
    }
    onAddFriend(data)
  }
  return (
    <form>
      <div>
        <label>Name:</label>
        <input value={name} onChange={e=>setName(e.target.value)}></input>
      </div>
      <div>
        <label>Image:</label>
        <input value={image} onChange={e=>setImage(e.target.value)}></input>
      </div>
      <div>
        <label>Balance:</label>
        <input value={balance} onChange={e=>setBalance(e.target.value)} type='number'></input>
      </div>
      <div>
        <button onClick={addFriend}>Add</button>
      </div>
    </form>
  )
}
function Friend ({friend, onFriendSelect}) {
  return (
    <div className='friend'>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      <p>Balance is {friend.balance}</p>
      <button onClick={e=>onFriendSelect(friend)}>Select</button>
      <hr></hr>
    </div>
  )
}

function Calculator ({friend, onSplitBill}) {
  return (
    <div>
      <div className="col">Calculator</div>
      <Bill onSplitBill={onSplitBill} friend={friend}></Bill>
      <hr/>
      {JSON.stringify(friend)}
    </div>
  )
}

function Bill ({friend, onSplitBill}) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>

      <h2>Split a bill with {friend.name}</h2>

      <div>
        <label>💰 Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div>
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      </div>

      <div>
        <label>👫 {friend.name}'s expense</label>
        <input type="text" disabled value={paidByFriend} />
      </div>

      <div>
        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{friend.name}</option>
        </select>
      </div>

      <button>Split bill</button>
    </form>
    </div>
    )
}

export default App;
