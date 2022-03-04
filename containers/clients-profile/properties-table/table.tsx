import React from 'react';
import Tr from '../../../components/table/tr';
import Th from '../../../components/table/th';
import PropertyTd from '../../../components/table/property-td';
import ControlTd from '../../../components/table/control-td';
import PropertyLocationTd from '../../../components/table/property-location-td';
import DisabledLabelSpan from '../../../components/span/disabled-label';

function InvoiceTable() {
  return (
    <table className="table-auto w-full">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr className="border-b border-t-0">
          <Th text="Property" arrows className="w-[48px] md:w-[92px]" />
          <Th text="Address" className="hidden md:table-cell md:w-[315px]" />
          <Th text="" className="w-[60px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <PropertyTd text="Home" />
          <PropertyLocationTd text="1920 Sylcrest Ln. Central City, ZZ 12345" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <PropertyTd text="Rental Property" />
          <PropertyLocationTd text="1920 Sylcrest Ln. Central City, ZZ 12345" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr className="text-steel-300">
          <PropertyTd text={<DisabledLabelSpan spanText="Office" labelText="Archived" />} />
          <PropertyLocationTd text="1920 Sylcrest Ln. Central City, ZZ 12345" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
      </tbody>
    </table>
  );
}

export default InvoiceTable;
