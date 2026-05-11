# Controllo qualità codice

Esegui type-check TypeScript e linting ESLint sul progetto.

## Passi da seguire

1. Esegui `pnpm type-check` (o `npx tsc --noEmit` se non disponibile).
2. Esegui `pnpm lint`.
3. Riporta i risultati in modo chiaro:
   - Se tutto ok: "Nessun errore TypeScript, nessun warning ESLint."
   - Se ci sono errori: mostrali con file e riga, proponi le correzioni.
4. Se l'utente ha specificato `--fix` come argomento, esegui anche `pnpm lint --fix` e riporta cosa è stato corretto automaticamente.

## Note
- Il progetto usa TypeScript strict mode: no `any`, no `as unknown`.
- Gli errori TypeScript bloccano il build di produzione (`pnpm build`).
- I warning ESLint non bloccano il build ma vanno risolti prima del deploy.
- Controlla in particolare: import non utilizzati, `useEffect` dependencies, `Image` di Next.js senza `alt`.
