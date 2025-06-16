import {
  PiDribbbleLogoDuotone,
  PiLinkedinLogoDuotone,
  PiTwitterLogoDuotone,
} from "react-icons/pi";
import ScrollReveal from "../../components/ScrollReveal";

const teamMembers = [
  {
    name: "Michael Lee",
    role: "Analyst",
    img: "https://framerusercontent.com/images/nFTyhTg9mtSiD0Oh51DGHixETM.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Chris Wilson",
    role: "Customer Support",
    img: "https://framerusercontent.com/images/3lxG5etcVf37NL3i2nIGARTTaI.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Brown",
    role: "Designer",
    img: "https://framerusercontent.com/images/S9PyleA1z5ugBA2Z87N0r7h5VA.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Olena Kurcherenko",
    role: "Designer",
    img: "https://framerusercontent.com/images/rZmnnPdh2NfRFd8GwnJmVeCq5Ow.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Anastasia Solovyova",
    role: "Product Manager",
    img: "https://framerusercontent.com/images/7n35wdG8jtT2LMgYCpqeBkSo6s.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Smith",
    role: "Project Manager",
    img: "https://framerusercontent.com/images/DBL6ct1qK3lvpE5gdCOeBR2CZQ.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Johnson",
    role: "Founder",
    img: "https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = () => (
  <ScrollReveal>
    <section className="bg-[#f2f2f2] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Meet the Minds Behind Neutra
        </h2>
        <p className="mx-auto mb-14 max-w-[560px] text-center text-lg font-normal text-gray-600">
          Discover the talented individuals who bring Neutra to life, each
          dedicated to pushing the boundaries of digital design.
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex w-[276px] flex-col">
              <img
                src={member.img}
                alt={member.name}
                className="mb-6 h-[276px] w-[276px] rounded-4xl object-cover"
              />
              <div className="mb-1 w-full text-left text-lg font-semibold">
                {member.name}
              </div>
              <div className="mb-4 w-full text-left text-base font-normal text-gray-500">
                {member.role}
              </div>
              <div className="flex w-full gap-3 text-left text-gray-400">
                <a href={member.socials.twitter} aria-label="Twitter">
                  <PiTwitterLogoDuotone className="h-5 w-5" />
                </a>
                <a href={member.socials.dribbble} aria-label="Dribbble">
                  <PiDribbbleLogoDuotone className="h-5 w-5" />
                </a>
                <a href={member.socials.linkedin} aria-label="LinkedIn">
                  <PiLinkedinLogoDuotone className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollReveal>
);

export default TeamSection;
