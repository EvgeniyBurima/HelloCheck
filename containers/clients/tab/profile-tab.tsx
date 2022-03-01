import React from 'react';
import TabContainer from '../../../components/tab/tab-container';
import ActiveTab from '../../../components/tab/active-tab';
import InactiveTab from '../../../components/tab/inactive-tab';

function ClientsTab() {
  return (
    <TabContainer>
      <ActiveTab name="Overview" />
      <InactiveTab name="Properties & Jobs" />
      <InactiveTab name="Notes" />
    </TabContainer>
  );
}

export default ClientsTab;
