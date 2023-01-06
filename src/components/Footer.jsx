import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <div className="flex items-center">
          <img src={logo} alt="snapcoding" className="w-[72px] h-[72px] mr-2" />
          <h1 className="font-poppins font-semibold ss:text-[32px] text-[42px] text-white">
            Snap
          </h1>
          <h1 className="font-poppins font-semibold ss:text-[32px] text-[42px] text-white text-gradient">
            Coding
          </h1>
        </div>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          SnapCoding is an online tutorial platform that provides comprehensive
          instruction for learning how to code.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((Link, index) => (
                <li
                  key={Link.name}
                  className={`font-poppins font-normal text-[16] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                  ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  {Link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 SnapCoding. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a href={social.link} target="_blank" key={social.id}>
            <img
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
