import React from 'react';
import DetailsGroup from '../../components/details/details-group';
import DetailRow from '../../components/details/detail-row';
import AngleSpan from '../../components/span/angle-span';

interface Props {
  className?: string,
}

function ActionsSection({ className = '' }: Props) {
  return (
    <DetailsGroup className={className}>
      <DetailRow
        icon="archive"
        text="Archive client"
        value={<AngleSpan value="Beth Johnson" />}
        shadow={false}
      />
      <DetailRow
        icon="trash"
        iconColor="text-red-500"
        text="Delete Client Permanently"
        value={<AngleSpan value="(890) 123-4567" />}
        shadow={false}
      />
    </DetailsGroup>
  );
}

export default ActionsSection;
