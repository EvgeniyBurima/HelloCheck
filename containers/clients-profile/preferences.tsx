import React from 'react';
import Details from '../../components/details/details';
import DetailsGroup from '../../components/details/details-group';
import DetailRow from '../../components/details/detail-row';
import AngleSpan from '../../components/span/angle-span';

interface Props {
  className?: string;
}

function Preferences({ className }: Props) {
  return (
    <Details
      header="Preferences"
      className={`text-steel-800 ${className}`}
    >
      <DetailsGroup>
        <DetailRow
          icon="envelope"
          text="Invoice Type"
          value={<AngleSpan value="Email" />}
          shadow={false}
        />
        <DetailRow
          icon="telegram"
          text="Invoice Frequency"
          value={<AngleSpan value="Per Job" />}
          shadow={false}
        />
      </DetailsGroup>
    </Details>
  );
}

export default Preferences;
