'use client';

import React from 'react';
import Box from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import SelectDropdown from '@/components/ui/select-dropdown';
import { useGetAllUsers, UserResponse } from '@/features/admin/users/api';
import { Roles } from '@/types/features/auth';
import { useParams } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client, urls } from '@/lib';
import { AxiosError } from 'axios';

interface AddUserFormValues {
  role: string;
  selectedUser: string;
}

const initialValues: AddUserFormValues = {
  role: 'supervisor',
  selectedUser: '',
};

const addUserSchema = Yup.object({
  role: Yup.string().required('Role is required'),
  selectedUser: Yup.string().required('Please select a user'),
});

interface IAddUserProps {
  open: boolean;
  onClose: () => void;
}
interface ApiErrorResponse {
  status: string;
  message: string;
}
const AddUser: React.FC<IAddUserProps> = ({ open, onClose }) => {
  const params = useParams();
  const { id } = params;

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      groupId,
      userId,
    }: {
      groupId: string;
      userId: string;
    }) => {
      const response = await client.post(urls.ADD_TO_GROUP, {
        groupId,
        userId,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success('User added successfully!');
      queryClient.invalidateQueries({ queryKey: ['group-members', id] });
      queryClient.invalidateQueries({ queryKey: ['group-details', id] });
      onClose?.();
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      const message = error?.response?.data?.message || 'Something went wrong';
      toast.error(message);
    },
  });

  const { setFieldValue, handleSubmit, values, errors, touched } =
    useFormik<AddUserFormValues>({
      initialValues,
      validationSchema: addUserSchema,
      onSubmit: (formValues, { resetForm }) => {
        console.log('Submitting to API:', {
          selectedUser: formValues.selectedUser,
        });

        mutate(
          { groupId: id as string, userId: formValues.selectedUser },
          {
            onSuccess: () => {
              resetForm();
            },
          }
        );
      },
    });

  const { data: fetchedUsers, isFetching } = useGetAllUsers(
    `role=${values.role}`
  );

  const userOptions = fetchedUsers?.users?.map((user: UserResponse) => ({
    value: user._id,
    label: `${user.firstName} ${user.lastName}`,
  }));

  if (!open) return null;

  return (
    <Box
      as="form"
      onSubmit={e => {
        e.preventDefault();
        console.log('Form submitted with values:', values);
        handleSubmit();
      }}
    >
      <Box className="mb-4">
        <RadioGroup
          name="role"
          value={values.role}
          onValueChange={value => {
            console.log('Role changed to:', value);
            setFieldValue('role', value);
          }}
        >
          <Box className="flex items-center gap-3">
            <RadioGroupItem value="supervisor" id="supervisor" />
            <Label htmlFor="supervisor">Supervisor</Label>
          </Box>
          <Box className="flex items-center gap-3">
            <RadioGroupItem value="student" id="student" />
            <Label htmlFor="student">Student</Label>
          </Box>
        </RadioGroup>
      </Box>

      <Box className="mb-4">
        <SelectDropdown
          options={userOptions || []}
          label={`Assign New ${
            values.role === Roles.SUPERVISOR ? 'Supervisor' : 'Student'
          }`}
          placeholder={`Select ${
            values.role === 'supervisor' ? 'Supervisor' : 'Student'
          }`}
          customStyle="10px"
          loading={isFetching}
          onChange={selected => {
            console.log('Dropdown selected:', selected);
            if (
              selected &&
              typeof selected === 'object' &&
              'value' in selected
            ) {
              setFieldValue('selectedUser', selected.value);
            }
          }}
        />
        {touched.selectedUser && errors.selectedUser && (
          <div className="text-red-500">{errors.selectedUser}</div>
        )}
      </Box>

      <Box className="flex flex-row items-center justify-between w-full mt-8">
        <Button
          type="button"
          onClick={onClose}
          className="bg-white border cursor-pointer text-black border-gray-500 hover:border-none hover:bg-red-500 hover:text-white py-2 rounded transition-all ease-in-out duration-500"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex ml-auto cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          loading={isPending}
        >
          Save User
        </Button>
      </Box>
    </Box>
  );
};

export default AddUser;
