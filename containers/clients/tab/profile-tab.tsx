import React from 'react';
import TabContainer from '../../../components/tab/tab-container';
import ActiveTab from '../../../components/tab/active-tab';
import InactiveTab from '../../../components/tab/inactive-tab';

export type TabName = keyof typeof tabNames;

interface Props {
  activeTab: 'overview' | 'properties' | 'notes',
  handler: (arg: TabName) => void,
}

const tabNames = {
  overview: 'Overview',
  properties: 'Properties & Jobs',
  notes: 'Notes',
} ;

function ClientsTab({ activeTab, handler }: Props) {
  return (
    <TabContainer top={false} className="mt-2.5 md:mt-0 bg-white">
      {activeTab === 'overview' ? <ActiveTab name={tabNames.overview} className="md:pb-1" /> : <InactiveTab name={tabNames.overview} onClick={() => handler('overview')} />}
      {activeTab === 'properties' ? <ActiveTab name={tabNames.properties} className="md:pb-1" /> : <InactiveTab name={tabNames.properties} onClick={() => handler('properties')} />}
      {activeTab === 'notes' ? <ActiveTab name={tabNames.notes} className="md:pb-1" /> : <InactiveTab name={tabNames.notes} onClick={() => handler('notes')} />}
    </TabContainer>
  );
}

export default ClientsTab;
