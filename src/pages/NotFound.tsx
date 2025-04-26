
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <div className="p-4 rounded-full bg-tech-light-purple mb-6">
          <Compass className="h-12 w-12 text-tech-purple" />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
