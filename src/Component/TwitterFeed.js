import React from 'react'
import { Container } from 'react-bootstrap'
import { Timeline } from 'react-twitter-widgets'

export default function TwitterFeed() {
    return (
        <Container>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'Nolhivaranfaru_'
                }}
                renderError={_err => <h1>Oops!, Cannot load tweets. An error occured {_err.message}</h1>}
            />
        </Container>
        
    )
}
