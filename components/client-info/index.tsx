import React from 'react';
// @ts-ignore
import { UilDollarAlt } from '@iconscout/react-unicons';
import Button from '../button/button';
import GroupItem from '../group-item';
import MoneySpan from '../span/money-span';
import Label from '../label/index';

interface Props{
  id: number,
  name: string,
  balance: number,
  className: string,
}

function ClientInfo({
  id,
  name,
  balance,
  className,
}: Props) {
  return (
    <div className={`w-full mt-[1px] p-4 md:p-0 ${className || ''}`}>
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <Button icon="back" color="white" className="mr-4 p-4" />
          <h3 className="text-steel-800 text-h5 font-medium">
            {name || 'Beth Johnson'}
          </h3>
        </div>
        <Label text={`ID: ${id || 12050}`} color="gray" disabled className="uppercase tracking-widest" />
      </div>
      <GroupItem className="rounded mt-5">
        <GroupItem.Left>
          <div className="flex items-center">
            <UilDollarAlt size="16" className="mr-2" />
            <span className="text-meta">Current Balance</span>
          </div>
        </GroupItem.Left>
        <GroupItem.Right>
          <MoneySpan value={balance} className="text-red-500" />
        </GroupItem.Right>
      </GroupItem>
    </div>
  );
}

export default ClientInfo;