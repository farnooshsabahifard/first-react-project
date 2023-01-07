import "./style.css"
export default function Update(props) {
    console.log(props)
    const{banner,title ,part}=props
    return ( <div className="father"> 
    <div className="section">
        <div className="banner"><img src={banner} /></div>
        <div className="title">{title}</div>
        <div className="part">{part}</div>
        </div>
    </div>
    
    )
}