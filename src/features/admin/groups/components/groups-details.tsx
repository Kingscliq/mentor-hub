'use client'
import { Button, Input } from "@/components/ui";
import Box from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { user1 } from "../../../../../public";
import SelectDropdown from "@/components/ui/select-dropdown";
import { useState } from "react";
import { useGetAllUsers, UserResponse } from "../../users/api";
import { useGetAllGroups } from "../api";


const AdminGroupDetails = ({params}:{params:string}) => {
  const[value,setValue] = useState<string>('')
  const[assignedUsers,setAssignedSelect] = useState({
    student:'',
    supervisor:''
  })

  const {data:fetchedStudent,isFetching:fetchingStudent} = useGetAllUsers(`role=student`)

  const {data:fetchedSupervisors,isFetching:fetchingSupervisors} = useGetAllUsers(`role=supervisor`)

  const {data:allGroups} = useGetAllGroups('')

  //group details
  const groupDetails = allGroups?.groups?.find(item => String(item?._id) === String(params)) 

  console.log('group',groupDetails)

  const studentOptions = fetchedStudent?.users?.map((item:UserResponse)=> {
    return{
      value:item._id,
      label:`${item.firstName} ${item.lastName}`
    }
  })

  const supervisorsOptions = fetchedSupervisors?.users?.map((item:UserResponse)=> {
    return{
      value:item._id,
      label:`${item.firstName} ${item.lastName}`
    }
  })


  const handleInputChange = (inputVal:string) => {
    setValue(inputVal)
}
    const isMentorEmpty = false
    const isMenteeEmpty = false

    const groupId = params
  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/admin/groups"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>
      <Box className="mt-10">

        <Box as="h2" className="text-2xl font-bold mb-5">{groupDetails?.name || "---"} </Box>

        <Card className="py-10 px-0">
            <Box as="div" className="bg-[#FAFAFA] py-4 px-4">
                <Box as="h2" className="text-black font-semibold">{groupDetails?.name || "---"} </Box>
                <Box as="p" className="text-sm text-gray-400">2 online</Box>
            </Box>
            
            {/* filter select */}
            <Box as='div' className="px-4">    
            <SelectDropdown
              options={ supervisorsOptions as {label:string,value:string}[]}
              label="Assign New Supervisor"
              customStyle="10px"
              placeholder="Select Supervisor"
              onInputChange={handleInputChange}
              loading={fetchingSupervisors}
              onChange={(selected: any) =>
                setAssignedSelect({
                  ...assignedUsers,
                  supervisor: selected.value,
                })
              }
            />
            
          
            </Box>
            
            {/* mentors sections */}
            <Box as='div' className="px-4">
                <Box as="h3" className="text-black font-bold mb-5">Group Supervisors</Box>

                   
                  {isMentorEmpty ? (<Card className="bg-blue-300 py-5"><Box>No Supervisor Assigned</Box></Card>) :(
                    <Card className="">
                    <Box as="div" className="flex items-center gap-x-5 px-4">
                        <Box>
                            <Image src={user1} alt="" width={40}/>
                        </Box>
                        <Box as="div">
                            <Box as="h2" className="text-lg font-semibold">Michael Ani</Box>
                            <Box as="h3" className="text-xs">Mentor</Box>
                        </Box>
                    </Box>
                    </Card>
                  )
                   }
               
            </Box>

            {/* mentee sections */}

            <Box as='div' className="px-4">
                <Box as="h3" className="text-black font-bold mb-4">Group Students</Box>

                 {/* filter select  */}
                <Box as='div' className="mb-5">
                 <SelectDropdown
              options={ studentOptions as {label:string,value:string}[]}
              label="Assign New Student"
              customStyle="10px"
              placeholder="Select a Student"
              onInputChange={handleInputChange}
              loading={fetchingSupervisors}
              onChange={(selected: any) =>
                setAssignedSelect({
                  ...assignedUsers,
                  student: selected.value,
                })
              }
            />
               </Box>

               <Card className="">
                    <Box as="div" className="flex items-center gap-x-5 px-4">
                        <Box>
                            <Image src={user1} alt="" width={40}/>
                        </Box>
                        <Box as="div">
                            <Box as="h2" className="text-lg font-semibold">Michael Ani</Box>
                            <Box as="h3" className="text-xs">Mentor</Box>
                        </Box>
                    </Box>
                    </Card>
            </Box>
            <Box as="div" className="px-4">
            <Button className="bg-primary text-white flex ml-auto">Save Changes</Button>
            </Box>
        </Card>

        
      </Box>
    </Box>
  );
};

export default AdminGroupDetails;
