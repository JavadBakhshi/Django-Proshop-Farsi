import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <p align="right">
        <font face="yekan" size="+1">
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                       <p align="right">
                <font face="yekan" size="+3">
                <Nav.Link>ورود</Nav.Link>
                </font>
            </p>  
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>ورود</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>ترابری</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>ترابری</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>پرداخت</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>پرداخت</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>ثبت سفارش</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>ثبت سفارش</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
        </font>
            </p>
    )
}

export default CheckoutSteps
