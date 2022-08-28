import "./talkAbout.css"

export default function talkAbout({imgUr, tex, dat, ownerMess}) {
    return(
        <div className="talkAbout">
            <div className={ownerMess ? "talkAboutTop" : "talkAboutTop2"}>
                <img className={ownerMess ? "talkAboutImg" : "talkAboutImg2"} src={imgUr} alt=""/>
                <p className={ownerMess ? "talkAboutMessage" : "talkAboutMessage2"}>{tex}</p>
                <div className={ownerMess ? "talkAboutDate" : "talkAboutDate2"}>{dat}</div>
            
           
            </div>
            
        </div>
    );
}

