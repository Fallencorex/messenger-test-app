import "./talkAbout.css"

export default function talkAbout({imgUrl, text, date, ownerMessage}) {
    return(
        <div className="talkAbout">
            <div className={ownerMessage ? "talkAboutTop" : "talkAboutTopOwner"}>
                <img className={ownerMessage ? "talkAboutImg" : "talkAboutImgOwner"} src={imgUrl} alt=""/>
                <p className={ownerMessage ? "talkAboutMessage" : "talkAboutMessageOwner"}>{text}</p>          
            </div>
            <div className={ownerMessage ? "talkAboutDate" : "talkAboutDateOwner"}>{date}</div>
        </div>
    );
}

