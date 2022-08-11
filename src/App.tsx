import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Champion } from './interfaces';



function App() {
  const [champions, setChampions] = React.useState<Champion[]>([]);
  useEffect(() => {
    axios.get(
      'http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json'
    )
    .then((res) => {
      setChampions(Object.values(res.data.data));
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className='grid gap-4 grid-col-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
      {champions.map((champion) => {
        return (
          <div
            key={champion.id}
            className='p-2 space-y-1 text-center rounded-lg shadow-md cursor-pointer shadow-gray-200 hover:shadow-lg hover:bg-slate-200'
          >
            <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion.image.full}`}
            alt={champion.name}
            className='w-full rounded-md'
            />
            <h1 className='text-xl font-bold'>{champion.name}</h1>
            <p className='font-bold underline capitalize'>{champion.title}</p>
            <p className='text-sm font-small'>Type : {champion.partype}</p>
            <span className='text-sm font-small'>Class(es) : {champion.tags.join(', ')}</span>

            <h1 className='underline'>Stats ( / per level)</h1>
            <p className='text-sm font-small'>Armor : {champion.stats.armor} / {champion.stats.armorperlevel}</p>
            <p className='text-sm font-small'>Attack Damage : {champion.stats.attackdamage} / {champion.stats.attackdamageperlevel}</p>
            <p className='text-sm font-small'>Attack Range : {champion.stats.attackrange}</p>
            <p className='text-sm font-small'>Attack Speed : {champion.stats.attackspeed} / {champion.stats.attackspeedperlevel}</p>
            <p className='text-sm font-small'>Crit : {champion.stats.crit} / {champion.stats.critperlevel}</p>
            <p className='text-sm font-small'>HP : {champion.stats.hp} / {champion.stats.hpperlevel}</p>
            <p className='text-sm font-small'>HP Regen : {champion.stats.hpregen} / {champion.stats.hpregenperlevel}</p>
            <p className='text-sm font-small'>Movespeed : {champion.stats.movespeed}</p>
            <p className='text-sm font-small'>MP : {champion.stats.mp} / {champion.stats.mpperlevel}</p>
            <p className='text-sm font-small'>MP Regen : {champion.stats.mpregen} / {champion.stats.mpregenperlevel}</p>
            <p className='text-sm font-small'>Spellblock : {champion.stats.spellblock} / {champion.stats.spellblockperlevel}</p>
          </div>
        );
      })}
    </div>
  );

}

export default App;
