import React from 'react';
import TabContainer from '../../../components/tab/tab-container';
import ActiveTab from '../../../components/tab/active-tab';
import InactiveTab from '../../../components/tab/inactive-tab';

function ClientsTab() {
  return (
    <TabContainer>
      <ActiveTab name="Active" />
      <InactiveTab name="Archived" />
      <InactiveTab name="All Clients" />
    </TabContainer>
  );
}

export default ClientsTab;
