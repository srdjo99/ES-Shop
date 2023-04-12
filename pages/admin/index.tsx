import React from 'react';
import useSWR from 'swr';
import { Grid } from '@mui/material';
import {
  AccessTimeOutlined,
  AttachMoneyOutlined,
  CancelPresentationOutlined,
  CategoryOutlined,
  CreditCardOffOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  GroupOutlined,
  ProductionQuantityLimitsOutlined,
} from '@mui/icons-material';
import { SummaryTile } from '../../components/admin';
import { AdminLayout } from '../../components/layout';
import { DashboardSummaryResponse } from '../../interfaces';

const DashboardPage = () => {
  const { data, error } = useSWR<DashboardSummaryResponse>(
    '/api/admin/dashboard',
    {
      refreshInterval: 30 * 1000,
    }
  );

  return (
    <AdminLayout
      title='Dashboard'
      subTitle='General statistics'
      icon={<DashboardOutlined />}
    >
      <Grid container spacing={2}>
        <SummaryTile
          title={1}
          subTitle='Total Orders'
          icon={<CreditCardOutlined color='secondary' sx={{ fontSize: 40 }} />}
        />
        <SummaryTile
          title={2}
          subTitle='Paid Orders'
          icon={<AttachMoneyOutlined color='success' sx={{ fontSize: 40 }} />}
        />
        <SummaryTile
          title={2}
          subTitle='Pending Orders'
          icon={<CreditCardOffOutlined color='error' sx={{ fontSize: 40 }} />}
        />
        <SummaryTile
          title={4}
          subTitle='Clients'
          icon={<GroupOutlined color='primary' sx={{ fontSize: 40 }} />}
        />
        <SummaryTile
          title={5}
          subTitle='Products'
          icon={<CategoryOutlined color='warning' sx={{ fontSize: 40 }} />}
        />
        <SummaryTile
          title={6}
          subTitle='Out of Stock'
          icon={
            <CancelPresentationOutlined color='error' sx={{ fontSize: 40 }} />
          }
        />
        <SummaryTile
          title={7}
          subTitle='Low inventory'
          icon={
            <ProductionQuantityLimitsOutlined
              color='warning'
              sx={{ fontSize: 40 }}
            />
          }
        />
        <SummaryTile
          title={8}
          subTitle='Update in:'
          icon={<AccessTimeOutlined color='secondary' sx={{ fontSize: 40 }} />}
        />
      </Grid>
    </AdminLayout>
  );
};

export default DashboardPage;
