import React from 'react';
import SectionHeader from '../../components/section-header/section-header';
import Button from '../../components/button/button';
import PropertyTab from './tabs/properties';
import PropertiesTable from './properties-table/table';
import RecurringJobsTable from './recurring-jobs-table/table';
import RecurringJobsTab from './tabs/recuring-jobs';

function Activity() {
  return (
    <div className="w-full">
      <SectionHeader
        name="Properties"
        right={<Button text="new" icon="plus" color="white" />}
        className="mb-4"
      />
      <PropertyTab />
      <PropertiesTable />

      <SectionHeader
        name="Recurring Jobs"
        right={<Button text="new" icon="plus" color="white" />}
        className="mb-4 mt-7 md:mt-12"
      />
      <RecurringJobsTab />
      <RecurringJobsTable />
    </div>
  );
}

export default Activity;
