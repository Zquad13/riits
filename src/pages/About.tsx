import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every child deserves care, understanding, and support"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in therapeutic and educational practices"
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Welcoming children of all abilities and backgrounds"
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "Our methods are grounded in research and proven results"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us | RIITS Child Development Centre Kollam</title>
        <meta name="description" content="Learn about RIITS Child Development Centre's mission to help children of all abilities reach their fullest potential through evidence-based care since 2020." />
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About RIITS CDC</h1>
            <p className="text-xl text-primary-foreground/90">
              Empowering children to achieve their fullest potential through comprehensive care and education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RIITS Child Development Centre is dedicated to helping children of all abilities reach their fullest potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2020, we've empowered children to achieve developmental milestones while supporting families with guidance, education, and evidence-based care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
                What We Offer
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Comprehensive Assessment</h3>
                    <p className="text-muted-foreground">
                      Detailed evaluations to understand each child's unique needs and create personalized treatment plans
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Multidisciplinary Team</h3>
                    <p className="text-muted-foreground">
                      Speech therapists, occupational therapists, psychologists, special educators, and behavior analysts working together
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Family Support</h3>
                    <p className="text-muted-foreground">
                      Parent training, counseling, and ongoing guidance to support the entire family unit
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Flexible Service Delivery</h3>
                    <p className="text-muted-foreground">
                      In-person and online therapy options to meet your family's needs
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;