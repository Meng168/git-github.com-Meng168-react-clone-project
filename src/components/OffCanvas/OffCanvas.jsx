import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvas({...props }) {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        localStorage.setItem("key", "alert");
    }
    
    return (
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Welcome To You
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                ស្វាគមន៍មកកាន់គេហទំព័រ Online Shopping Marketplace🥰🥰🥰
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default OffCanvas