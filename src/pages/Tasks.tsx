import TaskCard from "@/components/ui/tasks/TaskCard";
import { useAppSelector } from "@/redux/hook";
import { selectTasks } from "@/redux/task/taskSlice";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="container mx-auto mt-10">
      <div>
        <h3>Tasks</h3>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
