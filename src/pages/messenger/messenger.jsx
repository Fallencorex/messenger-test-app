import "./messenger.css"
import Dialogs from "../../components/Dialogs/Dialogs";
import TalkAbout from "../../components/TalkAbout/TalkAbout";
import { historyDialogs } from "../../storage/historyDialogs";
import { useEffect, useState } from "react";

export default function Messenger() {

    const [dialogs, setDialogs] = useState(historyDialogs);
    const [newMessage, setNewMessage] = useState("");
    const [currentDialog, setCurrentDialog] = useState(0);
    const [boolReq, setBoolReq] = useState(false);


    useEffect(() => {
        if(boolReq) {
        setBoolReq(false);
        const checkPage = currentDialog;
        
        const fetchData = async (currentTime_, pushMessage_) => {
            await fetch('https://api.chucknorris.io/jokes/random')
              .then((response) => response.json())
              .then((response) => {pushMessage_[checkPage]?.messages.push(sampleMessage(String(dialogs[checkPage]?.imgUrl), response.value, currentTime_, '1'))})
              .then(()=> {setDialogs(pushMessage_);})
              .catch((e) => console.error(e));
              return () => clearTimeout(timer);
          };
      
          const timer = setTimeout(() => {
              const currentTime = new Date().toLocaleString();
              const pushMessage = JSON.parse(JSON.stringify(dialogs));
              fetchData(currentTime, pushMessage);
            
            console.log("Кол-во сообщений: " + dialogs[checkPage].messages.length);
            console.log("Номер страницы " + checkPage);
          }, 10000);
        }

    },[boolReq])



    function sampleMessage (imgUr, tex, currentTim, ownerMess) {
        const messa = {
            imgUrl: imgUr,
            text: tex,
            date: String(currentTim.split('.').join('/')),
            ownerMessage: ownerMess
        }
        return messa;
    }

    const handleSubmit = () => {
          const currentTime = new Date().toLocaleString();
          const pushMessage = JSON.parse(JSON.stringify(dialogs));
          pushMessage[currentDialog]?.messages.push(sampleMessage('', newMessage, currentTime, '0'));

        setDialogs(pushMessage);
        setNewMessage('');
        setBoolReq(true);
        
            
          

    }

   function changeDialog(elem) {
        setCurrentDialog(elem.id-1);
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
                <div onClick={()=> {changeDialog(elem)}}>

                    <Dialogs userImage={elem.imgUrl} userName={elem.name} />
                    </div>
                )}
            </div>

            <div className="messengerTalk">
                <div className="messengerTalksWrapperTop"></div>
                <div className="messengerTalkBoxTop">
                    {
                        dialogs[currentDialog]?.messages?.map((elem) =>
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