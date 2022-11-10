import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TaskBoard from './TaskBoard'

const DashboardTasks = (props: StackProps) => {
  return (
    <Stack
      color="common.white"
      spacing={2}
      px={5}
      {...props}
    >
      <Typography component="h1" variant="h4">
        Your Tasks for Today
      </Typography>

      <TaskBoard />
    </Stack>
  )
}

export default DashboardTasks