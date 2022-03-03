import React from 'react';
import Link from 'next/link';
import Card from '../components/card';
import BenefitsList from '../components/benefits-list';
import CentredLayout from '../components/layout/centred';
import Input from '../components/input';
import Button from '../components/button/link-button';
import JoinItem, { IconSet } from '../components/join/join-item';
import ModalMessage from '../components/modal-message/modalMessage';
import SimpleHeader from '../components/layout/simple-header';

const joinItems = [
  {
    icon: 'analysis',
    description: 'Get started with our free plan',
  },
  {
    icon: 'credit-card',
    description: 'No credit card required',
  },
  {
    icon: 'clock',
    description: 'Start in less than 2 minutes',
  },
  {
    icon: 'create-dashboard',
    description: 'Unlimited clients, properties, jobs and invoices',
  },
];

function Home(): JSX.Element {
  return (
    <SimpleHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px w-full justify-items-center h-full">
        <div className="order-last md:order-first flex w-full items-center justify-center bg-white p-4 lg:p-0">
          <CentredLayout className="w-[480px]">
            <BenefitsList />
          </CentredLayout>
        </div>
        <CentredLayout className="w-full p-4 md:p-4 lg:p-0 order-first md:order-last">
          <Card footerSize="big">
            <Card.Body>
              <div className="bg-white">
                <div className="p-8 flex flex-col items-center">
                  <h3 className="mb-4 text-h3 font-medium leading-[38px]">Join 10,000+ other professionals putting their business in Check</h3>
                  <ul className="self-start space-y-2">
                    {
                      joinItems
                        .map(({ icon, description }) => (
                          <JoinItem
                            key={icon}
                            icon={icon as IconSet}
                            description={description}
                          />
                        ))
                    }
                  </ul>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="flex flex-col">
                {/*<ModalMessage*/}
                {/*  text="We just sent a verification code to (890) 123-4567. Please enter the code below and confirm!"*/}
                {/*  color="green"*/}
                {/*  icon="shield"*/}
                {/*  className="mb-4"*/}
                {/*/>*/}
                <Input
                  inputType="tel"
                  name="phone"
                  icon="phone"
                  placeholderText="Phone Number"
                />
                <Button text="Sign Up" color="gradient" className="mt-2 mb-4 w-[120px]" href="/signUp" />
                <span className="text-steel-400">
                  Already have an account?&nbsp;
                  <Link href="/login">
                    <a className="font-bold text-blue-500">Log In</a>
                  </Link>
                </span>
              </div>
            </Card.Footer>
          </Card>
        </CentredLayout>
      </div>
    </SimpleHeader>
  );
}

export default Home;
