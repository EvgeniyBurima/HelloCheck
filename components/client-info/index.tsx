import React from 'react';
// @ts-ignore
import { UilDollarAlt } from '@iconscout/react-unicons';
import Button from '../button/button';
import GroupItem from '../group-item';
import MoneySpan from "../span/money-span";

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
    <div className={`w-full p-4 md:p-0 ${className || ''}`}>
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <Button icon="back" color="white" className="mr-4 p-4" />
          <h3 className="text-steel-800 text-h5 font-medium">
            {name || 'Beth Johnson'}
          </h3>
        </div>
        <span className="text-steel-300 text-xxs">
          ID:
          {id || 12050}
        </span>
      </div>
      <GroupItem className="rounded mt-4">
        <GroupItem.Left>
          <div className="flex items-center">
            <UilDollarAlt size="16" className="mr-3" />
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