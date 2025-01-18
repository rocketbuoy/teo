1.	Opišite JavaScript jezik te navedite što on omogućuje.
JS je programski jezik koji se koristi za stvaranje interaktivnih i dinamičkih web stranica. Omogućuje upravljanje aplikacijom u koju je ubačen, ubacivanje programske logike u HTML stranicu, čitanje promjena HTML elemenata, reagiranje na događaj, provjeru podataka prije nego što se pošalju na server…

2.	Opišite moguće načine ugradnje JavaScript koda u HTML dokument te navedite primjere dobre prakse njegova pozicioniranja.
Inline, između <script> i </script>
Iz vanjske datoteke definirane src atributom <script> elementaŽ
U atributu HTML elementa kojemu se dodjeljuje događaj (onclick, onmouseover
itd.)
U URL-u koji koristi poseban javascript: protokol (blokirano od strane modernih
web preglednika)

3.	Koja je razlika između JavaScript biblioteke (library) i razvojnog okvira (framework)?
Razlikuje se od JavaScript biblioteke u načinu na koji ga koristimo: biblioteka nudi
funkcije koje bi mogle biti pozvane kad nam zatrebaju i pomažu nam u kodiranju, dok
okvir definira cjelokupni dizajn i arhitekturu aplikacije.

4.	Što su varijable? Kako možemo onemogućiti promjenu primitivne vrijednosti varijable?
Varijable su kontenjeri za pohranu. Kada dodijelimo novu vrijednost varijabli (koja već ima vrijednost), stvara se nova vrijednost umjesto mijenjanja postojeće. Međutim, ako želite onemogućiti promjenu vrijednosti varijable, možemo koristiti const ključnu riječ.

5.	Osim slova i znamenki, koje posebne znakove možemo koristiti u imenovanju varijabli?
znak dolara $ i donja crta _

6.	Opišite tri djelokruga varijabli.
Globalni djelokrug - definiraju se izvan funkcija, mogu se koristiti u čitavom prgramu, zatvaranjem stranice se brišu
Djelokrug funkcije - definiraju se unutar funkcije te se mogu koristiti samo unutar nje, izlaskom funkcije se brišu
Djelokrug bloka - definiraju se unutar bloka {} pomoću ključne riječi let, dostupne su samo unutar bloka u kojem su definirane, moraju se deklarirati prije upotrebe te se ne mogu ponovo deklarirati

7.	Navedite koji tipovi podataka postoje u JavaScript jeziku.
Primitivni (nepromjenjivi) i objektni (promjenjivi).

8.	Navedite nekoliko metoda koja možemo primijeniti nad znakovnim nizovima (string).
charAt(index): Vraća znak na određenom indeksu.
concat(...strings): Spaja dva ili više stringova.
includes(searchString): Provjerava da li string sadrži određeni podstring.
indexOf(searchValue): Vraća indeks prvog pojavljivanja podstringa.
lastIndexOf(searchValue): Vraća indeks posljednjeg pojavljivanja podstringa.
replace(searchValue, newValue): Zamjenjuje podstring s novim stringom.
slice(start, end): Izdvaja dio stringa.

9.	Koja je razlika između sljedećih operatora: =, ==, === ?
= - dodjela vrijednosti
== - jednaka vrijednost
=== - nije jednaka vrijednost ili nije jednaki tip podataka

10.	Navedite tipove logičkih operatora.
Logičko I (&&), logičko ILI (||), logičko NE (!)

11.	Što vraća operator modulo (%)?
Vraća ostatak. To znači da ako imamo dva broja, a i b, izraz a % b će vratiti ostatak kada se a podijeli s b.

