import Box from "@/components/ui/box"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ADDPROJECTSCHEMA } from "@/schema/auth";
import { useFormik } from "formik"

interface InitialValuesType{
    projectTitle:string;
    projectDescription:string
}
const AddProjectForm = ({onClose}:{onClose:() => void}) => {
    const initialValues:InitialValuesType = {
       projectTitle:'',
       projectDescription:''
    }

    const {values,handleChange,handleSubmit,errors,touched,setFieldValue,handleBlur} = useFormik<InitialValuesType>({
        initialValues,
        validationSchema:ADDPROJECTSCHEMA,
        onSubmit:() => {
            console.log("formvalue", values)
            onClose()
        }
    })
  return (
    <Box>
        <Box className="mt-5" as="form" onSubmit={handleSubmit}>
           <Box as="section">
           <Input
            label="Project Title"
            name="projectTitle"
            value={values.projectTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            customBorder="border-b"
            error={
              touched.projectTitle && errors.projectTitle
                ? String(errors.projectTitle)
                : undefined
            }
          />
           </Box>

           <Box as="section" className="mt-5">
           <Textarea
            label="Project Description"
            name="projectDescription"
            value={values.projectDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            customBorder="border-b"
            error={
              touched.projectDescription && errors.projectDescription
                ? String(errors.projectDescription)
                : undefined
            }
          />
          <Box as="div" className="flex flex-col items-end w-full ml-auto">
            <Box as="p">{values.projectDescription.length}/500</Box>
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
                className=" bg-primary cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Submit
            </Button>
           </Box>
        </Box>
    </Box>
  )
}

export default AddProjectForm