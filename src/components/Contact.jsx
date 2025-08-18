import phoneIcon from '/src/assets/phone-icon.png'
import mailIcon from '/src/assets/mail-icon.png'

function Contact(props) {
    // console.log(props)
    return (
        <article className="contact-card">
            <img 
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src={phoneIcon}
                    alt="phone icon" 
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={mailIcon} 
                    alt="mail icon"
                />
                <p>{props.mail}</p>
            </div>
        </article>
    )
}

export default Contact