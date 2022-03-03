import React from 'react';
import SectionHeader from '../../components/section-header/section-header';
import Button from '../../components/button/button';
import Activity from './tabs/activity';
import InvoiceTable from './invoice-table/table';

function Activity() {
  return (
    <div className="w-full">
      <SectionHeader
        name="Activity"
        right={<Button text="new" icon="plus" color="white" />}
        className="mb-4"
      />
      <Activity />
      <InvoiceTable />
    </div>
  );
}

export default Activity;
