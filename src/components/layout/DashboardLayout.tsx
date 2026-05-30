import { SidebarProvider, SidebarTrigger} from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>      
        <div className="flex min-h-screen">
        <AppSidebar />
        
        <main className="flex-1 p-6">
            <SidebarTrigger />
            {children}
        </main>
        </div>
    </SidebarProvider>
  );
}