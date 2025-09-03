import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { addUserSchema } from '@/schema/auth';
import { useFormik } from 'formik';
import { UserResponse } from '../api';

interface InitialValuesType {
  name: string;
  email: string;
  role: string;
}

export interface AddUserFormProps {
  onClose: () => void;
  actionType: 'edit' | 'add';
  userDetails?: UserResponse;
}
const AddUserForm: React.FC<AddUserFormProps> = ({
  onClose,
  actionType,
  userDetails,
}) => {
  const initialValues: InitialValuesType = {
    name: actionType === 'edit' ? (userDetails?.firstName as string) : '',
    email: actionType === 'edit' ? (userDetails?.email as string) : '',
    role: actionType === 'edit' ? (userDetails?.role as string) : '',
  };

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
    validationSchema: addUserSchema,
    onSubmit: () => {
      console.log('formvalue', values);
      onClose();
    },
  });
  return (
    <Box>
      <Box className="mt-10" as="form" onSubmit={handleSubmit}>
        <Box as="section">
          <Input
            label="Name"
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
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            error={
              touched.email && errors.email ? String(errors.email) : undefined
            }
          />
        </Box>

        {/* Role Select */}
        <Box as="section" className="mt-5">
          <Box
            as="label"
            htmlFor="role"
            className="text-sm font-medium text-gray-600 block mb-1"
          >
            Role
          </Box>
          <Select
            value={values.role}
            onChange={value => setFieldValue('role', value)}
            options={[
              { value: 'supervisor', label: 'Supervisor' },
              { value: 'student', label: 'Student' },
            ]}
            placeholder="Choose a role"
          ></Select>
          {touched.role && errors.role && (
            <Box as="p" className="text-sm text-red-500 mt-1">
              {errors.role}
            </Box>
          )}
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
          <Button
            type="submit"
            className=" bg-primary cursor-pointer text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {actionType === 'edit' ? 'Edit' : 'Create'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddUserForm;
