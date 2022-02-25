import Link from 'next/link';
import GoogleBadge from '../../assets/icons/Google_Play_Store_badge_EN.svg';
import AppleStore from '../../assets/icons/Download_on_the_App_Store_Badge.svg';

interface StoreButtonsProps {
  className?: string,
}

function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={`${className || ''} flex`}>
      <Link href="https://play.google.com/store">
        <a>
          <GoogleBadge className="mr-2" />
        </a>
      </Link>
      <Link href="https://apps.apple.com/ru/genre/ios/id36">
        <a>
          <AppleStore />
        </a>
      </Link>
    </div>
  );
}

export default StoreButtons;
