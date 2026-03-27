import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { TEAM_MEMBERS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type TeamCardProps = (typeof TEAM_MEMBERS)[number] & {
  index: number;
};

// Team Member Card
const TeamCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_link,
  instagram_link,
  linkedin_link,
}: TeamCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Team member image placeholder */}
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-4xl font-bold text-white/60">
                  {name.charAt(0)}
                </span>
              </div>
              <p className="text-white/40 text-sm">No photo</p>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="absolute inset-0 flex justify-end m-3 gap-2">
          {/* Instagram Link */}
          {instagram_link && (
            <div
              onClick={() => window.open(instagram_link, "_blank", "noreferrer")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              title="Instagram Profile"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          )}
          
          {/* GitHub Link */}
          {github_link && (
            <div
              onClick={() => window.open(github_link, "_blank", "noreferrer")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              title="GitHub Profile"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}

          {/* LinkedIn Link */}
          {linkedin_link && (
            <div
              onClick={() => window.open(linkedin_link, "_blank", "noreferrer")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              title="LinkedIn Profile"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Team Member Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Skills/Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Team Section
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Our Team</p>
          <h2 className={styles.sectionHeadText}>Meet the Developers.</h2>
        </motion.div>

        {/* About the team */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            A passionate team of developers, designers, and innovators working together to create amazing digital experiences. 
            Each member brings unique skills and expertise to deliver high-quality solutions for our clients.
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={`team-${i}`} index={i} {...member} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};