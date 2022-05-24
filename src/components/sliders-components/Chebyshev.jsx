import { useContext } from 'react';
import { ChebyshevContext } from '../../contexts/ChebyshevContext';

function Chebyshev() {

    const { chebyshevVal, setChebyshevVal } = useContext(ChebyshevContext);

    return (
        <div className=" sliders-general chebyshev-slider">
            <p>Chebyshev</p>
            <input onInput={(e) => setChebyshevVal(e.target.value)} className="slider" type="range" name="slider" min="0" max="100" value={chebyshevVal} step="1" />
            <div style={{ left: `${(chebyshevVal / 100) * 100 + "%"}` }} className="slider-thumb">
                <div className="tool-tip">{chebyshevVal}</div>
            </div>
            <div style={{ width: `${(chebyshevVal / 100) * 100 + "%"}` }} className="progress"></div>
        </div>
    )
}

export default Chebyshev;