import React from 'react'

const email = 'justintunev7@gmail.com'
const username = 'justintunev7'
const linkedIn = 'justin-hendrickson-software'
const fullName = 'Justin Clark Hendrickson'
const degree = 'Bachelor'
const major = 'Computer Science'
const gpa = '3.98'
const classes = ['Software Design/Testing', ' Algorithms', ' Advanced Programming', 
                 ' Database Management', ' Software Business', ' Web Programming', 
                 ' Entrepreneurship Skills', ' Technical Communications']
const yearInSchool = 'Senior'
const universityURL = 'https://www.byu.edu/'
const universityName = 'Brigham Young University'
const expectedGradDate = 'April, 2020'
const activitiesAndClubs = ['','']

const skills = [' JavaScript (Angular, Node.js, Vue.js, React, and Express)' , 
                ' Ruby / Ruby on Rails' , ' Python' , ' Java' , ' C, C++' , ' Some Flutter (Dart)' ,
                ' Relational database management (MySQL, Postgres, SQLite, etc.)' , 
                ' NoSQL database management (DynamoDB, Firebase, etc.)' , ' HTML, CSS' , 
                ' REST APIs' , ' Some PHP' ]

// Work experience #1
const companyURL1 = 'http://www.t2modus.com/'
const companyName1 = 'T2 Modus'
const position1 = 'Software Developer'
const startDate1 = 'May 2019'
const endDate1 = 'Current'
const details1 = ['Integrated existing software with other systems (LexisNexis, SendGrid, etc.) in order to add features that were recommended by software users',
                  'Designed and developed front and back end features in Ruby on Rails and ReactJS ',
                  'Created 20+ automated processes that significantly eased the burden on other employees who relied on manually uploading data on a daily or weekly basis']

// Work experience #2
const companyURL2 = ''
const companyName2 = 'A Squared Solutions'
const position2 = 'Web Developer'
const startDate2 = 'December 2018'
const endDate2 = 'March 2019'
const details2 = ['Developed a college campus room reservation web application that could be used in the A-Squared software',
                  'Suggested new ideas to the company founders to improve the software'
                ]

// Work experience #3
const companyURL3 = 'https://cfac.byu.edu/'
const companyName3 = 'Brigham Young University - College of Fine Arts and Communications'
const position3 = 'Web Developer'
const startDate3 = 'May 2018'
const endDate3 = 'September 2018'
const details3 = ['Automated the image optimization process for the editorial team which increased image optimization efficiency from 3 minutes to less than 1 second per image',
                  'Designed and developed major changes to 5 major college websites to improve user experience and SEO (search engine optimization)',
                  'Communicated with different departments to discuss website changes to ensure client satisfaction'
                ]


// Service experience #1
const organizationURL1 = 'https://www.churchofjesuschrist.org/?lang=eng'
const organizationName1 = 'The Church of Jesus Christ of Latter-day Saints'
const servicePosition1 = 'Religious Missionary'
const serviceStartDate1 = 'June 2015'
const serviceEndDate1 = 'June 2017'
const serviceDetails1 = [
                  'Doubled or tripled efficiency in many of the areas I served in',
                  'Attained complete fluency in the Spanish language',
                  'Led a group of 8 full-time missionaries in their efforts to teach and serve others',
                ]

// Service experience #2
const organizationURL2 = 'https://www.churchofjesuschrist.org/?lang=eng'
const organizationName2 = 'The Church of Jesus Christ of Latter-day Saints'
const servicePosition2 = "Elder's Quorum Presidency"
const serviceStartDate2 = 'November 2014'
const serviceEndDate2 = 'April 2017'
const serviceDetails2 = [
                  'Led a group of 40+ men in their efforts to serve others and progress spiritually',
                  'Organized meetings to discuss specific needs in our group and to plan how we would fulfill those needs',
                  'Visited members of my church to find/fulfill their needs'
                ]

// JSX is supported in most places in this template in place of strings
const resume = {
  header: {
    name: `${fullName}`,
    links: [
      {
        href: `mailto:${email}`,
        icon: 'far fa-envelope',
        text: `${email}`,
      },
      {
        href: `https://github.com/${username}`,
        icon: 'fab fa-github',
        text: `github.com/${username}`,
      },
      {
        href: `https://linkedin.com/in/${linkedIn}/`,
        icon: 'fab fa-linkedin',
        text: `linkedin.com/in/${linkedIn}/`,
      },
    ],
  },
  summary: [
    'Seeking full-time position as a Software Engineer starting September 2020',
    'Graduating April 2020 with a BS in Computer Science',
    '2 years of technical experience',
    'Software Engineering Consultant at T2 Modus',
    `Skills: ${skills}`
  ],
  sections: [
    {
      title: 'Education',
      subsections: [
        {
          title: <a href={universityURL} target="_blank" rel="noopener noreferrer">{universityName}</a>,
          subtitle: `${yearInSchool} - Expected Graduation Date: ${expectedGradDate}`,
          details: [
            `${degree} of ${major}`,
            `Current GPA: ${gpa}`,
            `Completed Coursework: ${classes}`,
            // `Activities: ${activitiesAndClubs}`
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
        {
          title: <a href={companyURL1} target="_blank" rel="noopener noreferrer">{companyName1}</a>,
          subtitle: `${position1} - ${startDate1} to ${endDate1}`,
          details: details1
        },
        {
          title: <a href={companyURL2} target="_blank" rel="noopener noreferrer">{companyName2}</a>,
          subtitle: `${position2} - ${startDate2} to ${endDate2}`,
          details: details2
        },
        {
          title: <a href={companyURL3} target="_blank" rel="noopener noreferrer">{companyName3}</a>,
          subtitle: `${position3} - ${startDate3} to ${endDate3}`,
          details: details3
        },
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: <a href={organizationURL1} target="_blank" rel="noopener noreferrer">{organizationName1}</a>,
          subtitle: `${servicePosition1} - ${serviceStartDate1} to ${serviceEndDate1}`,
          details: serviceDetails1
        },
        {
          title: <a href={organizationURL2} target="_blank" rel="noopener noreferrer">{organizationName2}</a>,
          subtitle: `${servicePosition2} - ${serviceStartDate2} to ${serviceEndDate2}`,
          details: serviceDetails2
        },
      ]
    }
  ]
}

export default resume