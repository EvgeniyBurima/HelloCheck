import React from 'react';
import Tr from '../../../components/table/tr';
import Th from '../../../components/table/th';
import Td from '../../../components/table/td';
import MoneySpan from '../../../components/span/money-span';
import StatusLabel from './status-label';
import PropertyTd from './property-td';
import ServiceTd from './service-td';
import DateTd from '../../../components/table/date-td';
import ControlTd from '../../../components/table/control-td';

function InvoiceTable() {
  return (
    <table className="table-auto w-full">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr className="border-b border-t-0">
          <Th text="Amount" arrows className="w-[48px] md:w-[72px]" />
          <Th text="Status" arrows className="w-[42px] md:w-[60px]" />
          <Th text="Property" arrows className="hidden md:table-cell w-[180px]" />
          <Th text="Sent on" className="hidden md:table-cell w-[180px]" />
          <Th text="Services" className="hidden md:table-cell w-[300px]" />
          <Th text="" className="w-[60px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <Td><MoneySpan value={0.00} /></Td>
          <Td><StatusLabel type="paid" /></Td>
          <PropertyTd text="Home" className="hidden md:table-cell" />
          <DateTd unixTime="1614668729" className="hidden md:table-cell" />
          <ServiceTd text="Mowing, Edging, Weed Eating, Blowing" className="hidden md:table-cell" />
          <ControlTd leftButtonType="down" />
        </Tr>
      </tbody>
    </table>
  );
}

export default InvoiceTable;
