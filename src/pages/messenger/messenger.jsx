import "./messenger.css"
import Dialogs from "../../components/Dialogs/Dialogs";

export default function Messenger () {
    return (
        <div className="messenger">
            <div className="messengerContacts">
                <div className="messengerContactsWrapper">
                    <input placeholder="Search or start new chat" className="messengerContactsSeacrh"></input>
                </div>
                <div className="messengerDialogs"><span>Chats</span></div>
                <Dialogs></Dialogs>

            </div>
            <div className="messengerTalk">
                <div className="messengerTalksWrapper">BOX</div>
            </div>
        </div>
    )
}