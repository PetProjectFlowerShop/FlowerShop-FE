import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Button, Stack } from '@mui/material';
import { FeedbackSuccessDialog } from './FeedbackSuccessDialog';

type CallFormValues = {
  name: string;
  phone: string;
};

export function QuestionsForm() {
  const defaultValues: CallFormValues = {
    name: '',
    phone: '',
  };

  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  const handleSubmit = (data: CallFormValues) => {
    console.log(data);

    setResetForm(true);
    setIsSuccessDialogOpen(true);
  };

  return (
    <>
      <FormContainer defaultValues={defaultValues} onSuccess={handleSubmit}>
        <QuestionsFormFields resetForm={resetForm} onResetComplete={() => setResetForm(false)} />
      </FormContainer>

      <FeedbackSuccessDialog
        open={isSuccessDialogOpen}
        onClose={() => setIsSuccessDialogOpen(false)}
      />
    </>
  );
}

interface QuestionsFormFieldsProps {
  resetForm: boolean;
  onResetComplete: () => void;
}

function QuestionsFormFields({ resetForm, onResetComplete }: QuestionsFormFieldsProps) {
  const { reset } = useFormContext<CallFormValues>();

  useEffect(() => {
    if (resetForm) {
      reset();
      onResetComplete();
    }
  }, [resetForm, reset, onResetComplete]);

  return (
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
  );
}
