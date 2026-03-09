import Background from './Background';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function PageShell({ children, showNav = true }) {
  return (
    <>
      <Background />
      <SiteHeader showNav={showNav} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
