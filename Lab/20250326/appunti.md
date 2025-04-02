# HTML

## Tabelle

Non si usano per organizzare tutti gli elementi del sito, ma solo per fare delle vere e proprie tabelle per presentare dei dati. La struttura è così:

```
<table>
    <tr>
        <th>...</th>
        <th>...</th>
        ...
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
        ...
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
        ...
    </tr>
    ...
</table>
```

* `<table>` - l'intera tabella
* 


# CSS

In `base.css` definiamo delle variabili. Nel nostro caso, definiamo una palette di colori.

```
:root {
    --primary: #1c97e6;
    --secondary: #def0fb;
    --tertiary: #80c6f2;
    --white: #ffffff;
    --black: #4c5052;
}
```

Dentro `base.css` `@import`iamo `'./base.css'`. Adesso possiamo usare le variabili.

Usiamo `linear-gradient` o `radial-gradient` per fare dei colori sfumati.

```
@import './base.css';

body {
    background: linear-gradient(to bottom, var(--white) 40%, var(--secondary));
}

nav {
    background: var(--secondary);
    text-align: center;
}

h1, h2, h3 {
    color: var(--primary);
}

header {
    background: radial-gradient(circle, var(--primary) 35%, var(--tertiary));
    text-align: center;
}
```