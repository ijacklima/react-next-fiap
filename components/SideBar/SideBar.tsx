import React from 'react'
import styled from '@emotion/styled'
import Profile from '../Profile'
import Balance from '../Balance'

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  `
export default function SideBar() {
  return (
    <SideBarContainer>
        <Profile name ="Jack Lima" role="Software Engineer" agency={"0001"} accountNumber={"1234567"} />
        <Balance amount={1924300} />
    </SideBarContainer>
  
  )
}
