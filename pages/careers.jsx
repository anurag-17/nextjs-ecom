import Image from "next/image";
import React from "react";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Software Engineer",
      location: "[City, State]",
      description:
        "We're seeking a skilled and motivated software engineer to join our development team. In this role, you'll have the opportunity to work on exciting projects and contribute to the growth of our platform.",
    },
    {
      title: "Marketing Specialist",
      location: "[City, State]",
      description:
        "We're looking for a dynamic marketing specialist to help us create engaging campaigns, manage social media channels, and drive brand awareness. If you have a passion for storytelling and a knack for analytics, we want to hear from you!",
    },
    {
      title: "Customer Service Representative",
      location: "[City, State]",
      description:
        "Do you have excellent communication skills and a knack for problem-solving? Join our customer service team and help us deliver exceptional support to our valued customers.",
    },
  ];

  return (
    <div className="container mx-auto my-[20px] md:my-[40px] px-[20px]">
      <div className="w-full max-w-[1200px] 2xl:px-0 mx-auto px-[20px]  flex flex-col justify-between items-center">
        <div className="careers-page">
          <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold text-center leading-tight">
            Join Our Team
          </h2>

          <div className="grid md:grid-cols-2  gap-10">
            <div className="py-[15px]">
              <Image
                src="/careers.avif"
                alt="careers"
                height={400}
                width={600}
              />
            </div>
            <div className="py-[15px]">
              <p className="md:max-w-[80%] mx-auto text-[16px] mb-5 leading-tight">
                Are you passionate about innovation, creativity, and making a
                difference? If so, we'd love to hear from you! At our company , we're always on the lookout for talented individuals who
                share our vision and values.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas delectus temporibus laboriosam, soluta inventore qui debitis praesentium nobis ex quaerat ipsam exercitationem !
              </p>
              <p className="md:max-w-[80%] mx-auto text-[16px] mb-5 leading-tight">
             
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas delectus temporibus laboriosam, soluta inventore qui debitis praesentium nobis ex quaerat ipsam exercitationem autem voluptatum! Distinctio, facilis? Possimus debitis porro quisquam dolorum? Et qui pariatur magnam distinctio reiciendis illo, ipsa adipisci!
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

          <h3 className="text-[20px] md:text-[24px] my-3     font-semibold leading-tight">
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

          <h3>How to Apply</h3>
          <p>
            Ready to take the next step in your career? Send your resume and
            cover letter to [email address]. Be sure to include the position
            you're applying for in the subject line. We look forward to hearing
            from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
