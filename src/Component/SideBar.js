import React, {Component} from 'react'
import { Container, Image, Navbar } from 'react-bootstrap'

export default class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {
            Nav: [{
                name: "Loading...",
                link: "https://nolhivaranfaru.gov.mv/"
            }]
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
            this.setState({Nav: myJson.navLinks}) 
        });
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        const {Nav} = this.state
        return (
            <Container>
            <div align="center">

            
                <Image className="p-3" src="logo192.png" roundedCircle />
    
                {Nav.map((v)=> (
                    <>
                    <Navbar bg="light" key={v.name}>
                        <Container>
                        <Navbar.Brand className="text-center" target="_blank" href={v.link}>{v.name}</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    </>
                ))}
                
                <Image src="banner.png" width="100%" rounded/>
            </div>
            </Container>
            
        )
    }
}

