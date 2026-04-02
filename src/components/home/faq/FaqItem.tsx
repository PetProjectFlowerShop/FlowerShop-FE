import { theme } from '../../../theme';
import { faqData } from './data/faq.data';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import { Icon } from '../../common/Icon';

export function FaqItem() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacingTokens.stackXs }}>
      {faqData.map((item) => (
        <Accordion
          elevation={0}
          key={item.id}
          disableGutters
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={
              <IconButton
                variant="default"
                component="div"
                sx={{
                  backgroundColor: 'primary.main',
                  borderRadius: '16px',
                  width: 40,
                  height: 40,
                  padding: '8px',
                  color: 'primary.contrastText',
                  opacity: 1,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <Icon name="chevron-down" width={24} height={24} />
              </IconButton>
            }
            sx={{
              height: { xs: 63, md: 87 },
              display: 'flex',
              alignItems: 'center',
              borderRadius: '12px 12px 0 0',
              px: theme.spacingTokens.stackXs,
              gap: theme.spacingTokens.microX,
              '& .MuiAccordionSummary-content': {
                m: 0,
                p: 0,
              },

              '& .MuiAccordionSummary-expandIconWrapper': {
                margin: 0,
              },
            }}
          >
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, mb: 3 }}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', px: theme.spacingTokens.stackXs }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
