import React from 'react';
import Button from '../components/button/button';
import MainLayout from '../components/layout/main';
import ClientsTable from '../containers/clients-table/clients-table';
import ClientsTab from '../containers/clients/tab/clients-tab';

function Clients(): JSX.Element {
  return (
    <MainLayout>
      <div className="flex justify-between w-full px-2">
        <h2 className="text-3xl font-medium text-steel-800">Clients</h2>
        <Button text="new" icon="plus" color="white" />
      </div>
      <ClientsTab />
      <ClientsTable />
    </MainLayout>
  );
}

export default Clients;
