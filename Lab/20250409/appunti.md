Continua la lezione sul css della volta scorsa. Poi database.

Per mettere la navbar che rimane sticky nonostante il flex, mettiamo header e navbar dentro un div col-12, perché devono stare in alto e non c'è bisogno che si organizzino a 12 colonne.
Quindi mettiamo header navbar div.cols(routervirew footer).
La classe cols ha la proprietà overflow: hidden.

Pagina di login

Creiamo una pagina di login, con due campi di input testo e un bottone.
```
template
div id=loginContent
div id=loginForm
h1 login
<form action="login" method="POST">
    <label for="username">Username:</label>
    input type=text username=id=name
    label for password
    input type=id=name=password
    input type=submit value=accedi
</form>
/div
/div
/template

style #loginContent
heihgt: 600px
width: auto (dipende dal contenuto)

style #loginForm
text-align: center
background: var(--primary)
color: var(--white)
position: absolute
top: 65% //si sposta 65% in basso
left: 50% //L'ORIGINE si sposta al centro della pagina, risolviamo con una transform (trasformata della traslazione)
transform: translate(-50%, -50%) //La rispostiamo al centro
padding: 20px
margin: 0px
border-radius: 10px
box-shadow: 0 3px rgba(0,0,0,0.5)

#loginForm h1
color: var(--white)
```

Andiamo a lavorare sugli input
In questo caso abbiamo tre tipi di input: button, text e ...

```
#loginForm input {
    display: block; // Uno sotto l'altro
    width: 66%;
    margin-left: 16.5%;
}
```

Come lavoriamo su input submit in particolare?

```
#loginForm input[type="submit"]{
    background: var(--white);
    color: var(--primary);
    font-weight: bold;
    cursor: pointer; // Mette il dito
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
}
```

Ultime proprietà, sempre sul pulsante
```
#loginForm input[type="submit"]:hover {
    background: var(--tertiary);
    color: var(--white);
}
```

Comunque chiama il form "modàle".

Nella Home dovremmo aver creato una tabella. Facciamo finta che l'abbia creata anch'io. È nelle slide.
Mettiamo lo stile direttamente in homeview.
```
table {
    width: 100&;
    backgroundd: transparent;
    
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}
```
Teniamo separate le cose del box model per ordine ↑.

```
th {
    background: var(--primary);
    color: var(--white);
    padding: 10px;
}
```

Lavoriamo con pseudoclassi
```
th:first-child {
    border-top-left-radius: 10px;
}
th:last-child {
    border-top-right-radius: 10px;
}
```

Su table. Quando collassano, i bordi devono avere il comportamento: collassare
```
table-collapse: colapse;
```

```
td {
    padding: 10px;
    text-align: center;
}
td:first-child{
    background-color: var(--primary);
    color: var(--white);
    font-weight: bold;
}
```
Però. Ci colora anche l'ultimo attore in classifica. Perché? Perché abbiamo collassato le ultime due righe. Non ci sono workaround. Possiamo però usare le classiche proprietà CSS, usiamo una classe.
Diventa:
```
td.firstChild{
    background-color: var(--primary);
    color: var(--white);
    font-weight: bold;
}
```

Stondiamo. `td:last-child` si applica alla casella a destra di ciascuna riga. Mi serve proprio l'ultima. `tr:last-child` non va bene, perché il border radius non si applica a tr. Classe.
```
td.rightCorner{
    border-bottom-right-radius: 10px;
}
td.leftCorner{
    border-bottom-left-radius: 10px;
}
```

Ci manca una sola cosa: colori alternati nelle righe. Usiamo un'altra pseudoclasse. Sì, quella che ci avevano detto di non usare perché non è supportata da tutti i browser.

```
tr:nth-child(even){
    background: var(--primary);
}
tr:nth-child(odd){
    background: var(--white);
}
```

finita la lezione slide 4.

ci sono degli esercizi