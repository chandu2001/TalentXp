
import Image from 'next/image';
import { siteImages } from '@/lib/images';

const AboutIntro = () => (
  <section id="about" className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">A Global Leader in IT Services & Solutions</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
            TalentXP is a global Information Technology (IT) Services and Solutions company. We provide cutting-edge IT Solutions for Enterprises to effectively utilize available resources and efficiently manage operations. Our solution-driven approach makes us a strategic partner to Fortune 1000 enterprises.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            By complementing our comprehensive services with expert technology consultation, we optimize your IT initiatives and enable your organization to respond more quickly to market changes.
          </p>
        </div>
        <div>
          <div className="relative group">
             <div className="absolute -inset-2">
                <div className="w-full h-full max-w-md mx-auto opacity-20 blur-lg bg-gradient-to-r from-primary to-accent"></div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                  src={siteImages.aboutTeamCollaboration.src}
                  alt="Team collaborating on a project"
                  width={siteImages.aboutTeamCollaboration.width}
                  height={siteImages.aboutTeamCollaboration.height}
                  data-ai-hint={siteImages.aboutTeamCollaboration.hint}
                  className="relative w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutIntro;
