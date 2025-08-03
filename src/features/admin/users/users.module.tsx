import { Button, Input } from "@/components/ui";
import Box from "@/components/ui/box";
import Search from "@/components/ui/search";
import { Bookmark, ChevronLeft, Plus } from "lucide-react";
import React, { useState } from "react";
import { UsersTable } from "./components/user-table";
import { PaginationState } from "@tanstack/react-table";
import useDebounce from "@/hooks/dashboard";
import MainModal from "@/components/modals";
import AddUserForm from "./widgets/add-user-form";


export interface UserDataI {
    _id:string
    name:string;
    email:string;
    phone:string;
    role:string;
    assigned_group:string;
    status:string;
}

export const userTabs = [
    {
        id: "1",
        category: "all",
        role: "all",
      },
      {
        id: "2",
        category: "mentors",
        role: "mentor"
      },
      {
        id: "3",
        category: "mentees",
        role: "mentee",
      },
]

export const userData:UserDataI[] = [
    {
        _id:'1',
        name:'Ami Vivian',
        email:'ami@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    },
    {
        _id:'2',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    },
    {
        _id:'3',
        name:'Ami Vivian',
        email:'ami@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    },
    {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'inactive'
    },
    {
        _id:'5',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'6',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'7',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'8',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'9',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'10',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'11',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'12',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'13',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'14',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'15',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentee',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentee',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentee',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    }, {
        _id:'4',
        name:'Sandra New',
        email:'sandra@gmail.com',
        phone:'08123456789',
        role:'mentor',
        assigned_group:"Ai Research",
        status:'active'
    },
]
const UsersModule = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [allUserData, setAllUserData] = useState<UserDataI[]>(userData);
  const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false)
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 30,
  });
  
  ///delays the search after typing
  const deboundedVal = useDebounce(searchTerm,1500)

  //handle tab selected
  const handleSelected = (role:string, _activeTab:string) => {
    if(role === 'all'){
       setAllUserData(userData)
       setActiveTab('all')
    }else{
        const filteredData = userData.filter(item => item.role === role)
        setAllUserData(filteredData)
        setActiveTab(_activeTab)
        console.log('clicked',role,activeTab)
    }
  }
  //search functionality will be removed later
  const filtered = allUserData.filter(item => item.name.toLowerCase().includes(deboundedVal.toLowerCase()))
  //returns the tab count
  const getTabCount = (_tab:string) => {
        if (_tab === "all") {
          return filtered?.length || 0
        } else if (_tab === "mentor") {
           return filtered.filter(item => item.role === _tab)?.length || 0
        } else if (_tab === "mentee") {
            return filtered.filter(item => item.role === _tab)?.length || 0
         }   
  }
  return (
    <Box as="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Box
        as="a"
        href="/dashboard"
        className="hover:bg-[#dedbdb] rounded-full size-10 justify-center flex flex-col items-center"
      >
        <ChevronLeft />
      </Box>
      <Box className="mt-10">
        <Box as="h2" className="text-2xl font-bold mb-5">User Management</Box>
        <Box as="div" className="bg-white p-6">
          <Box
            as="section"
            className="flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Box as="div" className="flex items-center gap-x-3">
              <Button
                onClick={() => setOpenAddUserModal(true)}
                className="flex  cursor-pointer"
              >
                {" "}
                <Plus /> Add New User
              </Button>
            </Box>
          </Box>

          {/* Tabs */}

          <Box>
          <section className="overflow-x-scroll no-modal-scroll-track">
          <section className="whitespace-nowrap flex px-4 gap-x-5 mt-5 w-full">
            {userTabs.map((item) => (
              <p
                onClick={() => handleSelected(item.role,item.category)}
                key={item.id}
                className={`${
                  item.category === activeTab
                    ? "text-primary border-primary border-b-2"
                    : "text-black border-white border-b-2"
                } px-6 pb-2 text-center hover:text-primary cursor-pointer capitalize transition-color ease-in-out duration-500 h-[30px]`}
              >
                {item.category}({getTabCount(item.role)})
              </p>
            ))}
          </section>
        </section>
          </Box>
          {/* Table */}
          <Box as="div">
             <UsersTable data={filtered || []} handleAddUser={() => setOpenAddUserModal(true)} paginationState={paginationState} setPaginationState={setPaginationState}  refetch={() => {}} isLoadingData={false} totalItemsCount={filtered.length || 0}/>
          </Box>
        </Box>
      </Box>
      <MainModal title="Add New User"  open={openAddUserModal} onClose={() => setOpenAddUserModal(false)}>
        <Box as="p" className="text-gray-500 text-sm">Create a new user account with the account below</Box>
        <AddUserForm actionType="add" onClose={() => setOpenAddUserModal(false)}/>
      </MainModal>
    </Box>
  );
};

export default UsersModule;
