import React from 'react';
import { Container, Header, Segment, List } from 'semantic-ui-react';

const AboutUs = () => {
  return (
    <Container
      style={{
        marginTop: '4em',
        marginBottom: '4em',
        maxWidth: '900px', 
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        padding: '2.5em 3em',
        color: '#333',
      }}
    >
      <Segment basic>
        <Header as="h2" color="purple" style={{ marginBottom: '1.2em' }}>
          About FastX
        </Header>
        <p style={{ fontSize: '1.15em', lineHeight: '1.75' }}>
          <strong>FastX</strong> is a modern online bus ticket booking platform built to simplify travel planning and ticket management. It serves as a full-stack web application with role-based features for passengers, bus operators, and administrators.
        </p>

        <Header as="h3" color="violet" style={{ marginTop: '2em' }}>
          Tech Stack
        </Header>
        <List bulleted style={{ color: '#555', fontSize: '1.1em', marginBottom: '1.8em' }}>
          <List.Item><strong>Frontend:</strong> React.js, Axios, Semantic UI</List.Item>
          <List.Item><strong>Backend:</strong> Spring Boot (Java), REST APIs</List.Item>
          <List.Item><strong>Database:</strong> MySQL</List.Item>
          <List.Item><strong>Database:</strong> Postman,SQL Workbench, GitHub</List.Item>
          <List.Item><strong>Security:</strong> JWT-based authentication</List.Item>
        </List>

        <Header as="h3" color="violet" style={{ marginTop: '2em' }}>
          Core Features
        </Header>
        <List bulleted style={{ color: '#555', fontSize: '1.1em', marginBottom: '1.8em' }}>
          <List.Item>User registration and login with role-based access</List.Item>
          <List.Item>Search buses by route and date</List.Item>
          <List.Item>Seat selection and online booking</List.Item>
          <List.Item>Payment and cancellation support</List.Item>
          <List.Item>Admin tools for route, user, and bus management</List.Item>
        </List>

        <Header as="h3" color="violet" style={{ marginTop: '2em' }}>
          About the Developer
        </Header>
        <p style={{ fontSize: '1.15em', lineHeight: '1.75' }}>
          This project is developed by <strong>Abhishek A G</strong> as a simulation of a real-world ticketing system.
          It demonstrates skills in full-stack development, RESTful APIs, role-based access control, and modern UI/UX.
        </p>
        <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1.1em', marginTop: '1em' }}>
          Thank you for visiting FastX — your travel, simplified!
        </p>
      </Segment>
    </Container>
  );
};

export default AboutUs;
