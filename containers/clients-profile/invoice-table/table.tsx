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
    <table className="table-auto w-full ml-1">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr className="border-b border-t-0">
          <Th text="Amount" arrows className="w-[48px] md:w-[70px]" />
          <Th text="Status" arrows className="w-[42px] md:w-[60px] pl-0.5" />
          <Th text="Property" arrows className="hidden md:table-cell w-[180px] pl-0.5" />
          <Th text="Sent on" className="hidden md:table-cell w-[180px] pl-1.5" />
          <Th text="Services" className="hidden md:table-cell w-[300px] pl-2.5" />
          <Th text="" className="w-[60px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <Td><MoneySpan value={45.00} position="right" /></Td>
          <Td className="pl-0.5"><StatusLabel type="sent" /></Td>
          <PropertyTd text="Home" className="hidden md:table-cell pl-0.5" />
          <DateTd unixTime="1614668729" className="hidden md:table-cell pl-1.5" />
          <ServiceTd text="Mowing, Edging, Weed Eating, Blowing" className="hidden md:table-cell pl-3" />
          <ControlTd leftButtonType="down" className="pl-0 pr-1" />
        </Tr>
        <Tr>
          <Td><MoneySpan value={45.00} position="right" /></Td>
          <Td className="pl-0.5"><StatusLabel type="paid" /></Td>
          <PropertyTd text="Home" className="hidden md:table-cell pl-0.5" />
          <DateTd unixTime="1614668729" className="hidden md:table-cell pl-1.5" />
          <ServiceTd text="Mowing, Edging, Weed Eating, Blowing" className="hidden md:table-cell pl-3" />
          <ControlTd leftButtonType="down" className="pl-0 pr-1" />
        </Tr>
        <Tr>
          <Td><MoneySpan value={45.00} position="right" /></Td>
          <Td className="pl-0.5"><StatusLabel type="paid" /></Td>
          <PropertyTd text="Home" className="hidden md:table-cell pl-0.5" />
          <DateTd unixTime="1614668729" className="hidden md:table-cell pl-1.5" />
          <ServiceTd text="Mowing, Edging, Weed Eating, Blowing" className="hidden md:table-cell pl-3" />
          <ControlTd leftButtonType="down" className="pl-0 pr-1" />
        </Tr>
        <Tr>
          <Td><MoneySpan value={1050.00} position="right" /></Td>
          <Td className="pl-0.5"><StatusLabel type="partial" /></Td>
          <PropertyTd text="Home" className="hidden md:table-cell pl-0.5" />
          <DateTd unixTime="1614668729" className="hidden md:table-cell pl-1.5" />
          <ServiceTd text="Mowing, Edging, Weed Eating, Blowing" className="hidden md:table-cell pl-3" />
          <ControlTd leftButtonType="down" className="pl-0 pr-1" />
        </Tr>
        <Tr>
          <Td><MoneySpan value={45.00} position="right" /></Td>
          <Td className="pl-0.5"><StatusLabel type="paid" /></Td>
          <PropertyTd text="Home" className="hidden md:table-cell pl-0.5" />
          <DateTd unixTime="1614668729" className="hidden md:table-cell pl-1.5" />
          <ServiceTd text="Mowing, Edging, Weed Eating, Blowing" className="hidden md:table-cell pl-3" />
          <ControlTd leftButtonType="down" className="pl-0 pr-1" />
        </Tr>
      </tbody>
    </table>
  );
}

export default InvoiceTable;
