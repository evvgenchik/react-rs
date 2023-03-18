import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import withRouter from '../components/WithRouter';

function MainLayout() {
  const WrappedHeader = withRouter(Header);

  return (
    <div className="container">
      <WrappedHeader />
      <Outlet />
    </div>
  );
}

export default MainLayout;
