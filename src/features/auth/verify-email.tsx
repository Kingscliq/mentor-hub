'use client';

import { Button, OTPField } from '@/components/ui';
import Box from '@/components/ui/box';
import React, { useState } from 'react';

const VerifyEmail = () => {
  const [pin, setPin] = useState<string>('');
  return (
    <Box
      as="div"
      className="flex flex-col items-center justify-center h-screen w-screen"
    >
      <Box as="h2" className="text-lg font-bold text-center">
        Check Your Email
      </Box>
      <Box as="p" className="text-xs text-center">
        We sent a code to anyavictor@gmail.com{' '}
        {/* TODO: Replace with actual email from URL*/}
      </Box>
      <Box as="section">
        <OTPField value={pin} onChange={value => setPin(value)} maxLength={4} />
      </Box>
      <Button>Verify Email</Button>
    </Box>
  );
};

export default VerifyEmail;
