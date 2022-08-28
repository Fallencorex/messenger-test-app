import "./messenger.css"
import Dialogs from "../../components/Dialogs/Dialogs";
import TalkAbout from "../../components/TalkAbout/TalkAbout";
import { historyDialogs } from "../../storage/historyDialogs";
import { useEffect, useState } from "react";

export default function Messenger() {

    const [dialogs, setDialogs] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        setDialogs(historyDialogs);
    })

    const handleSubmit = (e) => {
        const currentTime = new Date().toLocaleString();
        const messa = {
            imgUrl: './images/3.jpg',
            text: newMessage,
            date: String(currentTime.split('.').join('/')),
            ownerMessage: '0'
        }

        
          dialogs[2]?.messages.push(messa);
          setNewMessage("");
        setDialogs(dialogs);
    }

    return (
        <div className="messenger">
            <div className="messengerContacts">
                <div className="messengerContactsWrapper">
                    <input placeholder="Search or start new chat" className="messengerContactsSeacrh"></input>

                </div>
                <div className="messengerDialogs"><span>Chats</span>
                </div>
                {dialogs.map((elem) =>

                    <Dialogs userImage={elem.imgUrl} userName={elem.name} />
                )}


            </div>

            <div className="messengerTalk">
                <div className="messengerTalksWrapperTop"></div>
                <div className="messengerTalkBoxTop">
                    {
                        dialogs[2]?.messages?.map((elem) =>
                            <TalkAbout imgUr={elem.imgUrl} tex={elem.text} dat={elem.date} ownerMess={Boolean(Number(elem.ownerMessage))} />
                        )
                    }
                </div>

                <div className="messengerTalksWrapperBottom">
                    <div className="messengerTalkBoxBottom">
                        <div className="messengerInputTop">
                            <input className="messengerTalkBoxInput" placeholder="Type your message" rows="3"
                                onChange={(e) => setNewMessage(e.target.value)}
                                value={newMessage}></input>
                            <button className="messengerTalkBoxButton"><img className="messengerSubmitImage" src="./images/submit.png" alt=""
                                onClick={handleSubmit} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}