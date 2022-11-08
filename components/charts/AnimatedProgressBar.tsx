import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography'
import { HorizontalCenteredStack } from '@/components/layout'
import { useCountUp } from '@/hooks'

interface AnimatedProgressBarProps {
  currentCount: number,
  totalCount: number,
}

const AnimatedProgressBar = ({ currentCount, totalCount }: AnimatedProgressBarProps) => {
  const count = useCountUp(currentCount, 1)
  const progress = Math.round(count / totalCount * 100)

  return (
    <HorizontalCenteredStack spacing={1} mt={1}>
      <Typography>{progress}%</Typography>
      <LinearProgress
        value={progress}
        variant="determinate"
        sx={{ width: '100%' }}
      />

      <Typography>
        {count}
        <Typography component="span" color="grey.500">/{totalCount}</Typography>
      </Typography>
    </HorizontalCenteredStack>
  )
}

export default AnimatedProgressBar