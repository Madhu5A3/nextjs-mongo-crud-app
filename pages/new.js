import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const New = () => {
    const [formState, setformState] = useState({ title: '', description: '' })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    return (
        <div className="form-container">
            <h1>Create Note</h1>
            <div> {
                isSubmitting ? <Loader active inline='centered' />
                    : <Form onSubmit={handleSubmit}>
                        <Form.Input 
                            fluid
                            label='Title'
                            placeholder='Title'
                            name='title'
                            onChange={handleChange}
                        />
                        <Form.TextArea 
                            fluid
                            label='Description'
                            placeholder= 'Description'
                            name='Description'
                            onChange={handleChange}
                        />

                        <Button type='Submit'>Create</Button>
                    </Form>
            }</div>
        </div>

    );
}


export default New;