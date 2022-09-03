import React, { useState, useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '../Tooltip/Tooltip';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice';

const Contact = () => {
    const emailContact = useSelector((state) => state.user.user.email)
    const displayName = useSelector((state) => state.user.user.displayName)
    const user = useSelector(selectUser)
    const [dataForm, setDataForm] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const titleRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name === ""){
            toast.error("Please input your name!");
            nameRef.current.focus()
            return
        } else if (name === ""){
            toast.error("Please input your name!");
            nameRef.current.focus()
            return
        } else if (email === "") {
            toast.error("Please input your email!");
            emailRef.current.focus()
            return
        } else if (phone === "") {
            toast.error("Please input your phone!");
            phoneRef.current.focus()
            return
        } else if (title === "") {
            toast.error("Please input your title!");
            titleRef.current.focus()
            return
        } else if (message === "") {
            toast.error("Please input your message!");
            messageRef.current.focus()
            return
        }
        dataForm.push({
            name: name,
            email: email,
            phone: phone,
            title: title,
            message: message
        })
        setName('')
        setEmail('')
        setPhone('')
        setTitle('')
        setMessage('')
        toast.success('Your message was sent successfully.');
        //console.log('dataForm: ', dataForm);
    }

    useEffect(() => {
        const sendDataForm = () =>{
            fetch(`https://react-clone-email-default-rtdb.firebaseio.com/contact.json`, {
                method: 'PUT',
                body: JSON.stringify(dataForm)
            })
        }
        sendDataForm()
    }, [dataForm, name, email, phone, title, message]);

    return (
        <Container className='custom-container'>
            <Tooltip title="Contact Us"/>
            <HeaderTitle title='Contact Us'/>
            <Row>
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                    <div className="elementor-content">
                        <div className='elementor-content__title'>
                            <span><LocationOnIcon /></span><h3>Call to Us:</h3>
                        </div>
                        <p>
                            We’re available from 10 am – 10 pm EST,<br />
                            7 days a week.
                        </p>
                        <div className='elementor-widget-text-editor'>
                            <h6>Customer Service:</h6>
                            <p>6-146-389-574</p>
                        </div>
                        <div className='elementor-widget-text-editor'>
                            <h6>Careers:</h6>
                            <p>6-146-389-575</p>
                        </div>
                    </div>
                    <div className="elementor-content">
                        <div className='elementor-content__title'>
                            <span><EmailIcon /></span><h3>Write to Us:</h3>
                        </div>
                        <p>
                            Fill out our form and we will contact you
                            within 24 hours.
                        </p>
                        <div className='elementor-widget-text-editor'>
                            <h6>Customer Service:</h6>
                            <p>customer@example.com</p>
                        </div>
                        <div className='elementor-widget-text-editor'>
                            <h6>Careers:</h6>
                            <p>careers@example.com</p>
                        </div>
                    </div>
                    <div className="elementor-content">
                        <div className='elementor-content__title'>
                            <span><EmailIcon /></span><h3>Find Us:</h3>
                        </div>
                        <p>
                            Want to visit our Offline Stores?
                        </p>
                        <div className='elementor-widget-text-editor'>
                            <h6>Go to Store Locator </h6>
                        </div>
                    </div>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={12}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input ref={nameRef} value={user ? displayName : name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name *'/>
                        </div>
                        <div className="form-control">
                            <input ref={emailRef} value={user ? emailContact : email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email *'/>
                        </div>
                        <div className="form-control">
                            <input ref={phoneRef} value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Your Phone'/>
                        </div>
                        <div className="form-control">
                            <input ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Your Title *'/>
                        </div>
                        <div className="form-control">
                            <textarea ref={messageRef} rows="7" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message *'></textarea>
                        </div>
                        <button className='send__message'>{isLoading ? 'Send Message' : 'Loading...'}</button>
                    </form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}

export default Contact
