/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import { Card, Title } from './styles';

interface PokeParams {
    name: string;
}

interface PokeRepo {
    name: string;
    abilities: [
        {
            ability: {
                name: string;
            };
        },
    ];
    forms: [
        {
            name: string;
        },
    ];
    species: {
        name: string;
    };
    sprites: {
        front_default: string;
    };
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            };
        },
    ];
    types: [
        {
            type: {
                name: string;
            };
        },
    ];
}

const Pokecards: React.FC = () => {
    const [pokemon, setPokemon] = useState<PokeRepo | null>(null);
    const { params } = useRouteMatch<PokeParams>();
    useEffect(() => {
        api.get(`pokemon/${params.name}`).then(response => {
            setPokemon(response.data);
        });
    }, [params.name]);

    return (
        <>
            <Title>
                <Link to="/">Back</Link>
                Pokemon Repository
            </Title>
            <Card>
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                <strong>Abilities:</strong>
                {pokemon?.abilities.map(a => (
                    <p> {a.ability.name} </p>
                ))}
                <strong>Forms:</strong>
                {pokemon?.forms.map(f => (
                    <p>{f.name}</p>
                ))}
                <strong>Species:</strong>
                <p>{pokemon?.species?.name}</p>
                <strong>Stats:</strong>
                {pokemon?.stats.map(s => (
                    <p>
                        {s.stat.name}: {s.base_stat}
                    </p>
                ))}
                <strong>Types:</strong>
                {pokemon?.types.map(t => (
                    <p>{t.type.name}</p>
                ))}
            </Card>
        </>
    );
};

export default Pokecards;
