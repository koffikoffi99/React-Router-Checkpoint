import { useState } from "react";


const Filtre = ({onFilter}) => {
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState('')
    const handleFilter = () =>{
        onFilter(title, rate);
    }
    return (
        <div className="Filtre">
            <input type="text" placeholder="Filtrer avec le titre" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="number" placeholder="Filtrer avec la note" value={rate} onChange={(e) => setRate(e.target.value)} />
            <button onClick={handleFilter}>Filtre</button>
        </div>
    )
}

export default Filtre;