import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
     height: 60px;
     background-color: black;

`

const Wrapper = styled.div`
padding: 10px 20px ;
`

export default class Navbar extends Component {
  render() {
    return (
    <Container>
        <Wrapper>
        Navbar
        </Wrapper>
    </Container>
    )
  }
}
