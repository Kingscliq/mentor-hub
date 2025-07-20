'use client';

import { OTPField } from '@/components/ui';
import Box from '@/components/ui/box';
import React, { useState } from 'react';

const VerifyEmail = () => {
  const [pin, setPin] = useState<string>('');
  return (
    <Box>
      <OTPField
        hasSeparator
        value={pin}
        onChange={value => setPin(value)}
        maxLength={6}
        error={true}
        errorMessage="Invalid OTP"
      />
    </Box>
  );
};

export default VerifyEmail;
