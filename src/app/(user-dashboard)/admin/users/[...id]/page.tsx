import AdminUserDetails from "@/features/admin/users/components/user-details"


const AdminUsersDetails = async({params}:{params:Promise<{id:string}>}) => {
   const {id} = await params
  return (
    <AdminUserDetails params={id}/>
  )
}

export default AdminUsersDetails