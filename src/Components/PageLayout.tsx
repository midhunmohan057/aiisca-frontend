type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-6">
      <div style={{ margin: 0 }}>
        {" "}
        {/* Wrapper to reset margins */}
        {children}
      </div>
    </main>
  );
}
