import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stepSchoolImg from "@/assets/step-school.jpg";

const StepSchoolHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              STEP School – Inclusive Preschool
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              A customised, inclusive preschool for children with diverse learning needs. We provide individual attention, adaptive education, sensory-friendly learning spaces, and teachers trained in special education.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Safe & supportive environment</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Confidence-building activities</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Structured academic & skill-based learning</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Continuous progress monitoring</p>
              </div>
            </div>
            <Button asChild size="lg" variant="default">
              <Link to="/step-school">Learn More About STEP School</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-soft"
          >
            <img 
              src={stepSchoolImg} 
              alt="STEP School Inclusive Preschool"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepSchoolHighlight;