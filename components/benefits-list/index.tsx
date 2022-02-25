import StoreButtons from '../store-buttons';
import BenefitItem from './item';

const benefitItems = [
  {
    header: 'Time-saving automation',
    description: 'Check saves professionals $1,000/mo on average by automating wasteful admin tasks like scheduling, route setting and invoicing.',
  },
  {
    header: 'Beautiful, easy-to-use design',
    description: 'Running a business is hard. Don’t make it harder with clunky, bloated software. Check was designed to make it feel easy.',
  },
  {
    header: 'Full-featured mobile app',
    description: 'Full functionality in the palm of your hand. You never have to wait to get back to your computer to manage your business.',
  },
];

function BenefitsList() {
  return (
    <>
      <ul className="space-y-8">
        {
          benefitItems?.length
          && benefitItems
            .map(({ header, description }) => (
              <BenefitItem
                key={header}
                header={header}
                description={description}
              />
            ))
        }
      </ul>

      <StoreButtons className="mt-4 self-start ml-10" />
    </>
  );
}

export default BenefitsList;
