import * as React from 'react';
import Link, { LinkWrap } from '../../elements/link';
import styled from 'styled-components';

const NavItem = styled.li`
  cursor: pointer;
  padding: 20px 0;
  text-transform: uppercase;
  min-width: 100px;
  text-align: center;
  transition: background-color .25s;

  :hover {
    background-color: #0aad8d;
  }

  ${LinkWrap} {
    padding: 20px;
  }
`;

const navItem = (props) => {
  return (
    <NavItem>
      <Link {...props}/>
    </NavItem>
  )
}

export default navItem