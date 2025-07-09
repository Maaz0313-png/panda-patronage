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
    img: "/images/team/michael-lee.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Chris Wilson",
    role: "Customer Support",
    img: "/images/team/chris-wilson.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Brown",
    role: "Designer",
    img: "/images/team/emily-brown.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Olena Kurcherenko",
    role: "Designer",
    img: "/images/team/olena-kurcherenko.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Anastasia Solovyova",
    role: "Product Manager",
    img: "/images/team/anastasia-solovyova-team.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Smith",
    role: "Project Manager",
    img: "/images/team/sarah-smith.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Johnson",
    role: "Founder",
    img: "/images/team/david-johnson.jpg",
    socials: {
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = () => (
  <section className="bg-transparent py-20">
    <div className="w-full max-w-7xl px-6">
      <ScrollReveal
        as="h2"
        className="tablet:text-4xl tablet:font-bold mb-4 w-full text-center text-2xl leading-11 font-normal [word-break:break-word]"
      >
        Meet the Minds Behind Neutra
      </ScrollReveal>
      <ScrollReveal
        as="p"
        className="tablet:text-lg mx-auto mb-14 max-w-[560px] text-center text-base font-normal text-gray-600"
      >
        Discover the talented individuals who bring Neutra to life, each
        dedicated to pushing the boundaries of digital design.
      </ScrollReveal>
      <div className="tablet:grid-cols-3 desktop:grid-cols-4 grid grid-cols-2 justify-items-center [column-gap:16px] [row-gap:32px]">
        {teamMembers.map((member) => (
          <ScrollReveal
            key={member.name}
            className="flex w-full max-w-[276px] flex-col items-start"
          >
            <div className="xs:rounded-3xl mb-6 aspect-square w-full max-w-[276px] rounded-2xl sm:rounded-4xl">
              <img
                src={member.img}
                alt={member.name}
                className="size-full rounded-[inherit] object-cover object-center"
              />
            </div>
            <h5 className="mb-1 w-full text-left text-lg font-normal">
              {member.name}
            </h5>
            <div className="mb-4 w-full text-left text-sm font-normal text-gray-500">
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
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
