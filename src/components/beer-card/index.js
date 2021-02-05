import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../elements/image';
import Lockup from '../lockup';
import Like from './like-button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  width: 100%;
`;

const ImagContainer = styled.div`
  flex: 0 0 auto;
  padding: 40px 20px;
  background-color: #2897b1;
  position: relative;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #f3f3f3;
`;

function BeerCard(props) {
  const [active, setActive] = useState(false);

  const changeLike = () => {
    setActive(!active);
  };

  return (
    <Wrapper reverse={props.reverse}>
      <ImagContainer>
        <Like liked={active} action={changeLike} />
        <Image url={props.image} />
      </ImagContainer>

      <Content>
        <Lockup text={props.description} tag="h3" title={props.title} />
      </Content>
    </Wrapper>
  );
}

BeerCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default BeerCard;
