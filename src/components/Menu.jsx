import missao from '../assets/missao_tratado.png';
import mapa from '../assets/mapa_tratado.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <div className='menu'>
            <ul>
                <li>
                    <Link to='missao'>
                        <figure>
                            <img src={missao} alt="" />
                            <figcaption>Missões</figcaption>
                        </figure>
                    </Link>
                </li>
                
                <li>
                    <Link to='inventario'>
                        <figure>
                            <img src={bau} alt="" />
                            <figcaption>Inventário</figcaption>
                        </figure>
                    </Link>
                </li>

                <li>
                    <Link to='geolocalizacao'>
                        <figure>
                            <img src={mapa} alt="" />
                            <figcaption>GeoLocalização</figcaption>
                        </figure>
                    </Link>
                </li>

                <li>
                    <Link to='camera'>
                        <figure>
                            <img src={camera} alt="" />
                            <figcaption>Camera</figcaption>
                        </figure>
                    </Link>
                </li>
            </ul>
        </div>
    )
}