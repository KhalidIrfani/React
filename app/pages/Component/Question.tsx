import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import arrow from "public/arrow.png"
import Image from 'next/image';



const Question = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <button id="example-collapse-text" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
                    <h6>How do I sell on HypeIndustry? <span> <Image src={arrow} alt='' /></span> </h6>
                </button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br />
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br />
                            the required information. We ll notify you as soon as your request has been approved.</p>
                    </div>
                </Collapse>
            </div>   


            <div>
                <button id="example-collapse-text" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
                    <h6>I request to become a seller, how long it will take to get approved? <span> <Image src={arrow} alt='' /></span> </h6>
                </button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br />
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br />
                            the required information. We ll notify you as soon as your request has been approved.</p>
                    </div>
                </Collapse>
            </div>   

            <div>
                <button id="example-collapse-text" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
                    <h6>How do I delete my account? <span> <Image src={arrow} alt='' /></span> </h6>
                </button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br />
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br />
                            the required information. We ll notify you as soon as your request has been approved.</p>
                    </div>
                </Collapse>
            </div>   


            <div>
                <button id="example-collapse-text" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
                    <h6>Can I share my seller privilage with others? <span> <Image src={arrow} alt='' /></span> </h6>
                </button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br />
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br />
                            the required information. We ll notify you as soon as your request has been approved.</p>
                    </div>
                </Collapse>
            </div>   



            <div>
                <button id="example-collapse-text" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
                    <h6>Create a several seller account? <span> <Image src={arrow} alt='' /></span> </h6>
                </button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br />
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br />
                            the required information. We ll notify you as soon as your request has been approved.</p>
                    </div>
                </Collapse>
            </div>   


            <div>
                <button id="example-collapse-text" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}  >
                    <h6>How do I became a seller, If i have a store outside the USA? <span> <Image src={arrow} alt='' /></span> </h6>
                </button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br />
                            have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br />
                            the required information. We ll notify you as soon as your request has been approved.</p>
                    </div>
                </Collapse>
            </div>  
            
        </>
    );
}

export default Question;