import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Button, Stack } from '@mui/material';

type CallFormValues = {
  name: string;
  phone: string;
};

export function QuestionsForm() {
  const defaultValues: CallFormValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = (data: CallFormValues) => {
    console.log(data);
  };

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={handleSubmit}>
      <Stack spacing={6}>
        <Stack spacing={4}>
          <TextFieldElement
            name="name"
            label="Name"
            placeholder="Enter your name"
            fullWidth
            required
            rules={{
              required: 'Enter your name',
            }}
          />

          <TextFieldElement
            name="phone"
            label="Phone number"
            placeholder="Enter your phone number"
            fullWidth
            required
            rules={{
              required: 'Enter your phone number',
            }}
          />
        </Stack>

        <Button type="submit" variant="contained" fullWidth>
          Waiting for call
        </Button>
      </Stack>
    </FormContainer>
  );
}
