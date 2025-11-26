import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button asChild variant="cta" size="lg" className="shadow-xl">
        <Link to="/contact" className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Book Assessment</span>
          <span className="sm:hidden">Book Now</span>
        </Link>
      </Button>
    </motion.div>
  );
};

export default FloatingCTA;