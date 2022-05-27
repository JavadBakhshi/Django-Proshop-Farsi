import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <p align="right">
                <font face="yekan" size="+1">
        <FormContainer>
            <h1>ورود</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>ایمیل</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='ایمیل خود را وارد کنید'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>رمز عبور</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='رمز عبور خود را وارد کنید'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    ورود
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    ثبت نام نکرده اید? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                         ثبت نام
                        </Link>
                </Col>
            </Row>

        </FormContainer>
        </font>
            </p>
    )
}

export default LoginScreen
