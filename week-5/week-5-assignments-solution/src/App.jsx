import { useState } from 'react'
import { BusinessCard } from './Business'

function App() {
  const [users] = useState([
    {
      name: 'John Doe',
      description: 'Web Developer and Designer',
      interests: ['Coding', 'Design', 'Music'],
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      otherSocialMedia: {
        url: 'https://github.com/johndoe',
        label: 'GitHub',
      },
    },
    {
      name: 'Jane Smith',
      description: 'Graphic Designer',
      interests: ['Art', 'Photography', 'Travel'],
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      otherSocialMedia: {
        url: 'https://dribbble.com/janesmith',
        label: 'Dribbble',
      },
    },
    {
      name: 'hsdfasdffd Doe',
      description: 'Websdfa Developer and Designer',
      interests: ['Codingasdf', 'Design', 'Music'],
      linkedin: 'https://www.lasdfinkedin.com/in/johndoe',
      twitter: 'https://twitter.cosdfm/johndoe',
      otherSocialMedia: {
        url: 'https://github.com/johnsdfdoe',
        label: 'GitHuasdfab',
      },
    },
  ]);

  return (
    <div>
      {users.map((user, index) => (
        <BusinessCard key={index} {...user} />
      ))}
    </div>
  );
}

export default App
