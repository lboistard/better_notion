import Topbar from "@/components/topbar/Topbar";
import UserMenu from "@/components/menu/UserMenu";
import AppLayout from "@/layouts/AppLayout";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <UserMenu />
        <AppLayout />
      </div>
    </>
  )
}

export default Home;
