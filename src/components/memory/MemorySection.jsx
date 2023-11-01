import { Typography } from "../atom/Typography";
import { Button } from '../atom/Button';
import { SectionWrapper } from '../atom/SectionWrapper';
import { MemoryBoard } from './MemoryBoard';
import { MemoryContextProvider, useMemory } from './MemoryProvider';

export const MemorySection = () => {
  return (
    <SectionWrapper title="You're boring ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <TryCountText />
            <MemoryBoard />
            <ResetButton />
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

const TryCountText = () => {
  const { tryCount, isFinish } = useMemory();
  if(isFinish) {
    return <Typography variant="body2">You win in {tryCount} tries!</Typography>
  
  }

  return <Typography variant="body2">You try {tryCount} time(s)</Typography>
}

const ResetButton = () => {
  const { reset } = useMemory();
  return <Button onClick={reset}>Reset</Button>;
}