12.	Ukratko opišite razliku između kontrolnih struktura grananje i petlje.
Svrha:
Grananje: Odabire jedan od više mogućih puteva izvršavanja na temelju uvjeta.
Petlje: Ponavlja isti blok koda dok je uvjet zadovoljen.
Broj izvršavanja:
Grananje: Blok koda se izvršava samo jednom, ovisno o uvjetu.
Petlje: Blok koda se može izvršiti više puta, ovisno o uvjetu.
Primjena:
Grananje: Koristi se za odlučivanje koji dio koda treba izvršiti na temelju uvjeta.
Petlje: Koristi se za iteraciju kroz nizove, ponavljanje zadataka, i slično.

13.	Što su objekti?
Zbirka svojstava od kojih svako ima naziv (ključ) i vrijednost. Objekt se prepoznaje po
vitičastim zagradama {}.

14.	Za što služi ključna riječ this?
Za dohvaćanje svojstva unutar definicije objekta koristimo ključnu riječ this.

15.	Za što koristimo JSON?
Razmjena podataka između klijenta i servera, pohrana konfiguracijskih podataka, serilizacija i deserilizacija objekata, interoperabilnost

16.	Koji tipovi objekata postoje po podrijetlu?
Nativni, host, korisnički definiran

17.	Što omogućuju sljedeći standardni (native) ugrađeni objekti: Date, Math i RegExp?
Date - kreiranje objekata koji predstavljaju datume i vrijeme
Math -  pruža matematičke funkcije i konstante za izvođenje različitih matematičkih operacija
RegExp - omogućuje pretragu traženog uzorka unutar znakovnog niza

18.	Što omogućuju objekti BOM-a (Browser Object Model)?
Omogućava JavaScript-u “razgovor” s web pregednikom

19.	Navedite primjere objekata koji pripadaju BOM-u.
window, document, navigator, screen, history, location

20.	Što su nizovi?
Niz je sortirana zbirka vrijednosti.

21.	Kako se niz može kreirati? Kako pristupamo pojedinim elementima niza?
let komandom u stavljanjem u uglate zagrade []. Npr. let brojevi = [1, 2, 3, 4, 5];. Elementi niza se pristupaju korištenjem indeksa unutar kvadratnih zagrada []. Indeksiranje počinje od 0, što znači da je prvi element niza na indeksu 0, drugi na indeksu 1, itd.

22.	Navedite nekoliko primjera metoda koje se koriste za upravljanje nizovima.
lenght, push(), pop(), splice()

23.	Što su funkcije te koje su prednosti njihova korištenja?
Funkcija je blok JavaScripta koda koji izvršava neki zadatak. Prednost je što se njezin kod može ponovno upotrijebiti, jednom se definira a koristi više puta.

24.	Čemu služi ključna riječ return?
Svaka funkcija vraća vrijednost undefined, osim ako upotrijebimo ključnu riječ
return. Vraća izračunatu vrijednost iz funkcije.
U slučaju izjave return prije kraja funkcije, ostatak funkcije je ignoriran.

25.	Što predstavlja hoisting (izvlačenje)?
Hoisting je premještanje svih deklaracija na vrh trenutnog opsega
(na vrh trenutne skripte ili trenutne funkcije).

26.	Koja je razlika između globalnih i lokalnih varijabli?
Globalna je deklarirana van funkcije a lokalna je deklarirana unutar funkcije

27.	Što znači da su funkcije u JavaScript jeziku objekti prve klase?
Znači da se tretiraju kao bilo koja druga varijabla i da mogu imati vlastita svojstva i metode.

28.	Gdje sve koristimo anonimne funkcije?
Može biti izravno dodijeljena varijabli, korištena kao argument druge funkcije ili obuhvaćena zagradama.

29.	Koji je doseg funkcija (closure)?
Doseg (scope) varijabla funkcije je onaj unutar kojeg je funkcija definirana, a ne unutar kojeg je pozvana!

30.	Zašto koristimo objekte u izradi programa?
Zbog organizacije rada, ponovna iskoristivost, enkapsulacija, nasljeđivanje

