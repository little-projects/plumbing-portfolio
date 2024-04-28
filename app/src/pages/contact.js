import React from 'react'

import '../assets/styles/contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.state))
        console.log(this.buildEmail())
        // this.resetForm()
    }

    render() {
        return (
            <div className="contact-form">
                
                <button>
                    <a href={this.buildEmail()}>Email</a>
                </button>
                <p className='instructions'>
                    If you want to get a quote please fill out the below form
                    Dimensions: wxlxh
                    Tile: Full/Half-tiled, number of walls, aprox size of tiles
                    Fir or Supply and fit * we generally work with supply and fit (see brands page)
                    Location
                    Phone number 
                    Do you have a timesale in mind - ASAP, Target month, Flexible, 
                </p>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label id="customer-name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label id="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label id="message">Message</label>
                        
                        <textarea className="form-control" rows="10" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <a href={this.buildEmail()}>Send as an email</a> 
                    </button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    buildEmail() {
        const targetEmail = process.env.REACT_APP_CONTACT_EMAIL;
        const subject = "Test"
        return `mailto:${targetEmail}?subject=${subject}&body=${this.state.message}\nSent from ${this.state.name} using Plumbing Enquiry Form`
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
}

export default Contact;