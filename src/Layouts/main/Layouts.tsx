import Sidebar from "./sidebar/Sidebar";

interface LayoutProps {
  pageshow: React.ReactNode; 
}

const Layouts: React.FC<LayoutProps> = ({ pageshow }) => {
  return (
    <div className="flex h-screen p-4 bg-[#272727]">
      <Sidebar />
      <main className="flex-grow rounded-md shadow-lg bg-[#F5F6FB]">
        {pageshow}
      </main>
    </div>
  );
}

export default Layouts;