31.	Koja je razlika između izravnog kreiranja objekta i upotrebe funkcije konstruktora?
	Izravno kreiranje objekta podrazumijeva definiranje objekta pomoću literala. 
Funkcija konstruktor omogućuje stvaranje više instanci objekta s istom strukturom, ali   različitim vrijednostima svojstava. 

32.	Zašto koristimo objekte u izradi programa?
Organizaciju podataka, poboljšanje čitljivosti koda, olakšavanje održavanja i omogućavanje ponovnog korištenja koda.

33.	Koja je razlika između izravnog kreiranja objekta i upotrebe funkcije konstruktora?
Izravno kreiranje objekta koristi objektnu literalu i jednostavno je za kreiranje objekata s malo svojstava i metoda, ali je manje pogodno za ponovno korištenje i nasljeđivanje.
Upotreba funkcije konstruktora koristi funkciju za kreiranje i inicijalizaciju objekata, pogodna je za kreiranje više objekata s istim svojstvima i metodama, i olakšava nasljeđivanje i proširivost.



34.	Što omogućuje nasljeđivanje?
Ponovno korištenje koda, organizaciju, proširivost, polimorfizam, enkapsulacija

35.	Što predstavlja prototip te što on omogućuje?
Predstavlja mehanizam koji omogućava objektima da naslijede svojstva i metode od drugih objekata. Omogućuje nasljeđivanje, efikasnost, proširivost.

36.	Objasnite što predstavlja Document Object Model (DOM).
Document Object Model (DOM) je programski interface za HTML i XML dokumente. Predstavlja strukturu dokumenta kao stablo objekata, gdje svaki čvor u stablu predstavlja dio dokumenta (element, atribut, tekstualni čvor, itd.).

37.	Navedite elemente od kojih se sastoji DOM stablo.
Document čvor, Element čvorovi, Atribut čvorovi, Tekstualni čvorovi, Komentar čvorovi, DocumentType čvor, ProcessingInstruction čvorovi

38.	Što predstavlja objekt document te što omogućuju njegova svojstva i metode?
Objekt document predstavlja ulaznu točku za pristup Document Object Modelu (DOM) trenutnog HTML ili XML dokumenta. Kroz objekt document, programeri mogu pristupiti i manipulirati sadržajem i strukturom web stranice.

39.	Na koje sve načine možemo dohvatiti HTML element(e)?
getElementById(id):,getElementsByClassName(className): ,getElementsByTagName(tagName) itd.

40.	Koja je razlika između kolekcije HTML elemenata i kolekcije čvorova?
HTMLCollection je specifična za HTML elemente i uvijek je živa, dok NodeList može sadržavati različite tipove čvorova i može biti statička ili živa.

41.	Koje sve operacije nad HTML elementima možemo izvršiti preko DOM-a?
Selekcija elemenata
Manipulacija sadržajem
Manipulacija stilom
Manipulacija strukturom
Manipulacija događajima

42.	Kako sve možemo promijeniti stil HTML elementa?
Inline stilovima, dodavanjem/uklanjanjem klasa, korištenjem setAttribute metodama, korištenje CSSom

43.	Što su događaji? Na koje sve načine ih možemo postaviti?
Događaji (events) su akcije ili pojave koje se događaju u dokumentu, kao što su klikovi miša, pritisci tipki, učitavanje stranice, itd. Događaji omogućuju interakciju korisnika s web stranicom.
Inline HTML atributom (<button onclick="alert('Button clicked!')">Click me</button>)
Korištenjem svojstva onevent
Korištenjem metode addEventListener itd.

