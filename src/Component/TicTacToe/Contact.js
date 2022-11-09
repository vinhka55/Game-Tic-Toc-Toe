

function Contact(){
    return(
        <div className="contact">
            <p style={{textAlign:'center'}}>Test react router thôi chứ form không hoạt động đâu</p>
            <form className="contact-form">
                <input placeholder="Your name..." className="name"></input>
                <input type='email' placeholder="Your email..." className="email"></input>
                <textarea className="massege">Your massege...</textarea>
                <button className="btn-send">Send</button>
            </form>
        </div>
    )
}

export default Contact