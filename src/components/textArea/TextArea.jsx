import React from 'react';
import Star from 'components/atoms/Star';
import Polygon1 from 'components/atoms/Polygon1';
import Vector3 from 'components/atoms/Vector3';
import { Wrapper } from './TextArea.styles';

const TextArea = () => {
  return (
    <Wrapper>
      <div className='main-info'>
        <span className='h1'>
          A<span>partments</span>
        </span>
        <p>ARVRTISE YOUR APARTMENT & ROOMS</p>
      </div>
      <div className='since-section'>
        <div>
          <Star />
          <span>Since 2023</span>
        </div>
        <p>
           No one will see your listing if you don't Arvrtise it.
        </p>
      </div>
      <div className='button-wrapper'>
        <Polygon1 />
        <Vector3 />
      </div>
    </Wrapper>
  );
};

export default TextArea;
