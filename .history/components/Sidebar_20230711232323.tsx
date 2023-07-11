interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC = () => {
  return <div>{children}</div>;
};

export default Sidebar;
