import React from 'react';
import Tr from '../../../components/table/tr';
import Th from '../../../components/table/th';
import PropertyTd from '../../../components/table/property-td';
import ControlTd from '../../../components/table/control-td';
import Td from '../../../components/table/td';
import ServiceTd from '../../../components/table/service-td';
import MoneySpan from '../../../components/span/money-span';
import FrequencyTd from '../../../components/table/frequency-td';
import DisabledLabelSpan from '../../../components/span/disabled-label';
import { shorter } from '../../../helpers/string';

function RecurringJobsTable() {
  return (
    <table className="table-auto w-full">
      <thead className="text-steel-300 text-xxs uppercase">
        <Tr className="border-b border-t-0">
          <Th text="Frequency" arrows className="w-[146px] md:w-[258px]" />
          <Th text="Services" className="w-[142px] md:w-[258px]" />
          <Th text="Property" arrows className="hidden md:table-cell md:w-[260px]" />
          <Th text="Price" arrows className="hidden md:table-cell" />
          <Th text="" className="w-[60px]" />
        </Tr>
      </thead>
      <tbody className="text-steel-500">
        <Tr>
          <FrequencyTd icon="repeat" text="Every 2 weeks" className="pr-0 truncate" />
          <ServiceTd text={shorter('Mowing, Edging, Weed Eating, Blowing')} className="truncate" />
          <PropertyTd text="Home" className="hidden md:table-cell" />
          <Td className="hidden md:table-cell"><MoneySpan value={45} /></Td>
          <ControlTd leftButtonType="pause" />
        </Tr>
        <Tr>
          <FrequencyTd icon="repeat" text="Every 6 months" className="pr-0 truncate" />
          <ServiceTd text={shorter('Gutter cleaning')} className="truncate" />
          <PropertyTd text="Home" className="hidden md:table-cell" />
          <Td className="hidden md:table-cell"><MoneySpan value={45} /></Td>
          <ControlTd leftButtonType="pause" />
        </Tr>
        <Tr>
          <FrequencyTd icon="repeat" text="Every 2 weeks" className="pr-0 truncate" />
          <ServiceTd text={shorter('Mowing, Edging, Weed Eating, Blowing')} className="truncate" />
          <PropertyTd text="Rental Property" className="hidden md:table-cell" />
          <Td className="hidden md:table-cell"><MoneySpan value={45} /></Td>
          <ControlTd leftButtonType="pause" />
        </Tr>
        <Tr className="text-steel-300">
          <FrequencyTd className="pr-0 truncate" icon="pause" text={<DisabledLabelSpan spanText="Every 6 months" labelText="Paused" labelClassName="hidden md:inline" />} />
          <ServiceTd text={shorter('Gutter cleaning')} className="truncate" />
          <PropertyTd text="Rental Property" className="hidden md:table-cell" />
          <Td className="hidden md:table-cell"><MoneySpan value={250} /></Td>
          <ControlTd leftButtonType="play" leftButtonColor="green" />
        </Tr>
      </tbody>
    </table>
  );
}

export default RecurringJobsTable;
