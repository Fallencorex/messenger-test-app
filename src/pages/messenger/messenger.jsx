import "./messenger.css"
import Dialogs from "../../components/Dialogs/Dialogs";
import TalkAbout from "../../components/TalkAbout/TalkAbout";
import { historyDialogs } from "../../storage/historyDialogs";
import { useEffect, useState } from "react";

export default function Messenger() {

    const [dialogs, setDialogs] = useState(historyDialogs);
    const [newMessage, setNewMessage] = useState("");
    const [currentDialog, setCurrentDialog] = useState(0);
    const [sendRequest, setsendRequest] = useState(false);

    useEffect(() => {
        if (sendRequest) {
            setsendRequest(false);
            const saveCurrentPage = currentDialog;
            const fetchData = async (currentTime, pushMessage) => {
                await fetch('https://api.chucknorris.io/jokes/random')
                .then((response) => response.json())
                .then((response) => { pushMessage[saveCurrentPage]?.messages.push(sampleMessage(String(dialogs[saveCurrentPage]?.imgUrl), response.value, currentTime, '1')) })
                .then(() => { setDialogs(pushMessage); })
                .catch((e) => console.error(e));
                return () => clearTimeout(countDown);
            };

            const countDown = setTimeout(() => {
                const currentTime = new Date().toLocaleString();
                const pushMessage = JSON.parse(JSON.stringify(dialogs));
                fetchData(currentTime, pushMessage);
            }, Math.floor(Math.random() * (15000 - 10000) + 10000));
        }

    }, [sendRequest])

    function sampleMessage(imgUrl, text, currentTime, ownerMessage) {
        return {
            imgUrl: imgUrl,
            text: text,
            date: String(currentTime.split('.').join('/')),
            ownerMessage: ownerMessage
        }
    }

    const handleSubmit = () => {
        const currentTime = new Date().toLocaleString();
        const pushMessage = JSON.parse(JSON.stringify(dialogs));
        pushMessage[currentDialog]?.messages.push(sampleMessage('', newMessage, currentTime, '0'));
        setDialogs(pushMessage);
        setNewMessage("");
        setsendRequest(true);
    }

    function changeDialog(elem) {
        setCurrentDialog(elem.id - 1);
    }

    return (
        <div className="messenger">
            <div className="messengerContacts">
                <div className="messengerContactsWrapper">
                    <img className="messengerOwnerImage" src="./images/0.png" alt=""></img>
                    <input placeholder="Search or start new chat" className="messengerContactsSeacrh"></input>
                </div>
                <div className="messengerDialogs"><span>Chats</span>
                </div>
                {dialogs.map((elem) =>
                    <div onClick={() => { changeDialog(elem) }}>
                        <Dialogs userImage={elem.imgUrl} userName={elem.name} />
                    </div>
                )}
            </div>
            <div className="messengerTalk">
                <div className="messengerTalksWrapperTop"><img className="messengerDialogImage" src={dialogs[currentDialog].imgUrl} alt=""></img></div>
                <div className="messengerTalkBoxTop">
                    {
                        dialogs[currentDialog]?.messages?.map((elem) =>
                            <TalkAbout imgUrl={elem.imgUrl} text={elem.text} date={elem.date} ownerMessage={Boolean(Number(elem.ownerMessage))} />
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