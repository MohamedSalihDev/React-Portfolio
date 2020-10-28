import React from "react"

function Contact() {
    return (
        <form>
            <div style={{ margin: "5% 40%;" }}>
                <div className="form-group lg-8">
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input className="form-control" />
                    </div>
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">I never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Please describe your requirements</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

    )
}

export default Contact;
