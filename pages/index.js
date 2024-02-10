import { DashBoardPage } from "@/components/DashBoardPage";
import { DefaultLayout } from "@/components/Layout/DefaultLayout";

function HomePage() {
  return (
    <>
      <DefaultLayout>
        <DashBoardPage />
      </DefaultLayout>
    </>
  );
}

export default HomePage;
