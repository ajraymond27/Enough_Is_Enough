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
      <p>THIS IS A PEACEFUL MARCH/PROTEST!!
        As we mourn the life of George Floyd, we are in solidarity with those in the streets in Minneapolis and the Black liberation movement that is working to destroy white supremacy, abolish police brutality and free us all. 
      </p>

      <Card style={card}>
          <Card.Body>
            <Card.Title>Monday June 1st - Thursday June 4th</Card.Title>
            <Card.Text>
              <p>Any Time</p>
              <ul>
                <li>Locations: Sample Gates, Switchyard Park, Monroe County Sheriff's Office, Monroe County Courthouse, Kirkwood, B-Line, Seminary Park, Farmer's Market</li>
                <li>Spread the word! Chalk sidewalks, post signs, pass out flyers, recite poetry, perform music, or leave artwork</li>
              </ul>

            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={card}>
          <Card.Body>
            <Card.Title>Friday June 5th</Card.Title>
            <Card.Text>
              <p>1:00pm ET</p>
              <ul>
                <li>Location: Dunn Meadow</li>
                <li>Volunteers will pass out face masks and gloves as well as posters and markers to create signs!</li>
              </ul>

              <p>2:00pm ET</p>
              <ul>
                <li>Location: Dunn Meadow</li>
                <li>Rally up the people!</li>
              </ul>

              <p>3:00pm ET</p>
              <ul>
                <li>Location: Dunn Meadow</li>
                <li>Public speakers will address the protest.</li>
              </ul>

              <p>3:30pm ET</p>
              <ul>
                <li>Location: Dunn Meadow --> Courthouse</li>
                <li>We march! Volunteers will guide the march from Dunn Meadow to the Courthouse.</li>
              </ul>

              <p>4:00pm ET</p>
              <ul>
                <li>Location: Monroe County Courthouse</li>
                <li>Public speakers will address the protest. Remember all of our fallen black and brown brothers and sisters with pictures, candles, artwork and signs</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <h4>Public Speakers</h4>
        <SpeakerGroup />

        <h4>Covid-19 Accomodations</h4>
        <Card style={card}>
          <Card.Body>
            <Card.Title>Driving Option</Card.Title>
            <Card.Text>
              <p>If unable or worried of joining a large crowd, please decorate your car in solidarity and safely line up behind the marchers at 2:45pm ET on Friday June 5th. 
                Blue and black Ford Fusions will lead the line of cars. IF you plan on driving, please park in the two parking lots behind Noodles &amp; Company. If those spaces are full, please park behind Qdoba.
                We will have volunteers directing traffic! Volunteers will also be in both parking lots with art supplies for those who want to decorate their car!</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Body>
            <Card.Title>Supplies</Card.Title>
            <Card.Text>
              <p>Our volunteers will have a limited supply of masks, first aid, and water for anyone in need. However, please refer to this Walmart registry for items still needed for the protest. Our team will pick the items up from the store.
                <a href="https://www.walmart.com/lists/shared/042deea4-05cb-43d5-b914-db597a0aff7b"> Walmart Registry</a>
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