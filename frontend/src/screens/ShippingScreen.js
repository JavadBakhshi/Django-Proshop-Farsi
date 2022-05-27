import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <p align="right">
        <font face="yekan" size="+1">
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>ترابری</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>آدرس</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='آدرس خود را وارد کنید'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>شهر</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='شهر خود را وارد کنید'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>کد پستی</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='کد پستی خود را ورد کنید'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>کشور</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='نام کشور خود را وارد کنید'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    ادامه
                </Button>
            </Form>
        </FormContainer>
        </font>
            </p>
    )
}

export default ShippingScreen
