import React from 'react';
import { useParams } from 'react-router';

import { useSynthState } from '@/hooks/useSynthState';

interface SynthParams {
  synthName: string;
}

const Synth: React.FC = () => {
  const { synthName } = useParams<SynthParams>();
  const synthState = useSynthState(synthName);

  return null;
};

export default Synth;
