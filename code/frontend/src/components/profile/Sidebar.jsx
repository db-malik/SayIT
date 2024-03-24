import React from 'react';
import { ClockCounterClockwise, Gear, List, Plus, Question } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }

    return (
        <aside className='sidebar-styled'>
            <div className="buttonContainer">
                <button onClick={() => goTo('/profile/chat_with_ai')}><Plus weight='bold' size={20} />Chat with IA</button>
                <button onClick={() => goTo('/profile/text_sammury')}><Plus weight='bold' size={20} />Summarize Information</button>
                <button><Plus weight='bold' size={20} />Transcript Audio</button>
                <button><Plus weight='bold' size={20} />Transcript Video</button>
                <button><Plus weight='bold' size={20} />Nuevo chat</button>
            </div>
            <div className='sidebar-bottom'>
                <div><Question weight='bold' size={20} />Ayuda</div>
                <div><ClockCounterClockwise weight='bold' size={20} />Actividad</div>
                <div><Gear weight='bold' size={20} />Configuración</div>
                <p>Code by @nilsondream</p>
            </div>
        </aside>
    )
}

export default Sidebar;