44.	Što predstavlja propagacija događaja te kako se njome upravlja?
Propagacija događaja predstavlja proces prenošenja događaja kroz DOM stablo, od roditeljskog elementa do djeteta (faza zarobljavanja) i obrnuto (faza mehuška).
Upravljanje propagacijom:
Zaustavljanje propagacije:
event.stopPropagation(): Zaustavlja daljnje širenje događaja.
Zaustavljanje neposredne akcije:
event.preventDefault(): Sprječava izvršavanje podrazumijevane akcije povezane s događajem.
Faze propagacije:
event.eventPhase: Dohvaća trenutnu fazu propagacije (1 - zarobljavanje, 2 - cilj, 3 - mehušak).
Ove metode omogućavaju kontrolu nad širenjem događaja i njihovim ponašanjem u DOM stablu.

45.	Što predstavlja API?
API (Application Programming Interface) je skup pravila i protokola koji omogućuju različitim softverskim aplikacijama da međusobno komuniciraju.

46.	Što je AJAX te koje prednosti nosi njegova primjena u web razvoju?
AJAX je kombinacija XMLHttpRequest objekta ugrađenog u preglednik (za traženje podataka
s web poslužitelja) i HTML DOM-a (za prikaz ili upotrebu podataka). Prednosti su brže i dinamičnije korisničko iskustvo, smanjenje opterećenja poslužitelja, poboljšana interaktivnost, bolja korisnička iskustva.

47.	Koji tip JavaScript objekta upravlja asinkronom komunikacijom između klijenta i servera?
Tip JavaScript objekta koji upravlja asinkronom komunikacijom između klijenta i servera je XMLHttpRequest.

48.	U kojem sve formatu se mogu prenijeti podaci između klijenta i servera?
JSON, XML, HTML, plain text, CSV
5.	Koje sigurnosno ograničenje je unaprijed postavljeno u primjeni AJAX tehnologije?
Same-Origin Policy (Politika istog porijekla).

49.	Što predstavljaju obrasci u programiranju? 
Obrasci u programiranju predstavljaju provjerena rješenja za uobičajene probleme u razvoju softvera.

50.	Što je karakteristično za module obrazac?
Koristi se za kreiranje JS paketa, tj. samostalnih dijelova koda, koji se mogu dodavati,
zamijeniti, micati po volji bez opasnosti da se nešto poremeti u ostatku aplikacije/web
stranice.

51.	Koja je svrha direktive "use strict"?
Naznačiti da je kod koji slijedi strogi kod.
Strogi način rada olakšava pisanje “sigurnog” JS-a.
Strogi način rada prethodno naznačenu “lošu sintaksu” pretvara u stvarne pogreške u kodu.

52.	Koji tip varijable ćemo dobiti ako u njezinoj deklaraciji koristimo ključnu riječ let ili const?
Kada koristimo ključne riječi let ili const za deklaraciju varijable u JavaScriptu, dobivamo blok-scope varijable. To znači da su te varijable dostupne samo unutar bloka koda u kojem su definirane (npr. unutar {}).

53.	Što će se ispisati u konzoli?
1.	var iznos = 1000;
2.	var poruka = `Iznos računa: ${iznos}$`;
3.	console.log(poruka);
Iznos računa: 1000$

54.	Što omogućuju operatori "Spread" i "Rest"?
Omogućuju rad s nizovima i objektima na fleksibilan način.
Spread - omogućuje širenje elemenata niza ili svojstava objekta. Koristi se za kopiranje, kombiniranje ili proširivanje nizova i objekata.
Rest - omogućuje grupiranje preostalih elemenata niza ili svojstava objekta u jedan niz ili objekt. Koristi se za funkcijske parametre i destrukturiranje.

55.	Što omogućuju Arrow funkcije?
Omogućuju kraću sintaksu za definiranje funkcija
(bez zagrada, ključnih riječi function i return, ili kombinaciji).
56.	Kod upotrebe klasa u JavaScript jeziku što predstavlja metoda constructor? Pomoću koje ključne riječi implementiramo nasljeđivanje?
Metoda constructor u JavaScript klasi koristi se za inicijalizaciju objekta prilikom stvaranja instance te klase.
Nasljeđivanje se implementira pomoću ključne riječi extends.

