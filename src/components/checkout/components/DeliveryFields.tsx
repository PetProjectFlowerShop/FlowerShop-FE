import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { TextFieldElement } from 'react-hook-form-mui';

import { deliveryTimeSlots, type DeliveryFormValues } from '../schemas/deliverySchema';

const cities = ['Kyiv', 'Lviv', 'Odesa', 'Dnipro'];

const streetsByCity: Record<string, string[]> = {
  Kyiv: ['Khreshchatyk', 'Velyka Vasylkivska'],
  Lviv: ['Svobody Ave', 'Shevchenka'],
  Odesa: ['Deribasivska', 'Shevchenka Ave'],
  Dnipro: ['Dmytra Yavornytskoho Ave', 'Shevchenka'],
};

export function DeliveryFields() {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<DeliveryFormValues>();

  const city = watch('city');

  const deliveryMethod = useWatch({
    control,
    name: 'deliveryMethod',
  });

  return (
    <Stack spacing={5}>
      <Stack spacing={6}>
        <FormControl error={!!errors.deliveryMethod}>
          <Typography variant="body" mb={3}>
            How to deliver *
          </Typography>

          <Controller
            name="deliveryMethod"
            control={control}
            render={({ field }) => (
              <RadioGroup
                row
                value={field.value}
                onChange={(event) => {
                  const value = event.target.value as 'courier' | 'pickup';

                  field.onChange(value);

                  if (value === 'pickup') {
                    setValue('city', '');
                    setValue('street', '');
                    setValue('building', '');
                    setValue('entrance', '');
                    setValue('apartment', '');
                  }
                }}
                sx={{ gap: 5 }}
              >
                {[
                  { value: 'courier', label: 'Courier' },
                  { value: 'pickup', label: 'Pickup' },
                ].map((option) => {
                  const selected = field.value === option.value;

                  return (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio sx={{ display: 'none' }} />}
                      label={option.label}
                      sx={{
                        m: 0,
                        border: selected ? '2px solid' : '1px solid',
                        borderColor: 'primary.main',
                        borderRadius: 4,
                        px: 2.5,
                        py: 2,
                        bgcolor: selected ? '#dadecd' : 'background.paper', // 'action.selected'
                        '& .MuiFormControlLabel-label': {
                          width: '100%',
                          textAlign: 'center',
                        },
                      }}
                    />
                  );
                })}
              </RadioGroup>
            )}
          />

          {errors.deliveryMethod && (
            <FormHelperText>{errors.deliveryMethod.message}</FormHelperText>
          )}
        </FormControl>

        {deliveryMethod === 'courier' ? (
          <Stack spacing={5}>
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={cities}
                  value={field.value || null}
                  onChange={(_, value) => {
                    field.onChange(value ?? '');

                    // Reset the street when the city changes.
                    setValue('street', '', {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
                      placeholder="Select a city"
                      required
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            <Controller
              name="street"
              control={control}
              render={({ field, fieldState }) => (
                <Autocomplete
                  options={streetsByCity[city] ?? []}
                  value={field.value || null}
                  disabled={!city}
                  onChange={(_, value) => field.onChange(value ?? '')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Street"
                      placeholder="Select a street"
                      required
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

            <Grid container spacing={5}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <TextFieldElement
                  name="building"
                  label="Building"
                  placeholder="Enter building"
                  required
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <TextFieldElement
                  name="entrance"
                  label="Entrance"
                  placeholder="Enter entrance"
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <TextFieldElement
                  name="apartment"
                  label="Apartment"
                  placeholder="Enter apartment"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Stack>
        ) : (
          /* Pickup address */
          <Box
            sx={{
              m: 0,
              border: '1px solid',
              borderColor: 'primary.dark',
              borderRadius: 5,
              p: 4,
            }}
          >
            <Typography variant="body">
              <Typography component="div" fontWeight={600} mb={3}>
                Our Store
              </Typography>
              <Typography component="div">12 Kvitkova St., Kyiv</Typography>
            </Typography>
          </Box>
        )}

        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextFieldElement
              name="orderDate"
              label="Order Date"
              type="date"
              required
              fullWidth
              slotProps={{
                inputLabel: { shrink: true },
                input: { notched: false },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Controller
              name="orderTime"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  label="Order Time"
                  required
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                >
                  {deliveryTimeSlots.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
        </Grid>
      </Stack>

      <TextFieldElement
        name="orderComment"
        label="Order Comment"
        placeholder="Entry code, floor, or other details..."
        multiline
        minRows={1}
        fullWidth
      />
    </Stack>
  );
}
