import React from 'react';
import GetInTouch from 'assets/images/getin.png';
import GetInTouch_Webp from 'assets/images/getin.webp';
import Star from 'components/atoms/Star';
// import Form from 'components/hero/bannerSection/Form';
import { Wrapper } from './Contact.style';
import Polygon5 from 'components/atoms/Polygon5';
import { HashLink as Link } from 'react-router-hash-link';
import { useGlobalContext } from 'context/context';

const Contact = () => {
  const { handleSctollToTop } = useGlobalContext();

  return (
    <Wrapper id='contact'>
      <a className='number' href='tel:+1 404 889 5545'>
        +1 404 889 5545
      </a>
      <span className='location'>
        Worldwide <br /> 
      </span>
      <div className='chairImg'>
        <picture loading='lazy'>
          <source type='image/webp' srcSet={GetInTouch_Webp} />
          <img src={GetInTouch} alt='chair' srcSet='' />
        </picture>
      </div>
      <h2 className='get-in'>
        Get in <Star />
      </h2>
      <h2 className='touch'>Touch</h2>
      <div className='find'>
        <h3>find an apartment</h3>
      </div>
      <Link to='/apartments' className='find-link' onClick={handleSctollToTop}>
        {/* <Form/> */}
        <Polygon5 />
        <span>
          Book
          <br />
          apartments
        </span>
      </Link>
    </Wrapper>
  );
};

export default Contact;
