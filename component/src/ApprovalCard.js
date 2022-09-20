import react from 'react';

const ApprovalCard = (props) => {
    console.log(props); // CommentDetail is nested in it.
    console.log(props.children); // Access props in CommentDetail from ApprovalCard
    return(
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button'>Approve</div>
                    <div className='ui basic red button'>Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;