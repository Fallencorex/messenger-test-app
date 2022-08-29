import "./dialogs.css"

export default function Dialogs({userImage, userName}) {
    return(
        <div className="dialogs">
            <img className="dialogsImg" src={userImage} alt=""/>
            <div className="dialogsOnline"></div>
            <span className="dialogsName">{userName}</span>
            <div className="timestamp"></div>
        </div>
    );
}



