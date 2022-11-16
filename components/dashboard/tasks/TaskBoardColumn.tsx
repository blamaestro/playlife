import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { HorizontalCenteredStack } from '@/components/layout'
import { Task, TaskColumn } from '@/types'
import TaskBoardCard from './TaskBoardCard'

interface TasksColumnProps {
  column: TaskColumn,
  tasks: Task[],
  onTaskSelect: (task: Task) => void,
}

const columnStyle = {
  width: 400,
  backgroundColor: '#1E1F25',
  border: 1,
  borderColor: 'grey.800',
  borderRadius: 2,
  overflowY: 'auto',
  p: 1,
}

const DashboardTasksColumn = ({ column, tasks, onTaskSelect }: TasksColumnProps) => {
  const hasTasks = tasks.length > 0

  return (
    <Droppable
      droppableId={column.id.toString()}
      type={column.status}
    >
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <Stack
          component="section"
          spacing={1}
          ref={provided.innerRef}
          sx={columnStyle}
        >
          <HorizontalCenteredStack spacing={1} pl={1}>
            <Box
              width={10}
              height={10}
              borderRadius="50%"
              bgcolor={column.color}
            />
            <Typography
              fontWeight="bold"
              color="grey.500"
              variant="subtitle2"
            >
              {column.name}
            </Typography>
          </HorizontalCenteredStack>

          <Stack
            justifyContent={hasTasks ? 'flex-start' : 'center'}
            flexGrow={1}
            spacing={1}
          >
            {hasTasks ? tasks.map((task, taskIndex) => (
              <TaskBoardCard
                key={task.id}
                task={task}
                index={taskIndex}
                onClick={() => onTaskSelect(task)}
              />
            )) : (
              <Typography
                variant="h5"
                color="grey.500"
                align="center"
              >
                No Tasks
              </Typography>
            )}
            {provided.placeholder}
          </Stack>
        </Stack>
      )}
    </Droppable>
  )
}

export default DashboardTasksColumn