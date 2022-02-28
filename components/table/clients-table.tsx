import React from 'react';
import Tr from './clients/tr';
import Th from './clients/th';
import Td from './clients/td';
import DateTd from './clients/date-td';
import ProperyTd from './clients/propery-td';
import EarnedTd from './clients/earned-td';

function ClientsTable() {
  return (
    <table className="table-auto w-full">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr>
          <Th text="client" arrows className="w-[200px]" />
          <Th text="balance" arrows className="w-[224px]" />
          <Th text="next date of servise" arrows className="w-[224px]" />
          <Th text="properties" className="w-[224px]" />
          <Th text="total earned" arrows className="w-[224px]" />
          <Th text="" className="w-[150px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <Td>Alan Peters</Td>
          <Td>0.00</Td>
          <DateTd unixTime="1645793504" />
          <ProperyTd value="2 Properties" />
          <EarnedTd value="1980.00" />
        </Tr>
      </tbody>
    </table>
  );
}

export default ClientsTable;
