
const DropdownData = ({heading, para1, para2, para3, para4, para5, para6, para7, para8, para9, para10}) => {
  return (
    <>
    <div className='dropdownData_component global_margin_top'>
        <div className="container">
            <div className="dropdown_content" style={{lineHeight: '28px'}}>
                <h2>{heading}</h2>
                <p>{para1}</p>
                <p>{para2}</p>
                <p>{para3}</p>
                <p>{para4}</p>
                <p>{para5}</p>
                <p>{para6}</p>    
                <p>{para7}</p>        
                <p>{para8}</p>   
                <p>{para9}</p>   
                <p>{para10}</p>   

            </div>
        </div>

    </div>
    </>
  )
}

export default DropdownData