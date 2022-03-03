import React from 'react';
import SectionHeader from '../../components/section-header/section-header';
import Button from '../../components/button/button';
import PropertyTab from './tabs/properties';
import InvoiceTable from './invoice-table/table';

function Activity() {
  return (
    <div className="w-full">
      <SectionHeader
        name="Properties"
        right={<Button text="new" icon="plus" color="white" />}
        className="mb-4"
      />
      <PropertyTab />
      <InvoiceTable />
    </div>
  );
}

export default Activity;
