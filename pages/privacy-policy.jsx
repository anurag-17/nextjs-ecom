import React from 'react';

const TermsAndConditionsPage = () => {
  return (

    <div className="container mx-auto my-[20px] md:my-[40px] px-[20px]">
    <div className="w-full max-w-[1200px] 2xl:px-0 mx-auto px-[20px]  flex flex-col justify-between items-center">
    <div className="terms-and-conditions-page">
      <h2 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight text-center'>Privacy Policy</h2>
      <p className='w-full md:max-w-[60%] mx-auto pb-6 text-center' >Welcome to E-commerce website. These Privacy Policy outline the rules and regulations for the use of    <a href=" https://nextjs-ecom-ashy.vercel.app/ " className="underline font-semibold"> E-commerce website </a>.</p>
      
      <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Cookies</h3>
      <p>We employ the use of cookies. By accessing E-commerce website, you agreed to use cookies in agreement with the E-commerce website's Privacy Policy.</p>
      <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
      
      <h3 className='text-[16px] mt-5 font-semibold leading-tight'>License</h3>
      <p>Unless otherwise stated, E-commerce website and/or its licensors own the intellectual property rights for all material on E-commerce website. All intellectual property rights are reserved. You may access this from E-commerce website for your own personal use subjected to restrictions set in these Privacy Policy.</p>
      <p>You must not:</p>
      <ul className=' list-disc list-inside'>
        <li>Republish material from E-commerce website</li>
        <li>Sell, rent or sub-license material from E-commerce website</li>
        <li>Reproduce, duplicate or copy material from E-commerce website</li>
        <li>Redistribute content from E-commerce website</li>
      </ul>


      <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Data Collection and Usage</h3>
  <p>We collect certain personal information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. This information may include your name, email address, mailing address, phone number, credit card information, or other details. We use this information for purposes such as processing transactions, providing customer service, improving our website, and sending periodic emails.</p>
  <p>We may also collect non-personal information about your visit to our website through the use of cookies, which help us analyze and improve user experience.</p>
  
  <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Security</h3>
  <p>We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online to prevent unauthorized access or disclosure.</p>
  
  <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Third-Party Services</h3>
  <p>We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, perform website-related services, or assist us in analyzing how our website is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
  
  <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Changes to This Privacy Policy</h3>
  <p>We reserve the right to update or change our privacy policy at any time. Any changes will be posted on this page, and the date of the last update will be indicated at the top of the page. You are advised to review this privacy policy periodically for any changes.</p>
  
  <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Contact Us</h3>
  <p>If you have any questions or concerns about our privacy policy, please contact us at 
  <a href="mailto:privacy@ecommercewebsite.com." className="underline font-semibold"> privacy@ecommercewebsite.com. </a></p>
</div>
    </div>
    </div>
  );
};

export default TermsAndConditionsPage;
