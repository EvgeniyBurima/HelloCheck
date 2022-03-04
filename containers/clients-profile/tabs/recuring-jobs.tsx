import React from 'react';
import TabContainer from '../../../components/tab/tab-container';
import ActiveTab from '../../../components/tab/active-tab';
import InactiveTab from '../../../components/tab/inactive-tab';

function RecurringJobsTab() {
  return (
    <TabContainer top={false} xpadding={false} className="pl-2 pt-1.5">
      <ActiveTab name="All Recurring Jobs" />
      <InactiveTab name="Active" />
      <InactiveTab name="Paused" />
    </TabContainer>
  );
}

export default RecurringJobsTab;
