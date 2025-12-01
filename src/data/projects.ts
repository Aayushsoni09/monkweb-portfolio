import { Project } from '../types';

export const projects: Project[] = [
    {
    id: 1,
    title: '3 Tier AWS-Terraform Infrastructure',
    description:
      'A complete, production-ready 3-tier web application architecture deployed on AWS using Infrastructure as Code (Terraform). This project demonstrates enterprise-level cloud architecture patterns with high availability, auto-scaling, security best practices, and comprehensive monitoring.',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/Tf-3tier.png',
    tags: ['Terraform', 'AWS', 'CloudFront', 'EC2', 'ALB', 'RDS', 'S3', 'CloudWatch','VPC'],
    link: 'https://github.com/Aayushsoni09/3-Tier-AWS-Architecture-Terraform',
  },
    {
    id: 2,
    title: 'CI/CD Pipeline with Github Actions',
    description:
      'A project demonstrating how to build a complete end-to-end CI/CD + GitOps microservices infrastructure using GitHub Actions. It showcases a multi-service architecture (with services in Go, Node.js, Python, React, etc.), automated container building and deployment, and Kubernetes-based deployment workflows — all orchestrated through GitHub workflows and automation.',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/GithubActions.png',
    tags: ['Github Actions', 'Javascript', 'Go', 'GitOps', 'Python', 'ReactJS', 'Kubernetes'],
    link: 'https://github.com/Aayushsoni09/CI-CD-Github-Actions-Project',
  },
    {
    id: 3,
    title: 'Terraform with AWS Open Source Project',
    description:
      'A comprehensive, hands-on repository for learning Terraform with AWS from the ground up. This project covers everything from setting up your environment to deploying complex infrastructure on AWS using Terraform, including best practices for organization, state management, and automation.',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/Terraform_learn.png',
    tags: ['Terraform', 'VPC', 'TF-modules', 'EC2', 'S3'],
    link: 'https://github.com/Aayushsoni09/Terraform-with-AWS',
  },
    {
    id: 4,
    title: 'Kubernetes MongoDB',
    description:
      'Deploying MongoDB on a Kubernetes cluster using Helm charts, with automated backup and restore functionality via CronJobs and Persistent Volumes.',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/K8_N.png',
    tags: ['CodeArtifact', 'CodeBuild', 'CodeDeploy', 'CloudFormation', 'S3'],
    link: 'https://github.com/Aayushsoni09/Kubernetes-MongoDB',
  },
  {
    id: 5,
    title: 'AWS native CI/CD Pipeline',
    description:
      'Set up a CI/CD pipeline for a Next.js project using AWS CodeArtifact, CodeBuild, and S3 to automate builds from a GitHub repository.',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/cicd.png',
    tags: ['CodeArtifact', 'CodeBuild', 'CodeDeploy', 'CloudFormation', 'S3'],
    link: 'https://medium.com/@monkweb9/setting-up-a-ci-cd-pipeline-with-aws-codeartifact-codebuild-and-s3-70ff20dea1bf',
  },
  {
    id: 6,
    title: 'Deploy Flask app on AWS',
    description: 'Deploying a Flask App with Kubernetes and Amazon EKS',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/eks.png',
    tags: ['Amazon EKS', 'Flask', 'Kubernetes'],
    link: 'https://medium.com/@monkweb9/deploying-a-flask-app-with-kubernetes-and-amazon-eks-5d5eb4105e9d',
  },
  {
    id: 7,
    title: 'Visualizing a Relational Database on AWS',
    description:
      'Designing a relational database with Amazon RDS, and visualizing insights through Amazon QuickSight.',
    image:
      'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/quicksight.png',
    tags: ['Amzon RDS', 'QuickSight', 'S3'],
    link: 'https://medium.com/@monkweb9/visualizing-a-relational-database-on-aws-a-comprehensive-guide-0aa8e7753462',
  },
  {
    id: 8,
    title: 'AI-Powered ChatBot',
    description:
      'A chatbot which sends emails using AmazonLex and Simple Email Service',
    image: 'https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/lex.png',
    tags: ['AmazonLex', 'AWS Lambda', 'SES'],
    link: 'https://medium.com/@monkweb9/how-i-created-a-chatbot-using-aws-0056521dc7c2',
  },
];
