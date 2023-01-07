import "./style.css"
export default function Message(props) {
    console.log(props)
    const{banner,type ,rate,imdb,translate,title}=props
    return ( <div className="father"> 
    <div className="section">
        <div className="banner"><img src={banner} /></div>
        <div className="text">
        <div className="type">{type}</div>
        <div className="rate">{rate}</div>
        <div className="imdb">{imdb}</div>
        <div className="translate">{translate}</div>
        <div className="title">{title}</div>
        </div>
    </div>
    </div>
    )
}