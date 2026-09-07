export class Capture{attempt(mon,bonus=0){const hp=1-mon.hp/mon.maxHp;const back=mon._backBonus||0;const chance=Math.min(.94,.18+hp*.62+bonus+back);return{success:Math.random()<chance,chance}}}
