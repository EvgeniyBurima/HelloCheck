import React from 'react';
import Details from '../../components/details/details';
import DetailsGroup from '../../components/details/details-group';
import DetailRow from '../../components/details/detail-row';
import MoneySpan from '../../components/span/money-span';
import DateSpan from '../../components/span/date-span';

interface Props {
  className?: string,
}

function ProInsights({ className = '' }: Props) {
  return (
    <Details
      header="Pro Insights"
      gradient
      className={className}
    >
      <DetailsGroup gradient className="text-white mt-[-1px]">
        <DetailRow
          icon="repeat"
          text="MRR"
          value={<MoneySpan value={220} />}
          ghost
          shadow={false}
        />
        <DetailRow
          icon="analysis"
          text="Total Earned"
          value={<MoneySpan value={1980} />}
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
