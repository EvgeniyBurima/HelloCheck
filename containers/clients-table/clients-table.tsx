import React from 'react';
import Tr from '../../components/table/tr';
import Th from '../../components/table/th';
import Td from '../../components/table/td';
import DateTd from '../../components/table/date-td';
import ProperyTd from './propery-td';
import EarnedTd from './earned-td';
import ControlTd from '../../components/table/control-td';
import MoneySpan from '../../components/span/money-span';

function ClientsTable() {
  return (
    <table className="table-auto w-full">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr className="border-b border-t-0">
          <Th text="client" arrows className="w-[152px] md:w-[208px]" />
          <Th text="balance" arrows className="w-[100px] md:w-[220px]" />
          <Th text="next date of service" arrows className="hidden md:table-cell w-[216px]" />
          <Th text="properties" className="hidden md:table-cell w-[223px]" />
          <Th text="total earned" arrows className="hidden md:table-cell w-[224px]" />
          <Th text="" className="w-[75px] md:w-[150px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={0.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={60.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td><MoneySpan value={150.00} /></Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd leftButtonType="archive" />
        </Tr>
      </tbody>
    </table>
  );
}

export default ClientsTable;
