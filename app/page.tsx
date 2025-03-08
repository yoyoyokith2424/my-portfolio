import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="container mx-auto py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <nav className="flex justify-between items-center">
          <div className="flex gap-6">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Chip"
              width={32}
              height={32}
              className="object-cover"
            />
            <Link href="#" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#education" className="hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 flex flex-col items-center text-center bg-gradient-to-b from-white to-slate-50">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-lg">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="Yokith Surya M"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-slate-800">Yokith Surya M</h1>
        <h2 className="text-2xl text-primary mb-6">Electronics and Communication Engineer</h2>

        <p className="max-w-2xl text-justify mb-8 italic text-slate-700">
          Aspiring Electronics and Communication Engineer with hands‑on experience in IoT and embedded systems.
          Passionate about developing innovative solutions for modern challenges in automation and electronics. Seeking
          opportunities to enhance technical expertise and contribute to innovative and impactful projects.
        </p>

        <div className="flex gap-4 mb-8">
          <Link
            href="https://github.com/yoyoyokith2424"
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yokith-surya-m"
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="mailto:yokithsuryam@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </Link>
          <Link href="tel:+919384981422" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={20} />
            <span>Phone</span>
          </Link>
        </div>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" asChild>
          <a href="/resume.pdf" download>
            Download My Resume
          </a>
        </Button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Projects</h2>
          <div className="section-divider"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delta Arm Project */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary/90">Precision Delta Arm for Weed Removal</h3>
              <p className="text-muted-foreground mb-4">Nov 2024 - Jan 2025</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  Designed an automated weed control system using delta robots with three degrees of freedom for precise
                  mechanical weeding and targeted herbicide (or) fertilizer application.
                </li>
                <li>
                  Implemented image processing on a Raspberry Pi to obtain x, y, z coordinates, enabling precise weeding
                  while reducing labor, herbicide use, and environmental impact while enhancing agricultural efficiency.
                </li>
                <li>
                  <span className="font-semibold">Technical Skills:</span> Raspberry Pi, Image Processing, Robot Control
                  Algorithms, Camera Calibration & Perspective Transformation.
                </li>
              </ul>
            </div>

            {/* Smart Glove Project */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary/90">Smart Glove for Rehabilitation</h3>
              <p className="text-muted-foreground mb-4">Nov 2024 - Present</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  Designed and developed a smart glove to assist stroke and paralysis patients in regaining mobility
                  through gamified therapy.
                </li>
                <li>Integrated an MPU6050 motion sensor with an ESP32 microcontroller to track hand movements.</li>
                <li>
                  Developed interactive exercises where users complete virtual objectives (e.g., holding a ball) to
                  enhance motor recovery.
                </li>
                <li>
                  Focused on real-time motion tracking, data collection, and user engagement for improved rehabilitation
                  outcomes.
                </li>
              </ul>
            </div>

            {/* Voice-Controlled Robot */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-bold mb-2 text-primary/90">Voice-Controlled Autonomous Robot</h3>
              <p className="text-muted-foreground mb-4">Sep 2024</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  Developed a voice-controlled robot with autonomous navigation and obstacle detection in a 30-hour
                  hackathon at Kongu Engineering College, by successfully integrating voice recognition and sensors to
                  enhance user interaction and navigation capabilities.
                </li>
                <li>
                  Integrated Google and Alexa for voice control, with micro-controller handling motor control and object
                  detection, along with offline voice recognition module for seamless task execution without internet
                  dependency.
                </li>
                <li>
                  <span className="font-semibold">Technical Skills:</span> Embedded C, IoT and Cloud Integration,
                  Embedded Systems Design, Arduino.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Education</h2>
          <div className="section-divider"></div>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-primary/90">Kongu Engineering College</h3>
              <p className="text-muted-foreground">Erode, India</p>
              <p className="font-medium">Bachelor of Engineering in Electronics and Communication Engineering</p>
              <p>Sep 2023 - May 2026</p>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                <li>CGPA: 7.77/10 (As of 5th Semester)</li>
                <li>
                  Core Subject Area: Communication, Digital Signal Processing, Microprocessors and Microcontrollers,
                  Control Systems, Analog and Digital Circuits, and VLSI.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-primary/90">Kongu Hi Tek Polytechnic College</h3>
              <p className="text-muted-foreground">Karur, India</p>
              <p className="font-medium">Diploma in Electrical and Electronic Engineering</p>
              <p>May 2020 - May 2023</p>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                <li>CGPA: 8.5/10</li>
                <li>Core Subject Area: Circuit Theory, EV Technology, Generation Transmission and Distribution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Experience</h2>
          <div className="section-divider"></div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-primary/90">Epic Media Labs</h3>
            <p className="text-muted-foreground">Mumbai, India</p>
            <p className="font-medium">Content Writing and Publishing Intern</p>
            <p className="mb-4">May 5th 2022 - August 5th 2022</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800">Responsibilities:</h4>
                <ul className="list-disc pl-5 text-slate-700">
                  <li>
                    The internship had daily targets and assignments that needed to be finished in a timely manner.
                  </li>
                  <li>
                    Throughout the internship, I had numerous meetings with other writers and editors to ensure that
                    everything ran efficiently.
                  </li>
                  <li>
                    I was also held accountable for making sure that all of my publications were up-to-date and free of
                    plagiarism.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">Internship Details:</h4>
                <ul className="list-disc pl-5 text-slate-700">
                  <li>A Senior Content Writer and Manager oversaw my works and publications for the organization.</li>
                  <li>
                    The internship required me to stay innovative and relevant with upcoming projects and titles in
                    order to attract more readers to the website.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800">Achievements and Results:</h4>
                <ul className="list-disc pl-5 text-slate-700">
                  <li>The internship facilitated me with a broader understanding of content strategy.</li>
                  <li>
                    The scrutinized projects and works were published on the website, and reader feedback was analysed.
                  </li>
                  <li>
                    <span className="font-semibold">Technical Skills:</span> Microsoft Office, Google Docs, Google Meet,
                    Slack, ClickUp, Paraphrasing Tools, SEO Optimization Tools and WordPress.
                  </li>
                  <li>
                    <span className="font-semibold">Soft Skills:</span> Teamwork, Time Management, Communication,
                    Presentation skills and Content Management Strategy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Skills & Competencies</h2>
          <div className="section-divider"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary/90">Certifications</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Amazon Web Services Certified Cloud Practitioner [Valid until 2028]</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary/90">Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Executive member in ECE Association</li>
                <li>NSS volunteer</li>
                <li>Rotaract member</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary/90">Programming</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>HTML5, CSS3</li>
                <li>Java, JavaScript</li>
                <li>Embedded C, Python</li>
                <li>Assembly language</li>
                <li>Verilog HDL, AppScript</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary/90">Miscellaneous</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Linux, Git</li>
                <li>Proteus, AutoCAD, SolidWorks</li>
                <li>Micro-controllers and Microprocessors</li>
                <li>Microsoft Office</li>
                <li>LaTeX (Overleaf)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-primary/90">Soft Skills</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 md:columns-2">
                <li>Strategic Planner</li>
                <li>Team Player</li>
                <li>Learning Agility</li>
                <li>Engaging Presentation</li>
                <li>Critical-Thinking</li>
                <li>Meticulous</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Yokith Surya M. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="https://github.com/yoyoyokith2424"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yokith-surya-m"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:yokithsuryam@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:+919384981422" className="hover:text-primary transition-colors">
              <Phone size={20} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

