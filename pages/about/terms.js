// pages/terms.js
import React from "react";
import styles from "../../styles/terms.module.css"; // Import your CSS module
import { GiHunterEyes } from "react-icons/gi";
const Terms = () => {
  const termsSections = [
    {
      title: "Terms of Use",
      content: "For information about our data practices, please see our Privacy Policy, including our Cookie Use statement. By accessing or using the Fitbit Service, you agree that we can collect and use your information in accordance with the Privacy Policy" },
    {
      title: "Privacy Policy",
      content:
        "Understand how we collect, use, and protect your personal information.",
    },
    {
      title: "Cookie Policy",
      content:"Full use of the Fitbit Service requires that you use an account. A Google account will be required, although a Fitbit account may be permitted for a limited time. Click here for more information. On the date that a Google account is required, or the date that you choose to use the Fitbit Service with a Google account, whichever is earlier, these Terms will terminate automatically, immediately, and without further notice, in accordance with Section 19 below. ",
    },
    {
      title: "Refund Policy",
      content: "Full use of the Fitbit Service is dependent upon your use of a computer with adequate software or a supported mobile device and Internet access. The maintenance and security of this equipment may influence the performance of the Fitbit Service and it is your responsibility to ensure the equipment’s functionality. You are responsible for all Internet access charges. Please check with your Internet provider for information on possible Internet data usage charges.",
    },
    {
      title: "Disclaimer",
      content:
        "Fitbit may enable you to post, upload, store, share, send, or display photos, images, video, data, text, music, exercise regimens, food logs, recipes, comments, and other information and content (“Your Content”) to and via the Fitbit Service. You retain all rights to Your Content that you post to the Fitbit Service. By making Your Content available on or through the Fitbit Service you hereby grant to Fitbit a non-exclusive, transferable, sublicensable, worldwide, royalty-free license to use, copy, modify, publicly display, publicly perform, reproduce, translate, create derivative works from, and distribute Your Content, in whole or in part, including your name and likeness, in any media. The rights you grant us in this Section 5 are only for the limited purpose of offering and improving the Fitbit Service.",
    },
    {
      title: "User Guidelines",
      content: "Except to the extent permitted by law, you may not perform, attempt to perform, or encourage or assist others in performing any of the following while accessing or using the Fitbit Service: (1) use, display, mirror, or frame the Fitbit Service or any individual element within the Fitbit Service, including the layout and design of any page, without Fitbit’s express written consent; (2) use Fitbit’s name, any Fitbit trademark or logo, or any Fitbit proprietary information without Fitbit’s express written consent; (3) access or tamper with non-public areas of the Fitbit Service, Fitbit’s computer systems, or the technical delivery systems of Fitbit’s providers; (4) test the vulnerability of any Fitbit system or breach any security or authentication measures; (5) circumvent any technological measure implemented by Fitbit or any of Fitbit’s providers or any other third party (including another user) to protect the Fitbit Service; (6) access the Fitbit Service or Fitbit Content through the use of any mechanism other than through the use of an Authorized Connection, Fitbit Service, or Fitbit API; or (7) modify, decompile, disassemble, reverse engineer, tamper with, or otherwise attempt to derive the source code of any software that Fitbit provides to you or any other part of the Fitbit Service.",
    },
  ];

  return (
    <div className={styles.termsPage}>
      <div className={styles.terms_section}>
        <div className={styles.terms_header}>
          <h1>Terms of Service</h1>
          < GiHunterEyes
            size={160}
            style={{
              backgroundColor: "white",
              color: "green",
              marginLeft: "10rem",
              borderRadius: "50%",
            }}
          />
        </div>
       
        <p style={{fontSize:"1.5rem",lineHeight:"2rem",wordSpacing:"0.3rem",marginLeft:"20rem",marginTop:"3rem",marginBottom:"3rem"}}>
          Note: If you use your Fitbit devices and services with a Google
          Account, then you are subject to the Google Terms of Service and these
          Fitbit Additional Terms of Service.
        </p>
        <div className={styles.paragraph_section} >
        <p>
          Fitbit designs products and tools that help you achieve your health
          and fitness goals and empower and inspire you to lead a healthier,
          more active life. These Terms of Service (“Terms”) apply to your
          access and use of the Fitbit Service. The “Fitbit Service” includes
          our devices including associated firmware, applications, software,
          websites, APIs, products, and services.
        </p>
        <p>
          If you live in the European Economic Area, the United Kingdom or
          Switzerland, these Terms are an agreement between you and Fitbit
          International Limited, an Irish company with its registered office at
          76 Lower Baggot Street, Dublin 2, Ireland. If you reside elsewhere,
          these Terms are an agreement between you and Fitbit LLC, 199 Fremont
          Street, 14th Floor, San Francisco, CA 94105 U.S.A. When the Terms
          mention “Fitbit,” “we,” “us,” or “our,” they refer to the party to
          your agreement that provides you with the Fitbit Service.
        </p>
        <p>
          You must accept these Terms to create a Fitbit account and to access
          or use the Fitbit Service. If you do not have an account, you accept
          these Terms by using any part of the Fitbit Service. If you do not
          accept these terms, do not create an account or use the Fitbit
          Service.
        </p>
        <p>
          Your use of Fitbit Pay, our live coaching services, or any of our paid
          services are subject to additional terms and conditions, which are
          incorporated into these Terms:
        </p>
        </div>
        {termsSections.map((section) => (
          <div key={section.title} className={styles.termsSection}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}

        <div className={styles.image_section}>
       <h1>Terms and conditions Apply</h1>
        </div>
      </div>
    </div>
  );
};

export default Terms;
