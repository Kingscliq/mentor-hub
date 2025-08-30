import { AddProjectFormValues } from '@/types/features/projects';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { addProjectSchema } from '@/schema/auth';
import { useFormik } from 'formik';

const AddProjectForm = ({ onClose }: { onClose: () => void }) => {
  const initialValues: AddProjectFormValues = {
    topic: '',
    description: '',
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik<AddProjectFormValues>({
      initialValues,
      validationSchema: addProjectSchema,
      onSubmit: () => {
        console.log('formvalue', values);
        onClose();
      },
    });
  return (
    <Box>
      <Box className="mt-5" as="form" onSubmit={handleSubmit}>
        <Box as="section">
          <Input
            label="Project Topic"
            name="topic"
            value={values.topic}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Project Topic"
            error={
              touched.topic && errors.topic ? String(errors.topic) : undefined
            }
          />
        </Box>

        <Box as="section" className="mt-5">
          <Textarea
            label="Project Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Project Descrition"
            error={
              touched.description && errors.description
                ? String(errors.description)
                : undefined
            }
          />
          <Box as="div" className="flex flex-col items-end w-full ml-auto">
            <Box as="p" className="text-xs">
              {values.description.length}/500
            </Box>
          </Box>
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
            className="flex ml-auto cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProjectForm;
