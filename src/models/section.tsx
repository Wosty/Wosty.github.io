import { Row, Col } from "react-bootstrap";

export interface ISubsection {
    title: string;
    date: string;
    points: string[];
}

export class Subsection implements ISubsection {
    title: string;
    date: string;
    points: string[];

    constructor(title: string, date: string, points: string[]) {
        this.title = title;
        this.date = date
        this.points = points;
    }

    static fromJSON(json: ISubsection): Subsection {
        if (typeof json.title !== 'string' || typeof json.date !== 'string' || !Array.isArray(json.points)) {
            throw new Error('Invalid subsection data');
        }
        return new Subsection(json.title, json.date, json.points);
    }

    Format() {
        return (
            <>
                <Col sm={12} md={6}>
                    <h5 style={{ fontStyle: "italic" }}>{this.title}</h5>
                </Col>
                <Col sm={12} md={6}>
                    <h5 style={{ fontWeight: "normal", fontStyle: "normal", float: "right" }}>{this.date}</h5>
                </Col>
                <Row>
                    <Col>
                        <ul>
                            {this.points.map((point) => { return (<li>{point}</li>); })}
                        </ul>
                    </Col>
                </Row>
            </>
        );
    }
}

export interface ISection {
    title: string;
    subsections: ISubsection[];
}

export class Section implements ISection {
    title: string;
    subsections: Subsection[];

    constructor(title: string, subsections: Subsection[]) {
        this.title = title;
        this.subsections = subsections;
    }

    static fromJSON(json: ISection): Section {
        if (typeof json.title !== 'string' || !Array.isArray(json.subsections)) {
            throw new Error('Invalid section data');
        }
        const subsections = json.subsections.map(Subsection.fromJSON);
        return new Section(json.title, subsections);
    }

    Format() {
        return (
            <>
                <h4 style={{ alignContent: "left" }}>{this.title}</h4>
                {this.subsections.map((subsection) => subsection.Format())}
            </>
        );
    }

}