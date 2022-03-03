import React from 'react';
import TabContainer from '../../../components/tab/tab-container';
import ActiveTab from '../../../components/tab/active-tab';
import InactiveTab from '../../../components/tab/inactive-tab';

function ActivityTab() {
  return (
    <TabContainer top={false} xpadding={false}>
      <ActiveTab name="Invoices" />
      <InactiveTab name="Payments" />
      <InactiveTab name="Quotes" />
    </TabContainer>
  );
}

export default ActivityTab;
