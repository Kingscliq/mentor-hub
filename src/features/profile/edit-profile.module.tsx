import Box from '@/components/ui/box';
import EditProfileForm from '@/features/profile/components/edit-profile-form';

export default function EditProfilePage() {
  return (
    <Box className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <EditProfileForm />
    </Box>
  );
}
