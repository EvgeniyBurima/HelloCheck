import Analysis from '../svg-gradient/analysis';
import Clock from '../svg-gradient/clock';
import CreditCard from '../svg-gradient/credit-card';
import CreateDashboard from '../svg-gradient/create-dashboard';

export type IconSet = 'analysis' | 'credit-card' | 'clock' | 'create-dashboard';

interface Props {
  icon: IconSet,
  description: string,
}

const getIcon = (iconName: IconSet) => {
  const size = '16';
  let Component;
  switch (iconName) {
    case 'analysis':
      Component = <Analysis size={size} />;
      break;
    case 'credit-card':
      Component = <CreditCard size={size} />;
      break;
    case 'clock':
      Component = <Clock size={size} />;
      break;
    case 'create-dashboard':
      Component = <CreateDashboard size={size} />;
      break;
    default: Component = <Analysis size={size} />;
  }

  return Component;
};

function JoinItem({ icon, description }: Props) {
  return (
    <li className="flex text-sm">
      <span className="mr-2 pt-[2px]">{getIcon(icon)}</span>
      <span className="text-meta">{description}</span>
    </li>
  );
}

export default JoinItem;
