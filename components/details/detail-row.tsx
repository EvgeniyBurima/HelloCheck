import React from 'react';
// @ts-ignore
import { UilAnalysis, UilCalendarAlt, UilRepeat, UilEnvelope, UilTelegramAlt, UilUserCircle, UilPhone, UilTrashAlt, UilArchive } from '@iconscout/react-unicons';
import GroupItem from '../group-item';

type Icon = 'repeat' | 'analysis' | 'calendar' | 'envelope' | 'telegram' | 'user-circle' | 'phone' | 'archive' | 'trash';

interface Props {
  icon: Icon,
  iconColor?: string,
  text: string,
  value: string | React.ReactNode,
  className?: string,
  ghost?: boolean;
  shadow?: boolean;
}

const getIcon = (icon: Icon, iconColor = '') => {
  let IconElement;
  switch (icon) {
    case 'analysis':
      IconElement = UilAnalysis;
      break;
    case 'repeat':
      IconElement = UilRepeat;
      break;
    case 'calendar':
      IconElement = UilCalendarAlt;
      break;
    case 'envelope':
      IconElement = UilEnvelope;
      break;
    case 'telegram':
      IconElement = UilTelegramAlt;
      break;
    case 'user-circle':
      IconElement = UilUserCircle;
      break;
    case 'phone':
      IconElement = UilPhone;
      break;
    case 'trash':
      IconElement = UilTrashAlt;
      break;
    case 'archive':
      IconElement = UilArchive;
      break;
    default: IconElement = UilRepeat;
  }
  return <IconElement size="16" className={`mr-3 ${iconColor}`} />;
};

function DetailRow({
  icon,
  text,
  value,
  className = '',
  ghost = false,
  shadow = true,
  iconColor = '',
}: Props) {
  return (
    <GroupItem className={className} ghost={ghost} shadow={shadow}>
      <GroupItem.Left>
        <div className="flex items-center">
          {getIcon(icon, iconColor)}
          <span className="text-meta whitespace-nowrap">{text}</span>
        </div>
      </GroupItem.Left>
      <GroupItem.Right>
        {value}
      </GroupItem.Right>
    </GroupItem>
  );
}

export default DetailRow;
