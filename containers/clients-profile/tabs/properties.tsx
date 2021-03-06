import React from 'react';
import TabContainer from '../../../components/tab/tab-container';
import ActiveTab from '../../../components/tab/active-tab';
import InactiveTab from '../../../components/tab/inactive-tab';

function PropertyTab() {
  return (
    <TabContainer top={false} xpadding={false} className="pl-2 pt-1">
      <ActiveTab name="All Properties" />
      <InactiveTab name="Active" />
      <InactiveTab name="Archived" />
    </TabContainer>
  );
}

export default PropertyTab;
