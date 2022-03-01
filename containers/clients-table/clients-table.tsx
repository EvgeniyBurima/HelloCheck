import React from 'react';
import Tr from '../../components/table/tr';
import Th from '../../components/table/th';
import Td from '../../components/table/td';
import DateTd from './date-td';
import ProperyTd from './propery-td';
import EarnedTd from './earned-td';
import ControlTd from './control-td';

function ClientsTable() {
  return (
    <table className="table-auto w-full">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr>
          <Th text="client" arrows className="w-[136px] md:w-[200px]" />
          <Th text="balance" arrows className="w-[100px] md:w-[224px]" />
          <Th text="next date of servise" arrows className="hidden md:table-cell w-[224px]" />
          <Th text="properties" className="hidden md:table-cellw-[224px]" />
          <Th text="total earned" arrows className="hidden md:table-cell w-[224px]" />
          <Th text="" className="w-[150px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <Td className="">Alan Peters</Td>
          <Td>0.00</Td>
          <DateTd unixTime="1645793504" className="hidden md:table-cell" />
          <ProperyTd value="2 Properties" className="hidden md:table-cell" />
          <EarnedTd value="1980.00" className="hidden md:table-cell" />
          <ControlTd />
        </Tr>
      </tbody>
    </table>
  );
}

export default ClientsTable;
