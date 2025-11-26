import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import teamGroupImg from "@/assets/team-group.jpg";

const teamMembers = [
  {
    role: "Speech Therapists",
    description: "Certified speech-language pathologists specializing in pediatric communication disorders and early intervention"
  },
  {
    role: "Occupational Therapists",
    description: "Licensed OTs with expertise in sensory integration, fine motor development, and adaptive skills training"
  },
  {
    role: "Behaviour Therapists",
    description: "Trained behavior analysts skilled in positive behavior support and functional behavior assessment"
  },
  {
    role: "Clinical Psychologists",
    description: "Licensed psychologists providing comprehensive assessment and evidence-based therapeutic interventions"
  },
  {
    role: "Special Educators",
    description: "Certified special education teachers with experience in individualized instruction and curriculum adaptation"
  },
  {
    role: "ABA Therapists",
    description: "Board Certified Behavior Analysts (BCBAs) delivering systematic skill-building programs"
  }
];

const Team = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Team | RIITS Child Development Centre Kollam</title>
        <meta name="description" content="Meet the expert team at RIITS CDC Kollam. Certified speech therapists, occupational therapists, psychologists, special educators, and behavior analysts dedicated to child development." />
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Expert Team</h1>
            <p className="text-xl text-primary-foreground/90">
              Dedicated professionals committed to every child's development and success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Group Photo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-soft mb-12">
              <img 
                src={teamGroupImg} 
                alt="RIITS Child Development Centre Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                A Multidisciplinary Approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team brings together expertise from multiple disciplines to provide comprehensive, coordinated care. Every team member is dedicated to helping children reach their fullest potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Roles */}
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
              Our Specialists
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the professionals who make a difference every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{member.role}</h3>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Credentials & Commitment
              </h2>
              <div className="space-y-6 text-left">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Professional Certifications</h3>
                    <p className="text-muted-foreground">
                      All our therapists and educators hold relevant professional certifications and licenses in their respective fields.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Ongoing Training</h3>
                    <p className="text-muted-foreground">
                      Our team regularly participates in professional development, workshops, and continuing education to stay current with best practices.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Collaborative Care</h3>
                    <p className="text-muted-foreground">
                      We work as an integrated team, regularly consulting with each other to ensure comprehensive, coordinated care for every child.
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

export default Team;