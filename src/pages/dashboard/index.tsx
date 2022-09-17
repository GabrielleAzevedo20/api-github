/* eslint-disable no-template-curly-in-string */
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Pokemons from '../repository';
import { Form, Repositories, Error, Title } from './styles';

interface Pokemons {
    name: string;
    sprites: {
        front_default: string;
    };
    types: [
        {
            type: {
                name: string;
            };
        },
    ];
}
const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');

    const [repositories, setRepositories] = useState<Pokemons[]>([]);

    useEffect(() => {
        const pokeRep = localStorage.getItem('@Pokemons:repositores');
        if (pokeRep) {
            setRepositories(JSON.parse(pokeRep));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            '@Pokemons:repositores',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        e.preventDefault();

        if (!newRepo) {
            setInputError('Digite um pokémon');
            return;
        }

        try {
            const response = await api.get<Pokemons>(`/pokemon/${newRepo}`);
            const pokemon = response.data;
            setRepositories([...repositories, pokemon]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca desse pokémon');
        }
    }

    return (
        <>
            <Title>Pokemon repository</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome de um pokémon"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(pokemon => (
                    <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                        <div>
                            <img
                                src={pokemon.sprites.front_default}
                                alt="Sprite of ${Pokemon.name}"
                            />
                            <strong>{pokemon.name}</strong>
                            <p>
                                Type:
                                {pokemon.types[0].type.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
