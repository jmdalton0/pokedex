import React, { useEffect, useState } from "react";
import { types } from "./Type";
import data from "./data";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const [id, setId] = useState(useParams().id);
    const [name, setName] = useState('');
    const [header, setHeader] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [type1, setType1] = useState(undefined);
    const [type2, setType2] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            let res = await data.get('/pokemon/' + id);
            let list = res.data;
            if (list?.length > 0) {
                const pokemon = list[0];
                setId(pokemon.id);
                setName(pokemon.name);
                setHeader(pokemon.name);
                setHeight(pokemon.height);
                setWeight(pokemon.weight);
                setType1(pokemon.type1);
                setType2(pokemon.type2);
            }
        }
        getPokemon();
    }, [id]);

    async function editPokemon(e) {
        e.preventDefault();
        try {
            await data.put('/pokemon', {
                id: id,
                name: name,
                height: height,
                weight: weight,
                type1: type1,
                type2: type2
            });
            alert('Pokemon Updated');
            navigate('/pokemon/' + id);
        } catch (e) {
            alert('Unable to Save');
        }
    }

    function renderTypes() {
        return types.map((t) => {
            return <option key={t} value={t}>{t}</option>
        });
    }

    return (
        <main className="d-flex flex-column align-items-center">
            <h1 className="text-capitalize">Edit {header}</h1>

            <form onSubmit={editPokemon} className="w-50">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        type="text"
                        className="form-control"
                        id="name"
                    ></input>
                </div>
                <div className="form-group d-flex">
                    <div className="form-column">
                        <label htmlFor="height">Height</label>
                        <input
                            value={height}
                            onChange={(e) => { setHeight(e.target.value) }}
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="height"
                        ></input>
                    </div>
                    <div className="form-column">
                        <label htmlFor="weight">Weight</label>
                        <input
                            value={weight}
                            onChange={(e) => { setWeight(e.target.value) }}
                            type="number"
                            step="0.01"
                            className="form-control"
                            id="weight"
                        ></input>
                    </div>
                </div>
                <div className="form-group d-flex">
                    <div className="form-column">
                        <label htmlFor="type1">Type 1</label>
                        <select
                            value={type1}
                            onChange={(e) => { setType1(e.target.value) }}
                            className="form-select"
                            id="type1"
                        >{renderTypes()}</select>
                    </div>
                    <div className="form-column">
                        <label htmlFor="type2">Type 2</label>
                        <select
                            value={type2}
                            onChange={(e) => { setType2(e.target.value) }}
                            className="form-select"
                            id="type2"
                        ><option></option>{renderTypes()}</select>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                </div>
            </form>
        </main>
    );
}

export default Edit;