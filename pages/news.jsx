import React from 'react';

const NewsPage = () => {
  // Array of news items
  const newsItems = [
    {
      date: '2024-02-07',
      title: 'New Product Launch: Product A',
      content: "We're thrilled to introduce our newest addition to the  E-commerce Website  family: Product A! Discover its innovative features and how it can enhance your daily life. Shop now and be one of the first to experience its magic!"
    },
    {
      date: '2024-02-06',
      title: 'Limited-Time Offer: Promotion B',
      content: "Don't miss out on our exclusive limited-time offer: Promotion B! Enjoy incredible discounts on a wide range of products. Hurry, this offer won't last long. Shop now and save big!"
    },
    {
      date: '2024-02-05',
      title: 'Holiday Gift Guide',
      content: "'Tis the season for giving! Explore our curated holiday gift guide and find the perfect presents for your loved ones. From cozy winter essentials to tech gadgets and beyond, we've got something for everyone on your list. Start shopping today and spread joy this holiday season!"
    },
    {
      date: '2024-02-04',
      title: 'Customer Spotlight: Customer C',
      content: "We're excited to shine the spotlight on one of our amazing customers: Customer C! Read their inspiring story and learn how  E-commerce Website  has made a positive impact on their life. Thank you for being part of our journey!"
    },
    {
      date: '2024-02-03',
      title: 'Stay Connected with Us',
      content: "Stay connected with  E-commerce Website for the latest news and updates. Follow us on social media and subscribe to our newsletter to never miss out on exciting announcements, promotions, and more!"
    }
  ];

  return (
    <div className="container mx-auto my-[20px] md:my-[40px] px-[20px]">
    <div className="w-full max-w-[1200px] 2xl:px-0 mx-auto px-[20px]  flex flex-col justify-between items-center">
      <h2 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Latest News and Updates</h2>
      {/* Rendering news items using map */}
      {newsItems.map((newsItem, index) => (
        <div key={index} className="py-[20px]   ">
          <h3 className='text-[16px] mb-5 font-semibold leading-tight'>{newsItem.date} :  {newsItem.title}
          </h3>
          <p>{newsItem.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque ipsam dicta. Corporis ad, vitae eveniet eum error ab maiores magnam ut in nobis qui pariatur, rem soluta sequi perspiciatis.</p>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default NewsPage;
