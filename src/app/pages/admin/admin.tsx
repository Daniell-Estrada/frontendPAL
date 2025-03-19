import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "root/components/ui/sidebar";
import AdminSidebar from "app/components/admin/admin.sidebar";
import { Separator } from "root/components/ui/separator";
import AdminHeader from "app/components/admin/admin.header";

export default function AdminPage() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminHeader />
        <Separator />
        <div className="p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
