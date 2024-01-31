import TopBar from "@/components/topbar/TopBar";
import AppLayout from "@/layouts/AppLayout";

const Tasks = () => {
  return (
    <div className="flex">
      <AppLayout>
        <TopBar />
        <div>tasks</div>
      </AppLayout>
    </div>
  );
};

export default Tasks;
