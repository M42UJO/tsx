import DashboardHeader from "./components/DashboardHeader"
import DashboarfSestion from "./components/DashboarfSestion"


function Dashboard() {
  return (
    <main className="flex-grow rounded-md p-6  bg-[#F5F6FB]">
        <DashboardHeader/>
        <DashboarfSestion/>
    </main>
  )
}

export default Dashboard