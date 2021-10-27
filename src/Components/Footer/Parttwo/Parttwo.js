import React from 'react';

const Parttwo = () => {
    return (
        <div>
            <div className='mt-3 px-5' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textAlign: 'start' }}>
                <div>
                    <small>Copyright &copy; Programming Hero</small><br />
                    <small>Recreated by <p href="https://www.facebook.com/najmulkabirjoy/">Najmul Kabir Joy</p></small>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className='me-5'>Privacy Policy</p>
                    <p className='me-5'>Terms of use</p>
                    <p className='me-5'>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Parttwo;