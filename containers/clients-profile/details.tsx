import React from 'react';
import Details from '../../components/details/details';
import DetailsGroup from '../../components/details/details-group';
import DetailRow from '../../components/details/detail-row';
import AngleSpan from '../../components/span/angle-span';

function DetailsSection() {
  return (
    <Details
      header="Details"
      className="text-steel-800"
    >
      <DetailsGroup>
        <DetailRow
          icon="user-circle"
          text="Name"
          value={<AngleSpan value="Beth Johnson" />}
          shadow={false}
        />
        <DetailRow
          icon="phone"
          text="Name"
          value={<AngleSpan value="(890) 123-4567" />}
          shadow={false}
        />
        <DetailRow
          icon="envelope"
          text="Email Address"
          value={<AngleSpan value="beth.johnson@email.com" />}
          shadow={false}
        />
      </DetailsGroup>
    </Details>
  );
}

export default DetailsSection;
