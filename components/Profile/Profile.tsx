import React, { ProfilerProps } from 'react'
import styled from '@emotion/styled'
import { Avatar } from '@mui/material'

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 300px;
background-color: #242424;
color: #f8f8f8;
h2, h3 {
  margin: 0;
}
`
const Account = styled.div`
display: flex;
width: 80%;
border: solid 0.5px #888;
border-radius: 2px;
div:first-child {
  width: 80%;
  & > div {
    width: 100%;
  }
}
`
type ProfileProps = {
  name: string;
  role: string;
  agency: string;
  accountNumber: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar alt={props.name} src="https://avatars.githubusercontent.com/u/85654447?s=400&u=3b64e3f6d3aef4303d3613cc004022d7c468ab67&v=4" sx={{
        width: 100, height: 100 }}/>
        <h2>{props.name}</h2>  
        <h3>{props.role}</h3>
        <Account>
          <div>
            <p>336 - Banco C6 S.A.</p>
            <p>Ag: {props.agency} C/C: {props.accountNumber}</p>
          </div>
          <div>ícone</div>
        </Account>
    </ProfileContainer>
  )
}
