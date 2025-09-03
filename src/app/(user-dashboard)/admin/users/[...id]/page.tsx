import AdminUserDetails from '@/features/admin/users/components/user-details';

const AdminUsersDetails = async ({}: { params: Promise<{ id: string }> }) => {
  return <AdminUserDetails />;
};

export default AdminUsersDetails;
