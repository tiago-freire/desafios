import Footer from '../components/Footer';
import Header from '../components/Header/index';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
