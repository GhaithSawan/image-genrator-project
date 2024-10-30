import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Mycard({ image }) {
  console.log(image);

  return (
    <Card>
      <Card.Img variant="top" src={image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </Card>

  );
}

export default Mycard;