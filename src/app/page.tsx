"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  const roles = [
    {
      title: "Platform Solution Architect",
      company: "Stripe",
      years: "Present",
      blurb:
        "Helping platforms customers architect embedded payments and financial services with a focus on reliability and revenue acceleration.",
    },
    {
      title: "Head of GTM",
      company: "Calixa",
      years: "2021-2023",
      blurb:
        "Led go-to-market motions for PLG sales, aligning product, growth, and sales to unlock efficient pipeline in product-led organizations.",
    },
    {
      title: "Director of Sales Engineering",
      company: "Sift",
      years: "2017-2021",
      blurb:
        "Built and scaled a high-performing SE org enabling complex fraud prevention deployments across global enterprises.",
    },
    {
      title: "Enterprise Sales Engineer",
      company: "Mixpanel",
      years: "2015-2017",
      blurb:
        "Partnered with Fortune 100 teams to translate analytics needs into elegant implementation patterns that drive product decisions.",
    },
  ];

  const skills = [
    "Payments Architecture",
    "GTM Strategy",
    "Solution Design",
    "PLG Sales",
    "Enterprise Enablement",
    "APIs & Webhooks",
    "Analytics",
    "Team Leadership",
  ];

  const photoUrl =
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/D2-Expo-5p-Sessions-Celebration_053-1758750960779.jpg";

  return (
    <TooltipProvider>
      <main className="relative min-h-screen overflow-x-clip bg-[radial-gradient(1200px_600px_at_100%_-10%,_var(--accent)_0%,_transparent_60%),radial-gradient(800px_400px_at_-10%_10%,_var(--secondary)_0%,_transparent_55%)]">
        {/* Film grain overlay */}
        <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25 [background-image:radial-gradient(#00000033_1px,transparent_1px)] [background-size:3px_3px]"></div>

        <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid items-start gap-8 sm:grid-cols-[1fr_280px]"
          >
            <div className="flex flex-col items-start gap-6">
              <Badge className="rounded-none bg-primary text-primary-foreground shadow-[4px_4px_0_0_rgba(0,0,0,0.25)]">
                Moock like Coke
              </Badge>
              <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                Stephen Moock
              </h1>
              <p className="max-w-2xl text-balance text-muted-foreground">
                Solution Architect and GTM leader crafting delightful, scalable customer experiences. Based in San Diego, CA.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="mailto:stephen.moock@gmail.com">
                  <Button className="rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,0.25)]" variant="default">
                    Get in touch
                  </Button>
                </a>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="rounded-none border-dashed">
                      San Diego, CA
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-none">
                    🌴 Sunny with strong coffee and good surf
                  </TooltipContent>
                </Tooltip>
                {/* Socials */}
                <div className="ml-1 flex items-center gap-2">
                  <a href="https://www.linkedin.com/in/stephen-moock/" aria-label="LinkedIn">
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-none border-2 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://github.com/smoock" aria-label="GitHub">
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-none border-2 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative hidden overflow-hidden border-4 border-border bg-card shadow-[8px_8px_0_0_rgba(0,0,0,0.25)] sm:block"
            >
              <Image
                src={photoUrl}
                alt="Profile photo"
                width={560}
                height={560}
                className="h-full w-full object-cover"
                priority
              />
              {/* Early dot‑com chrome */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10 [background:repeating-linear-gradient(0deg,transparent,transparent_3px,#00000010_3px,#00000010_4px)]"></div>
            </motion.div>
          </motion.div>

          <Separator className="my-10 opacity-60" />

          {/* Experience Timeline */}
          <section className="grid gap-6 sm:grid-cols-2">
            {roles.map((r, idx) => (
              <motion.div
                key={`${r.company}-${r.title}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <Card className="rounded-none border-2 border-border bg-card/90 shadow-[6px_6px_0_0_rgba(0,0,0,0.25)]">
                  <CardHeader className="space-y-2">
                    <CardTitle className="flex items-center justify-between gap-3 text-xl">
                      <span>{r.title}</span>
                      <span className="text-sm font-normal text-muted-foreground">{r.company}</span>
                    </CardTitle>
                    {r.years ? (
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.years}</div>
                    ) : null}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{r.blurb}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </section>

          {/* Skills */}
          <section className="mt-12">
            <h2 className="mb-4 text-xl font-semibold tracking-tight">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} variant="secondary" className="rounded-none border-2 border-border bg-secondary/60 px-3 py-1 shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]">
                  {s}
                </Badge>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold tracking-tight">Education</h2>
            <Card className="rounded-none border-2 border-border bg-card/90 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)]">
              <CardContent className="py-4 text-sm text-muted-foreground">
                University of California, Los Angeles - Math / Economics
              </CardContent>
            </Card>
          </section>

          {/* Contact strip */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid gap-4 rounded-none border-2 border-dashed border-border bg-secondary/40 p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] sm:grid-cols-3"
          >
            <div>
              <div className="text-xs uppercase text-muted-foreground">Email</div>
              <a className="hover:underline" href="mailto:stephen.moock@gmail.com">stephen.moock@gmail.com</a>
            </div>
            <div>
              <div className="text-xs uppercase text-muted-foreground">Location</div>
              <div>San Diego, CA</div>
            </div>
            <div>
              <div className="text-xs uppercase text-muted-foreground">Links</div>
              <div className="flex items-center gap-3">
                <a className="underline underline-offset-4" href="https://www.linkedin.com/in/stephen-moock/">LinkedIn</a>
                <span>•</span>
                <a className="underline underline-offset-4" href="https://github.com/smoock">GitHub</a>
              </div>
            </div>
          </motion.section>
        </section>

        {/* Corner decor */}
        <div className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-2 border-foreground"></div>
        <div className="pointer-events-none absolute right-6 bottom-6 h-6 w-6 border-2 border-foreground"></div>
      </main>
    </TooltipProvider>
  );
}