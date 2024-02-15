import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
};

interface AnalyticsLayoutProps {
  children: React.ReactNode;
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return <>{children}</>;
};

export default AnalyticsLayout;
