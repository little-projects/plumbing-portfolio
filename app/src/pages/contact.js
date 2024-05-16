import React from 'react';

import '../assets/styles/contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            customerStatus: 'New Customer',
            message: '',
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
            <div className='contact-form'>
                
                <button>
                    <a href={this.buildEmail()}>Email</a>
                </button>
                <p className='instructions'>
                    <strong>Please fill out the following form, describing the work you would like to be carried out.</strong><br/>
                </p>
                <form id='contact-form' onSubmit={this.handleSubmit.bind(this)}>
                    <div> {/* Name */}
                        <label id='customer-name'>Name</label>
                        <input type='text' className='input-area' value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                {/* Phone number  */}
                    <div className='input-area'> {/* New / Returning Customer */}
                        <label>
                            <input type='radio' value='New Customer' checked={this.state.customerStatus === 'New Customer'} onChange={this.onOptionChange.bind(this)}/>
                        New Customer</label>

                        <label>
                            <input type='radio' value='Returning Customer' checked={this.state.customerStatus === 'Returning Customer'} onChange={this.onOptionChange.bind(this)}/>
                        Returning Customer</label>
                    </div>
                    <div> {/* Area / Postcode */}
                        <label>Location</label>
                        <input type='text' className='input-area' placeholder='Area or Postcode e.g. Chapel Allerton' value={this.state.location} onChange={this.onLocationChange.bind(this)} />
                    </div>
                    <div> {/* Details / Message */}
                    <p>
                        Feel free to include any additional information that will help us understand your needs better, which might include:
                    <li>How soon you would like the work to be carried out </li>
                    <li>The dimensions of the room (length, width, and height) </li>
                    <li>The number of walls to be tiled, approx size of tiles and if the walls should be full or half-tiled </li>
                    {/* Fir or Supply and fit * we generally work with supply and fit (see brands page) */}
                    </p>
                        <label id='message'>Message</label>
                        <textarea className='input-area' height='40' value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        <a href={this.buildEmail()}>Send as an email</a> 
                    </button>
                </form>
            </div>
        );
    }

    // Capture info provided
    onNameChange(e) { this.setState({ name: e.target.value }) }

    onLocationChange(e) { this.setState({ location: e.target.value }) }

    onOptionChange(e) { this.setState({ customerStatus: e.target.value }) }

    onMessageChange(e) { this.setState({ message: e.target.value }) }

    buildEmail() {
        const targetEmail = process.env.REACT_APP_CONTACT_EMAIL;
        const subject = `${this.state.customerStatus} in ${this.state.location}`;
        const newline = '%0D%0A';
        return `mailto:${targetEmail}?subject=${subject}&body=${this.state.message}${newline}Sent from ${this.state.name} using Plumbing Enquiry Form`
    }

    resetForm() {
        this.setState({
            name: '',
            location: '',
            message: '',
            customerStatus: 'New Customer',
        })
    }
}

export default Contact;