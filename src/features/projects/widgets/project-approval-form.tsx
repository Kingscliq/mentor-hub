import Box from "@/components/ui/box"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { APPROVEPROJECTSCHEMA } from "@/schema/auth";
import { useFormik } from "formik"
import { ActionTypeI } from "../projects.module";

interface InitialValuesType{
    comment:string;
}
const ApproveProjectForm = ({onClose,actionType}:{onClose:() => void; actionType?:ActionTypeI}) => {
    const initialValues:InitialValuesType = {
       comment:''
    }

    const {values,handleChange,handleSubmit,errors,touched,setFieldValue,handleBlur} = useFormik<InitialValuesType>({
        initialValues,
        validationSchema:APPROVEPROJECTSCHEMA,
        onSubmit:() => {
            console.log("formvalue", values)
            onClose()
        }
    })
  return (
    <Box>
        <Box className="mt-10" as="form" onSubmit={handleSubmit}>
           <Box as="section" className="mt-5">
           <Textarea
            label="Comment"
            name="comment"
            value={values.comment}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            customBorder="border-b"
            error={
              touched.comment && errors.comment
                ? String(errors.comment)
                : undefined
            }
          />
          <Box as="div" className="flex flex-col items-end w-full ml-auto">
            <Box as="p">{values.comment.length}/500</Box>
          </Box>
           </Box>

           <Box as='section' className="flex flex-row items-center justify-between w-full mt-8">
           <Button
            type="button"
            onClick={onClose}
            className=" bg-white cursor-pointer  border text-black border-gray-500 hover:border-none hover:bg-red-500  hover:text-white py-2 rounded transition-all ease-in-out duration-500"
          >
            Cancel
          </Button>
            <Button
                type="submit"
                className={`${actionType === "approve" ? "bg-green-600" : "bg-red-500"}  cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition`}
            >
                {actionType === "approve" ? "Approve" : "Reject"}
            </Button>
           </Box>
        </Box>
    </Box>
  )
}

export default ApproveProjectForm