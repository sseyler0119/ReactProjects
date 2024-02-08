import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper> 
      <h5>
        &copy; {new Date().getFullYear()}
        <span> GatherMoss </span>
      </h5>
      <h5>All rights reserved</h5>

        <a href='https://www.123rf.com/free-images/'>123RF Free Images</a>
      
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .container {
    margin-bottom: 1.25rem;
  }
  a {
    font-family: 'Recia', serif;
    color: var(--clr-grey-8);

    margin: 0.1rem;
    font-size: 0.875rem;
    font-weight: 300;

    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer
