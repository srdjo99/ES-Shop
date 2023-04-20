import { ConfirmationNumberOutlined } from '@mui/icons-material';
import { AdminLayout } from '../../components/layout';

const OrdersPage = () => {
  return (
    <AdminLayout
      title='Orders'
      subTitle='Order management'
      icon={<ConfirmationNumberOutlined />}
    ></AdminLayout>
  );
};

export default OrdersPage;
