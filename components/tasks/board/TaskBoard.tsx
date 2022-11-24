import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import { toast } from 'react-toastify'
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { fakeAxios } from '@/database'
import { tasksActions } from '@/store/tasks'
import { selectTasksByStatus } from '@/store/tasks'
import { TaskDialog } from '@/components/dialogs'
import { taskBoardColumns } from '@/constants'
import { Task } from '@/types'
import TaskBoardColumn from './TaskBoardColumn'

const TaskBoard = (stackProps: StackProps) => {
  const dispatch = useDispatch()
  const tasksByStatus = useSelector(selectTasksByStatus)

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  useEffect(() => {
    // To-do: This will be moved to Redux store once async actions are set up
    const asyncGetTasks = async () => {
      const tasks = await fakeAxios.get('/tasks')
      console.log({ tasks })
    }
    asyncGetTasks()
  }, [])

  const onDragEnd: DragDropContextProps['onDragEnd'] = result => {
    const destinationId = result.destination?.droppableId
    if (!destinationId) return
    const payload = { taskId: +result.draggableId, columnId: +destinationId }
    dispatch(tasksActions.updateTaskColumn(payload))
  }

  const updateTask = (task: Task) => {
    dispatch(tasksActions.updateTask(task))
    setSelectedTask(null)
    toast.success('Task was successfully updated')
  }

  return (
    <Stack
      overflow="hidden"
      spacing={2}
      {...stackProps}
    >
      <Typography component="h1" variant="h4">
        Your Tasks for Today
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack
          direction="row"
          justifyContent="space-between"
          overflow="hidden"
          flex={1}
          spacing={2}
          py={0.5}
        >
          {taskBoardColumns.map(column => (
            <TaskBoardColumn
              key={column.id}
              column={column}
              tasks={tasksByStatus[column.status] || []}
              onTaskSelect={setSelectedTask}
            />
          ))}
        </Stack>
      </DragDropContext>

      {selectedTask && (
        <TaskDialog
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSubmit={updateTask}
        />
      )}
    </Stack>
  )
}

export default TaskBoard