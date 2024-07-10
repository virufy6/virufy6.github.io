import Link from 'next/link';
import { useRouter } from 'next/router';

const DiseasesNavbar: React.FC = () => {
  const router = useRouter();
  const activePath = router.pathname;

  return (
    <nav className="flex justify-around border-b border-t border-gray-500 text-white md:items-center md:justify-center md:gap-x-24 md:border-none md:font-semibold md:pt-2 md:opacity-95">
      <NavItem href="/Covid19" text="COVID-19" activePath={activePath} />
      <NavItem href="/Copd" text="COPD" activePath={activePath} />
      <NavItem href="/Flu" text="FLU" activePath={activePath} />
      <NavItem href="/RSV" text="RSV" activePath={activePath} />
    </nav>
  );
};

const NavItem: React.FC<{ href: string; text: string; activePath: string }> = ({ href, text, activePath }) => {
  const isActive = href === activePath;
  const activeStyle = 'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold';
  const inActiveStyle = 'hover:border-[#30DA74] md:border-b-2 md:border-transparent';
  const mobileStyle = 'w-1/2 py-4 text-center border-gray-500 md:w-auto md:bg-inherit md:text-x'; // mobile style with vertical borders

  return (
    <Link href={href} legacyBehavior>
      <a className={`${isActive ? activeStyle : inActiveStyle} ${mobileStyle}`}>
        {text}
      </a>
    </Link>
  );
};

export default DiseasesNavbar;
