import React from 'react';
import Details from '../../components/details/details';
import DetailsGroup from '../../components/details/details-group';
import DetailRow from '../../components/details/detail-row';
import MoneySpan from '../../components/span/money-span';
import DateSpan from '../../components/span/date-span';

function ProInsights() {
  return (
    <Details
      header="Pro Insights"
      gradient
    >
      <DetailsGroup gradient className="text-white">
        <DetailRow
          icon="repeat"
          text="MRR"
          value={<MoneySpan value={300} />}
          ghost
          shadow={false}
        />
        <DetailRow
          icon="analysis"
          text="Total Earned"
          value={<MoneySpan value={300} />}
          ghost
          shadow={false}
        />
        <DetailRow
          icon="calendar"
          text="Since"
          value={<DateSpan value={1645661560} dayOfWeek={false} />}
          ghost
          shadow={false}
        />
      </DetailsGroup>
    </Details>
  );
}

export default ProInsights;
