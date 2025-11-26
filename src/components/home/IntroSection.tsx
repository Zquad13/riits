import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About RIITS Child Development Centre
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            RIITS Child Development Centre is dedicated to helping children of all abilities reach their fullest potential.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since 2020, we've empowered children to achieve developmental milestones while supporting families with guidance, education, and evidence-based care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;