import Box from "@/components/ui/box"
import UserProfileCard from "../widgets/user-profile-card"
import { GroupsDetailsI } from "@/types/features/groups"

interface MiniProfileCardI{
    loggedUser:{id:number, name:string, role:string};
    viewGroups:GroupsDetailsI[];
    getUser:(user:GroupsDetailsI['mentor'] ) => void
    selectedUserId?:string
}
const MiniProfileCard:React.FC<MiniProfileCardI> = ({loggedUser, viewGroups, getUser,selectedUserId}) => {
  return (
    <>
    {loggedUser.role === "mentee" && (
      <Box>
        {viewGroups.map((item) => (
          <Box as="div" key={item._id} data-aos="fade-up">
            <Box as="h1" className="py-5 text-2xl font-bold">
              Group Mentors
            </Box>
            {/* card */}
            <UserProfileCard onClick={() => getUser(item?.mentor)} active={selectedUserId === item?.mentor?._id}  name={item.mentor.name} userType={item.mentor.userType} />
          </Box>
        ))}
      </Box>
    )}

    <Box as="section" className={`${loggedUser.role === "mentee" && "mt-10"} flex flex-col gap-y-10`}>
      {viewGroups.map((item) => (
        <Box as="section" key={item._id} >
          <Box as="h1" className="py-5 text-2xl font-bold">
            {loggedUser.role === 'mentee' ? "Group Mentees" : item?.projectName}
          </Box>

          <Box as="div" className="flex flex-col gap-y-5">
            {item?.mentees?.map((item) => (
              // cards
              <Box as="div" key={item._id} data-aos="fade-up">
                <UserProfileCard onClick={() => getUser(item)} active={selectedUserId === item?._id}  name={item?.name} userType={item?.userType}/>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </>
  )
}

export default MiniProfileCard