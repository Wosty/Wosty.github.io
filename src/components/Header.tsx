import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const MyHeader: React.FC = () => {
    return (
        <Container>
            <ButtonGroup aria-label="Basic example">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Container>
    );
}

export default MyHeader;