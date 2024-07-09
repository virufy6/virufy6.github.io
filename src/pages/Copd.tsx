import Link from 'next/link';

const DiseasesNavbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center">
      <NavItem href="/Covid19" text="COVID-19" />
      <NavItem href="/Copd" text="COPD" />
      <NavItem href="/Flu" text="FLU" />
      <NavItem href="/RSV" text="RSV" />
    </nav>
  );
};

const NavItem: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <a className="text-white px-3 py-2 rounded-md text-sm font-medium">{text}</a>
    </Link>
  );
};

export default DiseasesNavbar;
