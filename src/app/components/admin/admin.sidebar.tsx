import { Home, BookA, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "root/components/ui/sidebar";

const navigationItems = [
  { name: "Home", href: "/admin", icon: Home },
  { name: "Course", href: "/admin/course/list", icon: BookA },
  { name: "Content", href: "/admin/content/list", icon: FileText },
];

const AdminSidebar = () => {
  const location = useLocation(); // para saber en qué página está el usuario

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b justify-center  h-16">
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarMenu>
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
    </Sidebar>
  );
};

export default AdminSidebar;
