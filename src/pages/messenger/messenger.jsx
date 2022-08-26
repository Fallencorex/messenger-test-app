import "./messenger.css"
import Dialogs from "../../components/Dialogs/Dialogs";
import TalkAbout from "../../components/TalkAbout/TalkAbout";

export default function Messenger () {
    return (
        <div className="messenger">
            <div className="messengerContacts">
                <div className="messengerContactsWrapper">
                    <input placeholder="Search or start new chat" className="messengerContactsSeacrh"></input>
                    
                    </div>
                <div className="messengerDialogs"><span>Chats</span>
                 </div>
                <Dialogs></Dialogs>
                <Dialogs></Dialogs>
                <Dialogs></Dialogs>
           
                </div>
                
            <div className="messengerTalk">
                <div className="messengerTalksWrapperTop"></div>
                    <div className="messengerTalkBoxTop">
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        <TalkAbout></TalkAbout>
                        </div>
                
            <div className="messengerTalksWrapperBottom">
                <div className="messengerTalkBoxBottom">
                    <div className="messengerInputTop">
                    <input className="messengerTalkBoxInput" placeholder="Type your message"></input>
                    <button className="messengerTalkBoxButton"><img className="messengerSubmitImage" src="./images/submit.png" alt=""/></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}