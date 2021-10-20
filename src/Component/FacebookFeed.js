import React from 'react'
import { Container } from 'react-bootstrap';
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookFeed() {
    return (
        <Container>
            <FacebookProvider appId="402407401337236">
                <Page href="https://www.facebook.com/NolhivaranfaruCouncil/" tabs="timeline" key="FBFeed" />
            </FacebookProvider>
        </Container>
            
    )
}
