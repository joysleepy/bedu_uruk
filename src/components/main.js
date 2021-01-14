import { React } from 'react'; 

import AuthContext from '../store/AutContext';
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








    // const [aut, setAuth] = useState(false);
    
    // useEffect(() => {
    //     async function x(){
    //         const auth = await isAuthenticaded();
    //         console.log('auth', auth);
            
    //         setAuth(auth)
    //     } 
        
    //     x();

    // }, []);
    
    // isAuthenticaded().then(res => {
    //     console.log('main', res); 
    // });
    //

    // if(aut){
    //     console.log('token correcto');
    // }
    // else{
    //     console.log('token expirado o nulo');
    // }