import React from 'react';
import { Container, Segment, Header, Accordion, Icon } from 'semantic-ui-react';

const faqData = [
  {
    question: "How do I book a ticket on FastX?",
    answer: "Login as a user, search for buses, select seats, enter passenger details, and make the payment."
  },
  {
    question: "How can I cancel a booking?",
    answer: "Go to 'My Bookings' under the user dashboard and click 'Cancel' next to the active booking."
  },
  {
    question: "Can I view my ticket later?",
    answer: "Yes, all your tickets and history are stored under 'Booking History'. You can view or print them anytime."
  },
  {
    question: "I am a bus operator. How do I add a new route?",
    answer: "Login as a Bus Operator and go to 'Manage Route'. Fill in the route details and save."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, FastX uses secure payment processing and token-based authentication to ensure safe transactions."
  },
  {
    question: "What payment methods are accepted?",
    answer: "FastX supports credit/debit cards, net banking, and popular digital wallets for secure and easy payments."
  },
  {
    question: "How do I reset my password if I forget it?",
    answer: "Click on 'Forgot Password' on the login page, enter your registered email, and follow the instructions sent to your inbox."
  },
  {
    question: "Can I book tickets for multiple passengers at once?",
    answer: "Yes, you can select multiple seats and enter passenger details for each one during the booking process."
  },
  {
    question: "Are there any cancellation charges?",
    answer: "Cancellation charges may apply depending on the bus operator's policy and the timing of your cancellation."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach customer support via the 'Contact Us' page or email support@fastx.com for assistance."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

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
        <Header as="h2" color="purple" style={{ marginBottom: '1.5em' }}>
          Frequently Asked Questions (FAQ)
        </Header>
        <Accordion fluid styled>
          {faqData.map((faq, index) => (
            <div key={index}>
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={() => handleClick(index)}
                style={{ fontSize: '1.1em', fontWeight: '600', color: '#6B008C' }}
              >
                <Icon name="dropdown" />
                {faq.question}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <p style={{ fontSize: '1.05em', lineHeight: '1.6', color: '#555' }}>{faq.answer}</p>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </Segment>
    </Container>
  );
};

export default FAQ;
