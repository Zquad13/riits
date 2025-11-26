import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import speechTherapyImg from "@/assets/speech-therapy.jpg";
import occupationalTherapyImg from "@/assets/occupational-therapy.jpg";
import behaviourTherapyImg from "@/assets/behaviour-therapy.jpg";
import specialEducationImg from "@/assets/special-education.jpg";
import abaTherapyImg from "@/assets/aba-therapy.jpg";
import groupTherapyImg from "@/assets/group-therapy.jpg";
import counsellingImg from "@/assets/counselling.jpg";
import onlineTherapyImg from "@/assets/online-therapy.jpg";

const departments = [
  { name: "Speech Therapy", href: "/services/speech-therapy", image: speechTherapyImg },
  { name: "Occupational Therapy", href: "/services/occupational-therapy", image: occupationalTherapyImg },
  { name: "Behaviour Therapy", href: "/services/behaviour-therapy", image: behaviourTherapyImg },
  { name: "Special Education", href: "/services/special-education", image: specialEducationImg },
  { name: "ABA Therapy", href: "/services/aba-therapy", image: abaTherapyImg },
  { name: "Group Therapy", href: "/services/group-therapy", image: groupTherapyImg },
  { name: "Counselling Sessions", href: "/services/counselling", image: counsellingImg },
  { name: "Online Therapy", href: "/services/online-therapy", image: onlineTherapyImg },
];

const DepartmentsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Departments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care across multiple specialties, all under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={dept.href}>
                <Card className="overflow-hidden hover:shadow-soft transition-all duration-300 hover:scale-105 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg text-foreground flex items-center justify-between group-hover:text-primary transition-colors">
                      {dept.name}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsGrid;