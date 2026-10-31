import { Button } from "react-bootstrap";
import AddBankForm from "../components/forms/AddBankForm"
import { useState } from "react";
import { useSelector } from "react-redux";
import BankCard from "../components/SimpleCardWithoutImage";
import EditBankForm from "../components/forms/EditBankForm";
import { useNavigate } from "react-router-dom";
import { texts } from "../application-texts/ApplicationTexts";

const BankManagement = () => {
    const navigate = useNavigate();

    const [showAddBankForm, setShowAddBankForm] = useState(false);
    const [showEditBankForm, setShowEditBankForm] = useState(false);
    const [selectedBankId, setSelectedBankId] = useState("");
    const [selectedBankName, setSelectedBankName] = useState("");
    const [selectedBankLinkedEmail, setSelectedBankLinkedEmail] = useState("");
    const [selectedBankLinkedPhoneNumber, setSelectedBankLinkedPhoneNumber] = useState("");
    const banksData = useSelector((state) => state.banks.value);

    return (
        <>
            <div className='container my-2'>
                <h6 onClick={() => navigate(-1)}>{texts.bankManagementPage.backButton}</h6>
            </div>
            <div className='container my-2'>
                <Button variant="primary" onClick={() => setShowAddBankForm(true)}>{texts.bankManagementPage.addNewBankButton}</Button>
                <AddBankForm show={showAddBankForm} onHide={() => setShowAddBankForm(false)} />
            </div>
            <div className='d-flex gap-3 flex-wrap container'>
                {
                    banksData.map((val, index) => {
                        return <BankCard 
                            key={val.id} 
                            title={(index + 1) + ". " + val.name} 
                            subtitle={"₹" + val.balance} 
                            texts={[`${val.linkedPhoneNumber}`, `${val.linkedEmail}`]} 
                            links={
                                [
                                    {
                                        link : '#', 
                                        onClick : () => {
                                            setSelectedBankId(val.id);
                                            setSelectedBankName(val.name);
                                            setSelectedBankLinkedEmail(val.linkedEmail);
                                            setSelectedBankLinkedPhoneNumber(val.linkedPhoneNumber);
                                            setShowEditBankForm(true)
                                        }, 
                                        text : 'Edit'
                                    }
                                ]
                            }  
                        />
                    })
                }
            </div>
            <EditBankForm 
                show={showEditBankForm} 
                onHide={() => setShowEditBankForm(false)} 
                bankId={selectedBankId} 
                bankName={selectedBankName} 
                linkedEmail={selectedBankLinkedEmail} 
                linkedPhoneNumber={selectedBankLinkedPhoneNumber} 
            />
        </>
    )
}

export default BankManagement
