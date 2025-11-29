import { useMemo, useState, useTransition } from 'react';

import { Container } from '$components/container';
import { Input } from '$components/input';
import { MemoizedPokemon } from './components/pokemon';
import { filterPokemon } from './utilities/filter-pokemon';

const Application = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [_isPending, startTransition] = useTransition();

  const filteredPokemon = useMemo(() => filterPokemon(searchQuery), [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputQuery(newValue);
    startTransition(() => {
      setSearchQuery(newValue);
    });
  }



  return (
    <Container className="space-y-8">
      <section id="filters">
        <Input
          label="Search Pokemon"
          placeholder="Search by name, type, ability, species, or description…"
          value={inputQuery}
          onChange={handleInputChange}
        />
      </section>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPokemon.map((pokemon) => (
          <MemoizedPokemon key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </Container>
  );
};

export default Application;
