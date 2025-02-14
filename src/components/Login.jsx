import React,{useState} from 'react'
import { Button,Form,Card,Container,Row,Col } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const navigate = useNavigate()
 
    //handleSubmit

    
    //request object
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        //client side validations
        if (!email){
            setErrorMessage("Please enter valid email")
            return
        }
        if(!password || password.length <5){
            setErrorMessage("plaese enter a valid password")
        }
        //data pass to API
        const data={
            email:email,
            password:password
        }
        //API call
        try {
            const response = await axios.post("https://products-api-4-e3wr.onrender.com/user",data)
            console.log(response.data)
            alert(response.data.message)
            onLogin()
            navigate('/products')
        } catch (error) {
            const errorMsg = error.response ? error.response.data.message : "An error occurred. Please try again.";
            setErrorMessage(errorMsg);
            console.log(error);
        }
    }
    return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
        <Row>
            <Col>
                <Card className='shadow-lg p-4 rounded-3 ' 
                style={{width:'22rem'}}>
                    <Card.Body>
                        <h3 className='text-center mb-4'>Login</h3>
                        {
                            errorMessage && (<div className='alert alert-danger' role='alert'>{errorMessage}</div>)
                        }
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3"controlId='formBasicEmail'>
                                <Form.Label>
                                    email address:
                                </Form.Label>
                                <FormControl
                                type='email'
                                placeholder='enter email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />

                                
                            </Form.Group>


                            <Form.Group className="mb-3"controlId='formBasicPassword'>
                                <Form.Label>
                                    Password:
                                </Form.Label>
                                <FormControl
                                type='Password'
                                placeholder='enter password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />

                                
                            </Form.Group>

                            <Button variant='primary' type='submit' className='w-100'>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>

    </Container>
  )
}

export default Login
