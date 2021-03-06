import React from 'react';
import { useParams } from 'react-router';

import { useSynthState } from '@/hooks/useSynthState';

import Button from '@/components/Button';

interface SynthPageParams {
  synthName: string;
}

const SynthPage: React.FC = () => {
  const { synthName } = useParams<SynthPageParams>();
  const synthState = useSynthState(synthName);

  return <Button></Button>;
};

export default SynthPage;
