import Image from "next/image";
import React from "react";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Software Engineer",
      location: "Indore, MP",
      description:
        "We're seeking a skilled and motivated software engineer to join our development team. In this role, you'll have the opportunity to work on exciting projects and contribute to the growth of our platform.",
    },
    {
      title: "Marketing Specialist",
      location: "Indore, MP",
      description:
        "We're looking for a dynamic marketing specialist to help us create engaging campaigns, manage social media channels, and drive brand awareness. If you have a passion for storytelling and a knack for analytics, we want to hear from you!",
    },
    {
      title: "Customer Service Representative",
      location: "Indore, MP",
      description:
        "Do you have excellent communication skills and a knack for problem-solving? Join our customer service team and help us deliver exceptional support to our valued customers.",
    },
  ];

  return (
    <div className="container mx-auto my-[20px] md:my-[40px] px-[20px]">
      <div className="w-full max-w-[1200px] 2xl:px-0 mx-auto px-[20px]  flex flex-col justify-between items-center">
        <div className="careers-page">
          {/* <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold text-center leading-tight">
            Join Our Team
          </h2> */}

          <div className="grid md:grid-cols-2 gap-10">
            <div className="py-[15px]">
              <Image
                src="/careers.avif"
                alt="careers"
                height={400}
                width={600}
              />
            </div>
            <div className="py-[15px]">
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                Join Our Team
              </h2>

              <p className="text-[16px] mb-5 leading-tight">
              Are you driven by a passion for innovation, creativity, and making a tangible impact? If so, we invite you to explore exciting career opportunities at Our Company. We believe in fostering a dynamic and inclusive work environment where talented individuals can thrive and contribute to meaningful projects.
              </p>

              <p className="text-[16px] mb-5 leading-tight">
              Our team is comprised of diverse professionals who share a common goal of delivering exceptional results while maintaining a strong commitment to our core values. We value collaboration, integrity, and continuous learning, and we're dedicated to providing our employees with the support and resources they need to succeed.
              </p>
            </div>
          </div>

          <h3 className="text-[20px] md:text-[24px] my-5 font-semibold leading-tight">
            Current Openings
          </h3>
          <ul>
            {jobOpenings.map((job, index) => (
              <li key={index} className="py-[20px]">
                <h4 className="text-[28px] md:text-[34px] mb-1 font-semibold leading-tight">
                  {job.title}
                </h4>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Description:</strong> {job.description}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="text-[20px] md:text-[24px] my-3 font-semibold leading-tight">
            Why Join Us?
          </h3>
          <ul>
            <li className="py-[10px]">
              <strong>Collaborative Environment:</strong> Work alongside
              talented individuals in a supportive and collaborative environment
              where your ideas are valued.
            </li>
            <li className="py-[10px]">
              <strong>Opportunities for Growth:</strong> We believe in investing
              in our employees' professional development and offer opportunities
              for growth and advancement.
            </li>
            <li className="py-[10px]">
              <strong>Work-Life Balance:</strong> We understand the importance
              of work-life balance and offer flexible scheduling options to
              accommodate your needs.
            </li>
            <li className="py-[10px]">
              <strong>Competitive Benefits:</strong> Enjoy competitive salaries,
              comprehensive health benefits, and other perks as part of our
              team.
            </li>
          </ul>

          <h3 className="text-[20px] md:text-[24px] my-3 font-semibold leading-tight">
            How to Apply
          </h3>
          <p>
            Ready to take the next step in your career? Send your resume and
            cover letter to <a href="mailto:#">abc@gmail.com</a> . Be sure to
            include the position you're applying for in the subject line. We
            look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
