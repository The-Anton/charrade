import './Start.css';
import AvatarSelector from '../components/Avatar';

function Start() {
    return (
        <>
            <div className='header'>
                <div className='logo '><h1 className='font-face-rh'>Charrade</h1></div>

                <div className='username-input'><input type="text" placeholder="Enter Your Name"></input></div>
            </div>
            <div className='control-content'>
                <AvatarSelector></AvatarSelector>
                <div className='start-controls'>
                    <button>Play</button>
                    <button>Create Room</button>
                </div>
            </div>

        </>
    );
}

export default Start;


