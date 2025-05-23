import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'CI/CD Pipleline',
    description:
      'Set up a CI/CD pipeline for a Next.js project using AWS CodeArtifact, CodeBuild, and S3 to automate builds from a GitHub repository.',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/cicd.png',
    tags: ['CodeArtifact', 'CodeBuild', 'CodeDeploy', 'CloudFormation', 'S3'],
    link: 'https://medium.com/@monkweb9/setting-up-a-ci-cd-pipeline-with-aws-codeartifact-codebuild-and-s3-70ff20dea1bf',
  },
  {
    id: 2,
    title: 'Deploy Flask app on AWS',
    description: 'Deploying a Flask App with Kubernetes and Amazon EKS',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/eks.png',
    tags: ['Amazon EKS', 'Flask', 'Kubernetes'],
    link: 'https://medium.com/@monkweb9/deploying-a-flask-app-with-kubernetes-and-amazon-eks-5d5eb4105e9d',
  },
  {
    id: 3,
    title: 'Visualizing data',
    description:
      'Designing a relational database with Amazon RDS, and visualizing insights through Amazon QuickSight.',
    image:
      'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/quicksight.png',
    tags: ['Amzon RDS', 'QuickSight', 'S3'],
    link: 'https://medium.com/@monkweb9/visualizing-a-relational-database-on-aws-a-comprehensive-guide-0aa8e7753462',
  },
  {
    id: 4,
    title: 'AI-Powered ChatBot',
    description:
      'A chatbot which sends emails using AmazonLex and Simple Email Service',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/lex.png',
    tags: ['AmazonLex', 'AWS Lambda', 'SES'],
    link: 'https://medium.com/@monkweb9/how-i-created-a-chatbot-using-aws-0056521dc7c2',
  },
];
