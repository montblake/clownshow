import SideNav from '@/components/tour/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden lg:flex-row">
      <div className="w-full flex-none bg-muted text-muted-foreground drop-shadow md:px-2 lg:flex lg:w-64 lg:flex-col">
        <SideNav />
      </div>
      <div className="flex-grow bg-background p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
