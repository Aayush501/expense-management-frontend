import { FileUser } from 'lucide-react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { texts } from '../application-texts/ApplicationTexts';

const UserProfilePage = () => {

    const userData = useSelector((state) => state.user.value);

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <Card style={{ minWidth: '10rem' }}>
                    <div className='d-flex justify-content-center mt-3'>
                        <FileUser size={70} />
                    </div>
                    <Card.Body className='d-flex justify-content-center'>
                        <Card.Title><h2><strong>{userData.username}</strong></h2></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>{texts.userProfilePage.fullNameLabel}</b>{userData.firstName} {userData.lastName}</ListGroup.Item>
                        <ListGroup.Item><b>{texts.userProfilePage.emailLabel}</b>{userData.email}</ListGroup.Item>
                        <ListGroup.Item><b>{texts.userProfilePage.phoneLabel}</b>{userData.phone}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='d-flex gap-2 justify-content-center '>
                        <Button variant='warning'>{texts.userProfilePage.updateProfileButton}</Button>
                        <Button variant='warning'>{texts.userProfilePage.changePasswordButton}</Button>
                        <Button variant='danger'>{texts.userProfilePage.deleteAccountButton}</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default UserProfilePage
