# TypeScript v Reactu

## Jokes Generator
1. Stáhni si [vzorový projekt](https://github.com/WhiteLady1/react-demo-app) v Reactu. Nainstaluj závislosti a projekt si spusť. Podívej se jak vypadá v prohlížeči a jaký je jeho kód.
2. Pomocí vite a jeho šablony react-ts si vytvoř vlastní projekt. Tvým úkolem je naprogramovat stejnou aplikaci ovšem s použitím Typescriptu.
3. Můžeš kopírovat libovolný kód z původní aplikace, ulehčí ti to práci. Stejně tak si můžeš zkopírovat použité styly, ale neboj se zapojit i vlastní fantazii.
4. Pokud by tě napadlo jakékoli vylepšení, s chutí do něj a nezapomeň se pochlubit se svým výtvorem ostatním.


### Rozsah a relizace
Pro vypracování úkolu jsem využila dostupné styly ze vzorového projektu. Dále jsem pokračovala dle vlastní fantazie:
- rozdělení komponenty `Form` na dílčí komponenty - `Input`, `Select`, `Button`


**Moje vylepšení**
- formulář nelze odeslat, pokud:
    - nejsou všechna pole fomuláře vyplněna, `button` má atribut `disabled`
    - `count` je větší než počet filtrovaných jokes podle `type`