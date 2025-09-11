import AdminGroupDetails from '@/features/admin/groups/components/groups-details';

const AdminGroupsDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <AdminGroupDetails params={id} />;
};

export default AdminGroupsDetails;
