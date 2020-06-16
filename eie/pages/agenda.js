import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import SpeakerGroup from '../components/SpeakerGroup';

const card ={
  border: 'none',
  boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)',
  marginBottom: '10px',
}

const img ={
  width: 100,
  margin: '0 auto',
}

export default class Agenda extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>Agenda</title>
      </Head>
      <Header />
      <h1>Agenda</h1>
      <p>THIS IS A PEACEFUL PROTEST!!
        As we mourn the life of George Floyd, we are in solidarity with those in the streets in Minneapolis and the Black liberation movement that is working to destroy white supremacy, abolish police brutality, and free us all. 
      </p>

        <Card style={card}>
          <Card.Body>
            <Card.Title>Friday June 13th</Card.Title>
            <Card.Title>Indianapolis Memorial Park</Card.Title>

            <Card.Text>
              <p>1:00pm ET</p>
              <ul>
                <li>Volunteers will pass out face masks and gloves as well as posters and markers to create signs!</li>
              </ul>

              <p>2:00pm ET</p>
              <ul>
                <li>Rally the people up!</li>
                <li>Congressman Andre Carson addresses the historical context behind Juneteenth.</li>
                <li>Take a moment of silence for the lives who have been lost.</li>
              </ul>

              <p>3:00pm ET</p>
              <ul>
                <li>Public speakers, singers, and poets will address the protest.</li>
                <li>Create and post signs.</li>
                <li>Remember all our fallen black and brown brothers and sisters with pictures, candles, and art.</li>
              </ul>

              <p>5:00pm ET</p>
              <ul>
                <li>If curfew is implemented, end the protest.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <h4>Protest Objectives and Outcomes</h4>
        <Card style={card}>
          <Card.Body>
            <Card.Title>Objectives</Card.Title>

            <Card.Text>
              <p>Address the current political climate of police brutality and Black lives.</p>
              <ul>
                <li>Transparent Police Budget </li>
                <li>Breakdown of the 254 million dollars spent  </li>

              </ul>

              <p>Remove barriers to reporting police misconduct</p>
              <ul>
                <li>For all stops by a police officer, require officers to give civilians their name, badge number, reason for the stop and a card with instructions for filing a complaint to the civilian oversight structure. </li>
              </ul>

              <p>Gain transparent disciplinary, and misconduct records for police officers </p>
              <ul>
                <li>Under Indiana Code § 5-14-3, police disciplinary records are only public if they pertain to an officer's demotion, suspension, or discharge.</li>
              </ul>

              <p>Address Voter Supression</p>
              <ul>
                <li>Marion County has 22 polling stations for its 960,000 citizen population - 30% of which is black.
                  Hamilton County has 125 polling stations for its 338,000 citizen population - 89% of which is white and 3.5% is black. Hamilton has 5.7 times more polling stations than Marion County despite being 1/3 the size.
                </li>
                <li>Spread information to Black business owners to certify their business location as a polling location for future elections.</li>
                <li>Spread information to individuals to become certified to help at polling locations.</li>
                <li>Address local, state, and federal political candidate that align with the goal of Social Justice</li>
                <li>ENCOURAGE PEOPLE TO REGISTER TO VOTE AND GET OUT TO VOTE!</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* <h4>Public Speakers</h4>
        <SpeakerGroup /> */}

        <h4>Covid-19 Accomodations</h4>
        <Card style={card}>
          <Card.Body>
            <Card.Title>Driving Option</Card.Title>
            <Card.Text>
              <p>If unable or worried of joining a large crowd, please decorate your car in solidarity and safely line up around the protesters. 
                Volunteers will also be in both parking lots with art supplies for those who want to decorate their car!</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Body>
            <Card.Title>Supplies</Card.Title>
            <Card.Text>
              <p>Our volunteers will have a limited supply of masks, first aid, and water for anyone in need.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Body>
            <Card.Title>Considerations</Card.Title>
            <Card.Text>
              <p>Please wear a mask, bring hand sanitizer, and respect social distancing. If you do not have a mask, volunteers will be passing some out to provide a safer environment. 
                Review this article to learn more:<a href="https://slate.com/technology/2020/06/how-protesters-can-minimize-their-risk-of-catching-and-spreading-the-coronavirus.html"> How Protesters Can Minimize Their Risk of Catching and Spreading the Coronavirus</a>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
}