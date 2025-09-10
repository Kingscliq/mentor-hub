import Box from '@/components/ui/box';
import { Roles, User } from '@/types/features/auth';
import { useFetchGroups } from '@/hooks/groups';
import UserProfileCard from '@/features/groups/widgets/user-profile-card';
import { useAuth } from '@/hooks/auth/useAuthStore';

interface MiniProfileCardI {
  loggedUser: { id: number; name: string; role: string };
  getUser: (user: User) => void;
  selectedUserId?: string;
}

const MiniProfileCard: React.FC<MiniProfileCardI> = ({
  // loggedUser,
  getUser,
  selectedUserId,
}) => {
  const { userGroup } = useFetchGroups();
  console.log({ userGroup });

  const { role } = useAuth();
  return (
    <>
      <Box>
        <Box as="div" data-aos="fade-up">
          <Box
            as="section"
            className={`${
              role === Roles.SUPERVISOR && 'mt-10'
            } flex flex-col gap-y-10`}
          >
            <Box as="h1" className="py-5 text-2xl font-bold">
              Supervisor
            </Box>

            <Box as="div" className="flex flex-col gap-y-5">
              {userGroup?.supervisor &&
              typeof userGroup?.supervisor === 'object' ? (
                <Box
                  as="div"
                  key={userGroup?.supervisor._id}
                  data-aos="fade-up"
                >
                  <UserProfileCard
                    onClick={() => getUser(userGroup?.supervisor)}
                    active={selectedUserId === userGroup?.supervisor?._id}
                    name={`${userGroup?.supervisor.firstName} ${userGroup?.supervisor.lastName}`}
                    userType={userGroup?.supervisor.role ?? '-'}
                  />
                </Box>
              ) : (
                <Box
                  as="span"
                  className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full"
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        as="section"
        className={`${
          role === Roles.STUDENT && 'mt-10'
        } flex flex-col gap-y-10`}
      >
        <Box as="section">
          <Box as="h1" className="py-5 text-2xl font-bold">
            Students
          </Box>

          <Box as="div" className="flex flex-col gap-y-5">
            {userGroup?.users !== null &&
            typeof userGroup?.users !== 'undefined' &&
            Array.isArray(userGroup?.users) ? (
              userGroup.users.map((user: User) => (
                <Box as="div" key={user._id} data-aos="fade-up">
                  <UserProfileCard
                    onClick={() => getUser(user)}
                    active={selectedUserId === user?._id}
                    name={`${user.firstName} ${user.lastName}`}
                    userType={user.role ?? '-'}
                  />
                </Box>
              ))
            ) : (
              <Box
                as="span"
                className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full"
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MiniProfileCard;
