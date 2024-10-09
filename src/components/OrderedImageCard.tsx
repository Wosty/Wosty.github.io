import { Card, Col } from "react-bootstrap";

class OrderedImageCard {
    imageUrl: string;
    imageCaption: string;
    imageAltText: string;
    imageOrder: number;

    public constructor(imageUrl: string, caption: string | undefined, imageAltText: string, imageOrder: number | undefined) {
        this.imageUrl = imageUrl;
        if (typeof caption !== 'undefined') {
            this.imageCaption = caption;
        }
        else {
            this.imageCaption = "";
        }
        this.imageAltText = imageAltText;
        this.imageOrder = imageOrder ?? Number.MAX_SAFE_INTEGER;
    }

    public buildCard() {
        if (this.imageCaption !== "") {
            return (
                <Col className="g-5">
                    <Card>
                        <Card.Img src={this.imageUrl} variant="top" />
                        <Card.Text>{this.imageCaption}</Card.Text>
                    </Card>
                </Col>
            )
        }
        else {
            return (
                <Col className="g-5">
                    <Card>
                        <Card.Img src={this.imageUrl} variant="top" />
                    </Card>
                </Col>
            )
        }
    }

}

export default OrderedImageCard;