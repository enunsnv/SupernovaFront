import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  padding-top:50px;
  background: url('/img/nav.svg') no-repeat center center;
  background-size: cover; /* Ensures the SVG covers the entire background */
    z-index: 1;
`;

const Icon = styled.div`
  width: 30px;
  height: 40px;
  background-size: cover;
`;

const HomeIcon = styled(Icon)`
  background: url('/img/home.svg') no-repeat center center;
`;

const ClockIcon = styled(Icon)`
  background: url('/img/clock.svg') no-repeat center center;
`;

const CodepenIcon = styled(Icon)`
  background: url('/img/codepen.svg') no-repeat center center;
`;

const CommandIcon = styled(Icon)`
  background: url('/img/command.svg') no-repeat center center;
`;

function Navbar() {
  const navigate = useNavigate();

  return (
    <Footer>
      <HomeIcon onClick={() => navigate('/main')} />
      <ClockIcon onClick={() => navigate('/timer')} />
      <CodepenIcon onClick={() => navigate('/aiws')} />
      <CommandIcon onClick={() => navigate('/ranking')} />
    </Footer>
  );
}

export default Navbar;
