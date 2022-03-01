import React from 'react';
import Link from 'next/link';
import Card from '../components/card';
import Index from '../components/modal-message';
import Input from '../components/input';
import Button from '../components/button/link-button';
import StoreButtons from '../components/store-buttons';
import CentredLayout from '../components/layout/centred';

function Login(): JSX.Element {
  return (
    <CentredLayout className="h-full w-full">
      <Card>
        <Card.Header>
          <div className="login__header">
            <Index
              text="We’ve switched to a simpler, secure login experience. Enter the phone number associated with your Check account and we’ll text you a verification code."
              color="blue"
              icon="exclaim-triangle"
            />
          </div>
        </Card.Header>
        <Card.Body>
          <div className="bg-white">
            <div className="p-8 flex flex-col items-center">
              <h1 className="capitalize mb-4 text-3xl font-medium">Log In to Check</h1>
              {/* <Index */}
              {/* eslint-disable-next-line max-len */}
              {/*  text="We just sent a verification code to (890) 123-4567. Please enter the code below and confirm!" */}
              {/*  color="green" */}
              {/*  icon="shield" */}
              {/* /> */}
              <Input
                inputType="tel"
                name="phone"
                icon="phone"
                placeholderText="Phone Number"
                className="mt-4"
              />
              <Button text="log in" color="gradient" className="mt-2 mb-4 w-[128px]" href="/login" />
              <span className="text-steel-400">
                Don’t have an account?&nbsp;
                <Link href="/">
                  <a className="font-bold text-blue-500">Sign Up</a>
                </Link>
              </span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="flex flex-col items-center">
            <p className="text-steel-400 mb-2">Download the mobile app</p>
            <StoreButtons />
          </div>
        </Card.Footer>
      </Card>
    </CentredLayout>
  );
}

export default Login;
