import React, { useEffect, useState } from 'react';
import '../styles/ProgramStyle.css';

      const section = [
      {
          image: "/images/DevOps.webp",
          title: "CloudOps Engineer Course - TS4U",
          shortDescription: "This course will transform you into an AWS CloudOps Engineer in just 7 to 9 months. Throughout our IT training program, you will have the opportunity to get hands-on experience solving problems and deploying Enterprise-grade applications and services. All these skill developments will be done from scratch, so no prior programming background is necessary. Upon completing this program, you will have experienced deploying projects from scratch within an agile scrum framework. You'll also have access to a virtual project deployment environment where you'll work collaboratively on real-world problems. The salary range for AWS CloudOps Engineers is between $120k to $200k yearly in the USA. With the skills and experience you will gain at TS4U, you will surely land your dream job in the booming AWS CloudOps Engineering job market.",
          price: '17000',
      },
      {image: '/images/quality-assurance.jpg',
      title: 'Software Quality Automation Engineer',
      shortDescription: "This course will transform you into a Software Quality Automation Engineer in just 6 to 9 months. Throughout our IT training program, you will have the opportunity to get hands-on experience solving problems and testing Enterprise-grade applications and services. All these skill developments will be done from scratch, so no prior programming background is necessary. Upon completing this program, you will have learned the ins and outs of test automation using agile scrum methodology. You'll also have access to a virtual project environment where you'll work collaboratively on real-world problems and gain valuable hands-on experience with a range of tools. The salary range for Software Test Engineers is between $90k to $150k yearly in the USA, plus an upward path to CloudOps Engineer roles. The career sustainability of a Software Quality Automation Engineer is truly rocked solid. And finally, With the skills and experience, you will gain at TS4U- you can easily land your dream job in the booming Software Quality Assurance job market.",
      price: '14899',

      },
      {
          image: '/images/Verification-and-Validation.jpg',
          title: 'CloudOps Engineer Course - TS4U',
          shortDescription: "Become a full-time vehicle validation engineer with our course program. TS4U provides 100% effort on job assistance and placement once the Bootcamp is complete successfully. Enroll now!",
          price: '9999',
      }
      
      
      ];

  const ProgramsList = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
      fetch('https://api.ts4u.us/api/course/get?type=program')
        .then((response) => response.json())
        .then((data) => setPrograms(data))
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

  return (
            <div className="container">
        <h1 className="program-heading">TS4U Land an IT job! TS4U IT Engineering Bootcamp</h1>

        {section.map((item, index) => (
            <div key={index} className="program-card">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} loading="lazy" />
            <p>{item.shortDescription}</p>
            <p>Price: ${item.price}</p>
            </div>
        ))}
        </div>

  );
};

export default ProgramsList;
