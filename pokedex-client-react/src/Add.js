import React, { useState } from "react";
import { types } from "./Type";
import data from "./data";
import { useNavigate } from "react-router-dom";

function Add() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [type1, setType1] = useState(undefined);
    const [type2, setType2] = useState(undefined);

    const navigate = useNavigate();

    async function postPokemon(e) {
        e.preventDefault();
        try {
            await data.post('/pokemon', {
                id: id,
                name: name,
                height: height,
                weight: weight,
                type1: type1,
                type2: type2
            });
            alert('Pokemon Added');
            navigate('/pokemon/' + id);
        } catch (e) {
            alert('Unable to Add Pokemon');
        }
    }

    function renderTypes() {
        return types.map((t) => {
            return <option key={t} value={t}>{t}</option>
        });
    }

    return (
        <main className="d-flex flex-column align-items-center">
            <h1>Add a New Pokemon</h1>

            <form onSubmit={postPokemon} className="w-50">
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input
                        onChange={(e) => { setId(e.target.value) }}
                        type="number"
                        className="form-control"
                        id="id"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
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
                            onChange={(e) => { setType1(e.target.value) }}
                            className="form-select"
                        ><option></option>{renderTypes()}</select>
                    </div>
                    <div className="form-column">
                        <label htmlFor="type2">Type 2</label>
                        <select
                            onChange={(e) => { setType2(e.target.value) }}
                            className="form-select"
                        ><option></option>{renderTypes()}</select>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary w-100">Add</button>
                </div>
            </form>
        </main>
    );
}

export default Add;