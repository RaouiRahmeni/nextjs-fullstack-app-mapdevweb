import Layout from 'components/layout/Layout';
import Widgets from 'components/widgets/Widgets';

const Dashboard = () => {
  return (
    <div className="w-full">
      <Widgets />
      Dashboard;
    </div>
  );
};

export default Dashboard;
Dashboard.Layout = (Page: any) => <Layout>{Page}</Layout>;
