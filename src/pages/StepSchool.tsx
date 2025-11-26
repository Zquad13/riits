import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import stepSchoolImg from "@/assets/step-school.jpg";

const StepSchool = () => {
  const features = [
    "Safe & supportive environment",
    "Confidence-building activities",
    "Structured academic & skill-based learning",
    "Socialisation opportunities",
    "Continuous progress monitoring",
    "Individual attention for each child",
    "Adaptive education methods",
    "Sensory-friendly learning spaces",
    "Teachers trained in special education"
  ];

  return (
    <Layout>
      <Helmet>
        <title>STEP School - Inclusive Preschool | RIITS CDC Kollam</title>
        <meta name="description" content="STEP School is RIITS CDC's customized inclusive preschool for children with diverse learning needs. Individual attention, adaptive education, sensory-friendly spaces in Kollam." />
      </Helmet>

      {/* Hero */}
      <section className="bg-warm-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                STEP School — Inclusive Preschool
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                A customised, inclusive preschool for children with diverse learning needs
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-soft"
            >
              <img 
                src={stepSchoolImg} 
                alt="STEP School Inclusive Preschool Classroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About STEP */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What Makes STEP School Special
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide individual attention, adaptive education, sensory-friendly learning spaces, and teachers trained in special education to ensure every child thrives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Every Child Receives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Enroll Your Child in STEP School
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Give your child the inclusive education they deserve. Contact us today to learn more about admission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default StepSchool;