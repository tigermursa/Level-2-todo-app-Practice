export interface Itask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High" | "Very High";
}
