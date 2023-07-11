interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return <div>{children}</div>;
};

export default Sidebar;
