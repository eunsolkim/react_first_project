import React from 'react';
import { Link } from 'react-router-dom'

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';

const Headers = (props) => {
    return (
        <header>
          <MDBNavbar expand='lg' light bgColor='white'>
            <MDBContainer fluid>
              <MDBNavbarToggler
                aria-controls='navbarExample01'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <div className='collapse navbar-collapse' id='navbarExample01'>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                  <MDBNavbarItem active>
                    <MDBNavbarLink aria-current='page' href='#'>
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>About</MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </div>
            </MDBContainer>
          </MDBNavbar>
    
          <div className='p-5 text-center bg-light'>
            <h1 className='mb-3'>{ props.name }</h1>
            <h4 className='mb-3'>{ props.content }</h4>
            <Link className='btn btn-primary' to='/login' role='button'>
              Call to action
            </Link>
          </div>
        </header>
      );
}

export default Headers;