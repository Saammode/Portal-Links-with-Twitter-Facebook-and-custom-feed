import React, { Component } from 'react'
import { Container, Card, Alert } from 'react-bootstrap'

export default class Feed extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    getData = () =>{
        this.setState({Nav: [{}]})
        fetch('Database.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(response =>{
            return response.json();
        })
        .then(myJson => {
            console.log(myJson);
            this.setState({posts: myJson.post}) 
        });
    }

    componentDidMount(){
        this.getData()
    }

    createMarkup(content) {
        return {__html: content};
      }

    render(){
        const {posts} = this.state
        return (
            <Container>
            <br></br>
            <Alert variant="primary">
            Internal Feed of Nolhivaranfaru Council
            </Alert>
                <br></br>
                {
                    posts.map((v)=> (
                        <Card>
                        <Card.Body>
                            <Card.Header dangerouslySetInnerHTML={this.createMarkup(v.heading)} />
                            <Card.Text dangerouslySetInnerHTML={this.createMarkup(v.postDetails)} />
                        </Card.Body>
                        </Card>
                    ))
                }
            </Container>
            
        )
    }
}
