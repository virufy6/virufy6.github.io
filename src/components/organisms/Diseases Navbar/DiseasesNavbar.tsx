import Link from 'next/link';
import { useRouter } from 'next/router';

const DiseasesNavbar: React.FC = () => {
  const router = useRouter();
  const activePath = router.pathname;

  return (
    <nav className="p-4 flex justify-around border-b border-t border-gray-500 md:items-center md:justify-center md:gap-x-24 md:border-none md:font-semibold text-white md:pt-2 md:opacity-95">
      <NavItem href="/Covid19" text="COVID-19" activePath={activePath} />
      <NavItem href="/Copd" text="COPD" activePath={activePath} />
      <NavItem href="/Flu" text="FLU" activePath={activePath} />
      <NavItem href="/RSV" text="RSV" activePath={activePath} />
    </nav>
  );
}

const NavItem: React.FC<{ href: string; text: string; activePath: string }> = ({ href, text, activePath }) => {
  const isActive = href === activePath;
  const activeStyle = 'bg-green-800 font-bold border-b-2 border-[#30DA74]';
  const inActiveStyle = 'border-b-2 border-transparent hover:border-[#30DA74]';
  const mobileStyle = 'w-1/2 py-4 md:w-auto md:bg-inherit md:text-xl';

  return (
    <Link href={href} legacyBehavior>
      <a className={`py-4 ${isActive ? activeStyle : inActiveStyle} ${mobileStyle}`}>
        {text}
      </a>
    </Link>
  );
};

export default DiseasesNavbar;
