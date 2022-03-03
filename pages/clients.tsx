import React from 'react';
import Button from '../components/button/button';
import MainLayout from '../components/layout/main';
import ClientsTable from '../containers/clients-table/clients-table';
import ClientsTab from '../containers/clients/tab/clients-tab';
import SimpleHeader from '../components/layout/simple-header';
import SectionHeader from '../components/section-header/section-header';

function Clients(): JSX.Element {
  return (
    <SimpleHeader>
      <MainLayout>
        <SectionHeader
          name="Clients"
          right={<Button text="new" icon="plus" color="white" />}
        />
        <ClientsTab />
        <ClientsTable />
      </MainLayout>
    </SimpleHeader>
  );
}

export default Clients;
