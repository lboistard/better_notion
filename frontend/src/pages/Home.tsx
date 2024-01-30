import TopBar from "@/components/topbar/TopBar";
import AppLayout from "@/layouts/AppLayout";

const Home = () => {
  return (
    <div className="flex">
      <AppLayout>
        <TopBar />
      </AppLayout>
    </div>
  );
};

export default Home;
