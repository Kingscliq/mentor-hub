import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addGroupSchema, addProjectSchema, addUserSchema } from "@/schema/auth";
import { Roles } from "@/types/features/auth";
import { useFormik } from "formik";
import { GroupDataI } from "../groups.module";
import { GroupRecordsI, useCreateGroup } from "../api";
import { toast } from "sonner";


interface InitialValuesType {
  name: string;
  maximum_size:number;
}

export interface AddGroupsFormProps {
  onClose: () => void;
  actionType: "edit" | "add";
  userDetails?: GroupRecordsI;
  refetch:() => void
}
const AddGroupsForm: React.FC<AddGroupsFormProps> = ({
  onClose,
  actionType,
  userDetails,
  refetch,
}) => {
  const initialValues: InitialValuesType = {
    name:actionType === "edit" ? (userDetails?.name as string) : "",
    maximum_size:actionType === "edit" ? (userDetails?.maximumGroupSize as number) : 0,
  };


  const createGroupMutation = useCreateGroup()
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik<InitialValuesType>({
    initialValues,
    validationSchema: addGroupSchema,
    onSubmit: () => {
      createGroupMutation.mutate({ name:values.name, maximumGroupSize:Number(values.maximum_size)}, {
        onSuccess: (data) => {
          toast.success(data.message || data.status);
          refetch();
          onClose();
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    },
  });
  return (
    <Box>
      <Box className="mt-10" as="form" onSubmit={handleSubmit}>
        <Box as="section">
          <Input
            label="Group Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            error={
              touched.name && errors.name ? String(errors.name) : undefined
            }
          />
        </Box>

        <Box as="section" className="mt-5">
          <Input
            label="Maximum Size"
            name="maximum_size"
            type="maximum_size"
            value={values.maximum_size}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            error={
              touched.maximum_size && errors.maximum_size ? String(errors.maximum_size) : undefined
            }
          />
        </Box>
        <Box
          as="section"
          className="flex flex-row items-center justify-between w-full mt-8"
        >
          <Button
            type="button"
            onClick={onClose}
            className=" bg-white cursor-pointer  border text-black border-gray-500 hover:border-none hover:bg-red-500  hover:text-white py-2 rounded transition-all ease-in-out duration-500"
          >
            Cancel
          </Button>

          {
            actionType === 'edit' && 

            <Button
            type="submit"
            loading={createGroupMutation.isPending}
            className=" bg-primary cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {createGroupMutation.isPending ? "Editing" : "Edit"}
          </Button>
          }
           {
            actionType === 'add' && 

            <Button
            type="submit"
            loading={createGroupMutation.isPending}
            className=" bg-primary cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {createGroupMutation.isPending ? "Creating" : "Create"}
          </Button>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default AddGroupsForm;
