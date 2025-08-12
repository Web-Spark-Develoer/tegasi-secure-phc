import { Button } from "@/components/ui/button";
import React from "react";

interface Cta {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Security camera installation in Port Harcourt"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tegasi-navy/95 via-tegasi-navy/80 to-blue-900/70" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-5">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta.href ? (
                <Button asChild variant="hero" size="xl">
                  <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                    {primaryCta.label}
                  </a>
                </Button>
              ) : (
                <Button variant="hero" size="xl" onClick={primaryCta.onClick}>
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta && (
                secondaryCta.href ? (
                  <Button
                    asChild
                    variant="outline"
                    size="xl"
                    className="border-white text-white hover:bg-white hover:text-tegasi-navy"
                  >
                    <a href={secondaryCta.href}>{secondaryCta.label}</a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="xl"
                    onClick={secondaryCta.onClick}
                    className="border-white text-white hover:bg-white hover:text-tegasi-navy"
                  >
                    {secondaryCta.label}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
