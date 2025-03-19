import { Home, BookA } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "root/components/ui/sidebar";

const navigationItems = [
  { name: "Home", href: "/admin", icon: Home },
  { name: "Course", href: "/admin/course/list", icon: BookA },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b justify-center  h-16">
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="ml-2 space-y-2">
          {navigationItems.map(({ name, href, icon: Icon }) => (
            <SidebarMenuItem key={name}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === href}
                tooltip={name}
              >
                <Link to={href} className="flex gap-2 items-center">
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
