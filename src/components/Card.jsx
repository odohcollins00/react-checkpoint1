import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCom({title, desc, imgurl}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgurl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {desc}
        </Card.Text>
        <Button variant="primary">MY Store</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCom;