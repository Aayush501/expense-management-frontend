import { Card } from 'react-bootstrap'

const BankCard = ({title, subtitle, texts, links}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    {
                        texts.map((val, index) => <Card.Text key={index}>{val}</Card.Text>)
                    }
                    {
                        links.map((val, index) => <Card.Link key={index} href={val.link} onClick={val.onClick}>{val.text}</Card.Link>)
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default BankCard