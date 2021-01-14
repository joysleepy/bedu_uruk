import { React } from 'react'; 

import Admcontent from './main/Admcontent';
import Admfooter from './main/Admfooter';
import Admheader from './main/Admheader';
import Admmenu from './main/Admmenu';

function Main() {
    return (
        <div className="wrapper">
            <Admheader />
            <Admmenu />
            <Admcontent />
            <Admfooter />
            <aside className="control-sidebar control-sidebar-dark">
                <div className="p-3">
                <h5>Opciones Adiconales</h5>
                    <p>Menú lateral derecho</p>
                </div>
            </aside>
        </div>
    )
}
export default Main;