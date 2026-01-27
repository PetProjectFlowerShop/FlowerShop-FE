import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type FormValues = {
  email: string;
};

export function LoginForm() {
  const { control, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: 'Email is required' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
