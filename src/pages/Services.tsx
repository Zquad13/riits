import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
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
import clinicalPsychologyImg from "@/assets/clinical-psychology.jpg";
import autismAdhdImg from "@/assets/autism-adhd-support.jpg";

const services = [
  {
    name: "Speech & Language Therapy",
    description: "Supports expressive, receptive, and pragmatic communication",
    href: "/services/speech-therapy",
    image: speechTherapyImg
  },
  {
    name: "Occupational Therapy",
    description: "Builds self-care skills, sensory integration, and school readiness",
    href: "/services/occupational-therapy",
    image: occupationalTherapyImg
  },
  {
    name: "Behaviour Therapy",
    description: "Positive behaviour strategies with parent coaching",
    href: "/services/behaviour-therapy",
    image: behaviourTherapyImg
  },
  {
    name: "ABA Therapy",
    description: "Applied Behaviour Analysis to build meaningful skills",
    href: "/services/aba-therapy",
    image: abaTherapyImg
  },
  {
    name: "Clinical Psychology",
    description: "Assessment and treatment for emotional and behavioural challenges",
    href: "/services/clinical-psychology",
    image: clinicalPsychologyImg
  },
  {
    name: "Special Education",
    description: "Individualised instruction with tailored accommodations",
    href: "/services/special-education",
    image: specialEducationImg
  },
  {
    name: "Group Therapy",
    description: "Small-group sessions for social and communication skills",
    href: "/services/group-therapy",
    image: groupTherapyImg
  },
  {
    name: "Counselling Sessions",
    description: "Emotional support with child-friendly counselling",
    href: "/services/counselling",
    image: counsellingImg
  },
  {
    name: "Online Therapy",
    description: "Flexible and accessible sessions without compromising quality",
    href: "/services/online-therapy",
    image: onlineTherapyImg
  },
  {
    name: "Autism & ADHD Support",
    description: "Evidence-based interventions with SMART goals",
    href: "/services/autism-adhd-support",
    image: autismAdhdImg
  }
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Services | RIITS Child Development Centre Kollam</title>
        <meta name="description" content="Comprehensive child development services in Kollam: Speech therapy, Occupational therapy, ABA, Special education, Clinical psychology, and more. Evidence-based care for all abilities." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive, evidence-based therapy and education for children of all abilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={service.href}>
                  <Card className="overflow-hidden hover:shadow-soft transition-all duration-300 hover:scale-105 group h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl text-foreground mb-2 flex items-center justify-between group-hover:text-primary transition-colors">
                        {service.name}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;