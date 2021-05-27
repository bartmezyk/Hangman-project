window.onload=start;


var litery = new Array(35);
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ż";
litery[34]="Ź";

var pomocniczne_litery = new Array(35); //potrzebne do liczenia punktów w przypadku gdy gracz wpisał odgadywane hasło (aby nie liczyć kilkukrotnie punktów gdy litera powtarza się w haśle - jedynie raz)


var ilosc_kategorii=8;
var ilosc_hasel_w_kat = new Array(ilosc_kategorii); //ilość haseł w poszczególnych kategoriach (trzeba podawać na sztywno)
ilosc_hasel_w_kat[0]=30;
ilosc_hasel_w_kat[1]=44;
ilosc_hasel_w_kat[2]=27;
ilosc_hasel_w_kat[3]=17;
ilosc_hasel_w_kat[4]=13;
ilosc_hasel_w_kat[5]=29;
ilosc_hasel_w_kat[6]=28;
ilosc_hasel_w_kat[7]=24;

var wszystkich_hasel=0; //poniżej sumuje się ilość wszystkich haseł
var hasla = new Array(ilosc_kategorii); //tablica z hasłami
var wystapien_hasel_w_kat = new Array(ilosc_kategorii); //ile razy w danej kategorii wystąpiły już hasła (liczbowo)
var dostepnosc_has = new Array(ilosc_kategorii); //czy dane hasło zostało już przerobione 
var dostepnosc_kat = new Array(ilosc_kategorii); //czy są jeszcze jakieś hasła w kategorii
var zaznaczenie_kategorii = new Array(ilosc_kategorii); //czy dana kategoria jest zaznaczona

for(i=0; i<ilosc_kategorii; i++)
{
	wszystkich_hasel+=ilosc_hasel_w_kat[i]; //sumowanie ilości wszystkich haseł
	hasla[i] = new Array(ilosc_hasel_w_kat[i]);
	wystapien_hasel_w_kat[i]=0;
	
	dostepnosc_has[i] = new Array(ilosc_hasel_w_kat[i]);
	for (j=0; j < ilosc_hasel_w_kat[i]; j++) 
	{
		dostepnosc_has[i][j]=true;
	}	
	
	dostepnosc_kat[i]=true;
	zaznaczenie_kategorii[i]=true;
}

var kategorie = new Array(ilosc_kategorii); //tablica z kategoriami
kategorie[0]="Kitchen";
kategorie[1]="Human Body";
kategorie[2]="Fruit";
kategorie[3]="Soft drinks";
kategorie[4]="Alcoholic drinks";
kategorie[5]="Bathroom";
kategorie[6]="GTA SA";
kategorie[7]="Vegetables";

//kuchnia
hasla[0][0]="table";
hasla[0][1]="cooker";
hasla[0][2]="fridge";
hasla[0][3]="cabinet";
hasla[0][4]="dishwasher";
hasla[0][5]="kettle";
hasla[0][6]="microwave";
hasla[0][7]="tablecloth";
hasla[0][8]="flyswatter";
hasla[0][9]="oven";
hasla[0][10]="plate";
hasla[0][11]="fork";
hasla[0][12]="spoon";
hasla[0][13]="knife";
hasla[0][14]="bread bin";
hasla[0][15]="tap";
hasla[0][16]="sink";
hasla[0][17]="cup";
hasla[0][18]="mug";
hasla[0][19]="glass";
hasla[0][20]="freezer";
hasla[0][21]="dish";
hasla[0][22]="curtain";
hasla[0][23]="drawer";
hasla[0][24]="stool";
hasla[0][25]="bin";
hasla[0][26]="trencher"; //deska do krojenia
hasla[0][27]="tea cloth"; //ścierka do naczyń
hasla[0][28]="hood"; //okap (nad kuchenką)
hasla[0][29]="cutter"; //krajalnica

//ciało człowieka
hasla[1][0]="face";
hasla[1][1]="head";
hasla[1][2]="arm";
hasla[1][3]="leg";
hasla[1][4]="foot";
hasla[1][5]="hand";
hasla[1][6]="finger";
hasla[1][7]="toe";
hasla[1][8]="stomach";
hasla[1][9]="tummy";
hasla[1][10]="chest";
hasla[1][11]="shoulder";
hasla[1][12]="hair";
hasla[1][13]="eye";
hasla[1][14]="ear";
hasla[1][15]="nose";
hasla[1][16]="thumb";
hasla[1][17]="thigh";
hasla[1][18]="knee";
hasla[1][19]="ankle";
hasla[1][20]="ankle";
hasla[1][21]="nail";
hasla[1][22]="toenail";
hasla[1][23]="elbow";
hasla[1][24]="mouth";
hasla[1][25]="back";
hasla[1][26]="heart";
hasla[1][27]="moustache";
hasla[1][28]="beard";
hasla[1][29]="neck";
hasla[1][30]="wrist"; //nadgarstek
hasla[1][31]="lung"; //płuco
hasla[1][32]="rib"; //żebro
hasla[1][33]="calf"; //łydka
hasla[1][34]="heel"; //pięta
hasla[1][35]="hip"; //biodro
hasla[1][36]="spine"; //kręgosłup
hasla[1][37]="forehead"; //czoło
hasla[1][38]="chin"; //podbródek
hasla[1][39]="cheek"; //policzek
hasla[1][40]="eyebrow"; //brew
hasla[1][41]="eyelid"; //powieka
hasla[1][42]="eyelash"; //rzęsa
hasla[1][43]="liver"; //wątroba

//owoce
hasla[2][0]="apple";
hasla[2][1]="orange";
hasla[2][2]="banana";
hasla[2][3]="plum";
hasla[2][4]="pear";
hasla[2][5]="strawberry";
hasla[2][6]="raspberry";
hasla[2][7]="gooseberry";
hasla[2][8]="walnut";
hasla[2][9]="hazelnut";
hasla[2][10]="watermelon";
hasla[2][11]="pineapple";
hasla[2][12]="peach";
hasla[2][13]="cherry";
hasla[2][14]="lemon";
hasla[2][15]="grapefruit";
hasla[2][16]="mango";
hasla[2][17]="avocado";
hasla[2][18]="whortleberry"; //borówka
hasla[2][19]="apricot"; //morela
hasla[2][20]="lime"; //limonka
hasla[2][21]="pomegranate"; //granat
hasla[2][22]="tangerine"; //mandarynka
hasla[2][23]="blackcurrant"; //czarna porzeczka
hasla[2][24]="redcurrant"; //czerwona porzeczka
hasla[2][25]="cranberry"; //żurawina
hasla[2][26]="wild strawberry"; //poziomka

//napoje bezalkoholowe
hasla[3][0]="water";
hasla[3][1]="juice";
hasla[3][2]="coke";
hasla[3][3]="tea";
hasla[3][4]="coffee";
hasla[3][5]="cocoa";
hasla[3][6]="energy drink";
hasla[3][7]="nectar";
hasla[3][8]="syrup";
hasla[3][9]="isotonic drink";
hasla[3][10]="sparkling drink";
hasla[3][11]="cocktail";
hasla[3][12]="lemonade";
hasla[3][13]="milk";
hasla[3][14]="hot chocolate";
hasla[3][15]="compote";
hasla[3][16]="orangeade";

//napoje alkoholowe
hasla[4][0]="beer";
hasla[4][1]="wine";
hasla[4][2]="vodka";
hasla[4][3]="whisky";
hasla[4][4]="liqueur";
hasla[4][5]="brandy"; //koniak
hasla[4][6]="cider"; //cydr
hasla[4][7]="gin";
hasla[4][8]="rum";
hasla[4][9]="spirit"; //spirytus
hasla[4][10]="champagne";
hasla[4][11]="plum brandy"; //śliwowica
hasla[4][12]="tequila";

//łazienka
hasla[5][0]="bath";
hasla[5][1]="washbasin";
hasla[5][2]="toilet";
hasla[5][3]="shower";
hasla[5][4]="hair clipper";
hasla[5][5]="mirror";
hasla[5][6]="soap";
hasla[5][7]="liquid soap";
hasla[5][8]="toothpaste";
hasla[5][9]="toothbrush";
hasla[5][10]="razor";
hasla[5][11]="shaving gel";
hasla[5][12]="shampoo";
hasla[5][13]="washing machine";
hasla[5][14]="floorcloth";
hasla[5][15]="washing powder";
hasla[5][16]="rag";
hasla[5][17]="laundry basket";
hasla[5][18]="washing"; //pranie (brudnie ubrania)
hasla[5][19]="soap dish"; //mydelniczka
hasla[5][20]="sponge"; //gąbka
hasla[5][21]="towel";
hasla[5][22]="comb"; //grzebień
hasla[5][23]="shower gel"; 
hasla[5][24]="washing liquid"; //płyn do prania
hasla[5][25]="pyjamas";
hasla[5][26]="cream";
hasla[5][27]="mouthwash"; //płyn do płukania jamy ustnej
hasla[5][28]="nail scissors"; //nożyczki do paznokci

//GTA San Andreas
hasla[6][0]="get outta here, you greaseball bastard!";
hasla[6][1]="this is drug money.";
hasla[6][2]="ease up, man. damn.";
hasla[6][3]="you picked the wrong house, fool!";
hasla[6][4]="big smoke! it's me, carl! chill, chill!";
hasla[6][5]="you wanna drive?";
hasla[6][6]="yeah, that's cool. nice car, smoke.";
hasla[6][7]="this shit's real fucked up. everything!";
hasla[6][8]="ballas! drive by! incoming!";
hasla[6][9]="shit! a ballas car is onto us! split up!";
hasla[6][10]="keep up, motherfucker!";
hasla[6][11]="ryder, nigga!";
hasla[6][12]="shit! i told you he was crazy!";
hasla[6][13]="man, what's this? shit looks ridiculous.";
hasla[6][14]="you're looking too skinny, cj.";
hasla[6][15]="give up the money! this a raid!";
hasla[6][16]="ryder! not this again!";
hasla[6][17]="it ain't me, fool.";
hasla[6][18]="shit, you crazy! let's get up outta here!";
hasla[6][19]="same old cj! busta, straight busta!";
hasla[6][20]="yeah, for sure.";
hasla[6][21]=" cj? what the fuck you want?";
hasla[6][22]="gimme a number 9, just like his.";
hasla[6][23]="nice hopping, holmes.";
hasla[6][24]="i'll take that paper.";
hasla[6][25]="get out the car!";
hasla[6][26]="ah shit, here we go again.";
hasla[6][27]="cj, oh my dog! whassup?";

//warzywa
hasla[7][0]="cucumber";
hasla[7][1]="potato";
hasla[7][2]="tomato";
hasla[7][3]="carrot";
hasla[7][4]="parsley"; //pietruszka
hasla[7][5]="cabbage";
hasla[7][6]="lettuce";
hasla[7][7]="spinach";
hasla[7][8]="broccoli";
hasla[7][9]="pea"; //groch
hasla[7][10]="asparagus";
hasla[7][11]="cauliflower"; //kalafior
hasla[7][12]="garlic";
hasla[7][13]="onion";
hasla[7][14]="beetroot";
hasla[7][15]="chives"; //szczypiorek
hasla[7][16]="celery"; //seler
hasla[7][17]="radish"; //rzodkiewka
hasla[7][18]="pumpkin";
hasla[7][19]="broad bean"; //bób
hasla[7][20]="bean"; //fasola
hasla[7][21]="rhubarb";
hasla[7][22]="sweetcorn";
hasla[7][23]="pepper";


var haslo;
var kategoria;
var zakryte_haslo;
var długosc_hasla; //potrzebna np. do sprawdzenia czy kliknięta literka występuje w zakrytym haśle 
var wynik=0; //wynik całkowity
var wynik_runda; //wynik w pojedynczej rundzie (potrzebne, aby poprawnie policzyć punkty gdy gracz np. kilka razy klikał w litery, a później wpisał hasło ręcznie)
var ilosc_skuch; //w zależności od ilości skuch wyświetla się odpowiedni obrazek 
var pozostalo_hasel; //wyświetla się lewym górnym rogu planszy jako ilość pozostałych aktywnych haseł zaznaczonych kategorii
var pozostalych_rzeczywistych_hasel; //wyświetla się lewym górnym rogu planszy jako ilość pozostałych aktywnych haseł zaznaczonych kategorii

var kat; //potrzebne, żeby po wylosowaniu kategorii i hasła dało się...
var has; //...w werdykcie zmienić odpowiednie hasło i kategorię na nieaktywne
var stan_has_i_kat; //potrzebne, żeby zmienił stan hasła na nieaktywne oraz stan kategorii (jeśli nie ma w niej więcej niewylosowanych haseł) na nieaktywną tylko w przypadku dojścia do podsumowania rozgrywki (bo np. po wylosowaniu hasła gracz może np. przejść do opcji wpisania hasła dla przeciwnika i wtedy tamto wylosowane hasło ma być nadal aktywne - nie doszło do podsumowania rozgrywki)
var napisano_haslo=false; //potrzebne do dezaktywowania czerwonego przycisku, gdy dochodzi do werdyktu, ale tylko w przypadku odgadywania hasła z puli haseł
var pierwsze_uruchomienie=true; //potrzebne do pracy zegara (tylko w czasie pierwszego uruchomienia strony lub jej odświeżenia zegar ma być uruchamiany)
var kliknieto_przycisk=true; //żeby nie blokować checkboxów i lewego górnego prostokąta do wpisywania hasła i kategorii dla przeciwnika za każdym razem po kliknięciu jakiejś litery, jedynie gdy gracz pierwszy raz kliknie w jakąś literę
var kolor_strony="czerwony"; //kolor strony czerwony gdy hasła losowane są z puli haseł; fioletowy gdy gracz wpisze hasło dla przeciwnika

var dzwiek=true; //rozne dzwieki odtwarzane w trakcie rozgrywki
var tak = new Audio("snd/tak.wav");
var nie = new Audio("snd/nie.wav");
var wygrana = new Audio("snd/wygrana.wav");
var przegrana = new Audio("snd/przegrana.wav");
var zaladuj = new Audio("snd/zaladuj.wav");
var skasuj = new Audio("snd/skasuj.wav");	
var zmien_h = new Audio("snd/zmien_h.wav");	
var checkbox = new Audio("snd/checkbox.wav");	


function start()
{
	if(pierwsze_uruchomienie=true) //tylko w czasie pierwszego uruchomienia strony lub jej odświeżania zegar ma być uruchamiany
	{
		zegar();
		pierwsze_uruchomienie=false;
	}
	
	wynik_runda=0;
	ilosc_skuch=0;
	stan_has_i_kat=false;
	
	zaladuj_divy(); //ładuje divy z obrazkiem wisielca, alfabet, pole tekstowe i przycisk do odgadywania hasła oraz żółty przycisk zmiany hasła
	jedna_zaznaczona_jedno_haslo();
		
	odswiez_wynik(); //aktualizuje wynik (z dopisaniem odpowiedniej ilości zer)
	losowanie(); //losuje hasło jeśli spełnione są odpowiednie warunki
}

function jedna_zaznaczona_jedno_haslo() //sprawdza czy tylko jedna kategoria jest zaznaczona i czy jest w nim tylko 1 hasło (potrzebne, żeby żółty przycisk znikał gdy jest tylko 1 pozostałe hasło)
{
	var zaznaczonych_kat=0; //ile kategorii jest zaznaczonych
	var dostepnych_has=0; //ile haseł jest dostępnych
	var kateg; //numer kategorii, która jako jedyna jest zaznaczona
	
	for(i=0; i<ilosc_kategorii; i++) //liczy, ile kategorii jest zaznaczonych
	{
		if(zaznaczenie_kategorii[i]==true) 
		{
			zaznaczonych_kat++;
			kateg=i;
		}
	}
	
	if(zaznaczonych_kat==1) //w przypadku, gdy tylko jedna kategoria jest zaznaczona
	{
		for(j=0; j<ilosc_hasel_w_kat[kateg]; j++)
		{
			if(dostepnosc_has[kateg][j]==true) dostepnych_has++;
		}
		
		if(dostepnych_has==1) znika_zolty_przycisk(); //w przypadku, gdy w tej jednej kategorii tylko jedno hasło jest aktywne
	}
}

function zaladuj_divy() //ładuje divy z obrazkiem wisielca, alfabet, pole tekstowe i przycisk do odgadywania hasła oraz żółty przycisk zmiany hasła
{
	var zawartosc_diva =""; //zmienna, do której załaduje litery i prześle do diva alfabet w HTML
	for(i=0;i<=34;i++) //tworzy 35 div'ów z literami alfabetu
	{
		var item="lit"+i; //indywidualne id diva litera
		zawartosc_diva+='<div class="letter" onclick="sprawdz('+i+')" id="'+item+'">'+litery[i]+'</div>'; //do litery dodaje onclick, który sprawdza wystąpienie litery w haśle
		if((i+1)%7==0) zawartosc_diva+='<div style="clear: both;"></div>' //przejście do nowej linii co 7 liter
	}
	document.getElementById("alphabet").innerHTML = zawartosc_diva; //załadowanie liter do diva alfabet
	document.getElementById("alphabet").style.backgroundColor =""; //wykasowanie stylów diva alfabet
	document.getElementById("alphabet").style.color="";
	document.getElementById("alphabet").style.opacity="";
	
	var text_onfocus="this.placeholder=''"; //prostokąt do zgadywania hasła
	var text_onblur="this.placeholder='Podaj_hasło'";
	document.getElementById("guess_rectangle").innerHTML='<div id="left_square"></div><div id="guess"></div><div id="change_clue" onclick="zmien_haslo()"><div id="change_clue_text">Zmień<br/>hasło</div></div><div style="clear: both"></div>';
	document.getElementById("guess").innerHTML='<input maxlength="40" id="clue_text" type="text" placeholder="Podaj_hasło" onfocus='+text_onfocus+' onblur='+text_onblur+' /><input id="button" type="submit" onclick="zgadnij_haslo()" value="Zgaduję!" />'; //załadowanie pola do wpisywania odgadnionego hasła oraz przycisku
	
	if(kolor_strony=="czerwony") document.getElementById("gallows").innerHTML='<img src="img/g0.bmp" alt=""/>'; //załadowanie pierwszego obrazka (wersja czerwona)
	else document.getElementById("gallows").innerHTML='<img src="img/g0v.bmp" alt=""/>'; //załadowanie pierwszego obrazka (wersja fioletowa)
}

function sprawdz(x) //sprawdza proces gry po kliknięciu w literę x
{
	if(kliknieto_przycisk==true)
	{
		zablokuj_odblokuj_checkboxy(true); //blokuje checkboxy
		zablokuj_p1(); //blokuje lewy górny prostokąt (do wpisywania hasła i kategorii dla przeciwnika)
		znika_zolty_przycisk();

		kliknieto_przycisk=false;
	}
	
	if(napisano_haslo==false)
	{
		document.getElementById("write_cancel_submit").style.color="#c5c6c9"; //zmiana wyglądu czerwonego przycisku cancel na szary
		document.getElementById("write_cancel_submit").style.backgroundColor="#96989b";
		document.getElementById("write_cancel_submit").style.cursor="default";
		document.getElementById("write_cancel_submit").style.border="2px solid #96989b";
		document.getElementById("write_cancel_submit").setAttribute("onclick",";");
		document.getElementById("write_cancel_submit").setAttribute("onmouseover",";");
		document.getElementById("write_cancel_submit").setAttribute("onmouseout",";");
	}
	
	var trafiony=false; //trafiona litera
	
	for(i=0; i<długosc_hasla; i++) //sprawdza wystąpienie klikniętej litery w zakrytym haśle i odkrywa ją w odpowiednich miejscach
	{
		if(haslo.charAt(i)==litery[x])
		{
			zakryte_haslo=zakryte_haslo.ustawZnak(i,litery[x]);
			trafiony=true;
		}
	}
	
	if(trafiony==true) //co ma się dziać w przypadku trafienia litery
	{
		if(haslo!=zakryte_haslo) tak.play(); //żeby nie grało dźwięku kliknięcia gdy hasło jest odgadnione (wtedy jest inny dźwięk - wygrana.wav)

		var item="lit" + x;
		document.getElementById(item).style.background="#003300"; //zmienia wygląd litery
		document.getElementById(item).style.color="#00c000";
		document.getElementById(item).style.border="3px solid #00c000";
		
		pokaz_haslo();
		
		if(napisano_haslo!=true) wynik_runda+=50;
	}
	else //co ma się dziać, gdy nie trafiliśmy litery
	{
		if(ilosc_skuch<8) nie.play(); //żeby nie grało dźwięku kliknięcia gdy hasło jest odgadnione (wtedy jest inny dźwięk - przegrana.wav)
		ilosc_skuch++;
		
		var item="lit" + x;
		document.getElementById(item).style.background="#330000"; //zmienia wygląd litery
		document.getElementById(item).style.color="#c04444";
		document.getElementById(item).style.border="3px solid #c04444";
			
		if(kolor_strony=="czerwony") //ładuje obrazek odpowiedniego koloru w zależności czy hasło jest z puli haseł czy zostało wpisane przez gracza
		{
			var picture="img/g"+ilosc_skuch+".bmp";
			document.getElementById("gallows").innerHTML='<img src="'+picture+'" alt=""/>' //podmiana obrazka na kolejny (w wersji czerwonej)
		}
		else
		{
			var picture="img/g"+ilosc_skuch+"v.bmp";
			document.getElementById("gallows").innerHTML='<img src="'+picture+'" alt=""/>' //podmiana obrazka na kolejny (w wersji fioletowej)
		}
		
		if(napisano_haslo!=true)
		{
			if(ilosc_skuch==7) wynik_runda-=25; //za przedostatnią skuchę odejmuje dodatkowo -25, natomiast za ostatnią dodatkowo -75
			else if(ilosc_skuch==8) wynik_runda-=75;
			
			wynik_runda-=50;
		}
	}
	
	odswiez_wynik();
	
	document.getElementById(item).style.cursor="default"; //kursor - zwykły
	document.getElementById(item).setAttribute("onclick",";"); //nie da się kliknąć w literę
	document.getElementById(item).style.transform="scale(1.0)"; //litera nie zwiększa się
	
	werdykt(); //sprawdzenie czy nie nastąpił koniec rozgrywki
}

function zablokuj_odblokuj_checkboxy(b) //blokuje lub odblokowuje checkboxy
{
	for(i=0; i<ilosc_kategorii; i++)
	{
		if(wystapien_hasel_w_kat[i]!=ilosc_hasel_w_kat[i]) //sprawdzenie, czy checkbox nie jest zablokowany na stałe (przez to że nie ma więcej haseł w danej kategorii)
		{
			var x="check"+i;
			var y="c"+i;
			if(b==false) //odblokowuje checkboxy
			{	
				var z=i;
				document.getElementById(x).disabled=false;
				document.getElementById(x).style.cursor="pointer";
				document.getElementById(y).setAttribute("onclick","zmien_dostepnosc_kategorii("+z+")");
				document.getElementById(y).style.cursor="pointer";
				document.getElementById(y).setAttribute("onmouseover","checkbox_po_najechaniu("+z+")");	
				document.getElementById(y).setAttribute("onmouseout","checkbox_po_zjechaniu("+z+")");	
				document.getElementById(y).style.color="#ffffff";				
			}
			else //blokuje checkboxy
			{	
				document.getElementById(x).disabled=true;
				document.getElementById(x).style.cursor="default";
				document.getElementById(y).setAttribute("onclick",";");
				document.getElementById(y).style.cursor="default";
				document.getElementById(y).setAttribute("onmouseover",";");
				document.getElementById(y).setAttribute("onmouseout",";");
				document.getElementById(y).style.color="#5e605f";
			}
		}
	}
}

function zablokuj_p1() //blokuje lewy górny prostokąt (do wpisywania hasła i kategorii dla przeciwnika)
{	
	document.getElementById("napis_wpisz_kategorie").style.color="#96989b"; //zmiana koloru czcionki napisu nad polami do wpisywania hasła i kategorii dla przeciwnika na szary

	document.getElementById("write_ok_submit").style.color="#c5c6c9"; //zmiana wyglądu zielonego przycisku 'ok' na szary
	document.getElementById("write_ok_submit").style.backgroundColor="#96989b";
	document.getElementById("write_ok_submit").style.cursor="default";
	document.getElementById("write_ok_submit").style.border="2px solid #96989b";
	document.getElementById("write_ok_submit").setAttribute("onmouseover",";");
	document.getElementById("write_ok_submit").setAttribute("onmouseout",";");
		
	document.getElementById("write_cancel_submit").style.color="#ffffff"; //zmiana wyglądu szarego przycisku 'cancel' na czerwony
	document.getElementById("write_cancel_submit").style.backgroundColor="#c41313";
	document.getElementById("write_cancel_submit").style.cursor="pointer";
	document.getElementById("write_cancel_submit").style.border="2px solid #9b0909";
	document.getElementById("write_cancel_submit").setAttribute("onmouseover","czerw_przyc_po_najechaniu()");
	document.getElementById("write_cancel_submit").setAttribute("onmouseout","czerw_przyc_po_zjechaniu()");
		
	document.getElementById("write_clue_text").disabled=true; //zablokowanie pola tekstowego
	document.getElementById("write_clue_text").value=""; //zmiana wyglądu pola tekstowego do wpisywania hasła + skasowanie tego co było
	document.getElementById("write_clue_text").setAttribute("placeholder","");
	document.getElementById("write_clue_text").setAttribute("onfocus","this.placeholder=''");
	document.getElementById("write_clue_text").setAttribute("onblur","this.placeholder=''");
		
	document.getElementById("write_category_text").disabled=true; //zablokowanie pola tekstowego
	document.getElementById("write_category_text").value=""; //zmiana wyglądu pola tekstowego do wpisywania kategorii + skasowanie tego co było 
	document.getElementById("write_category_text").setAttribute("placeholder","");
	document.getElementById("write_category_text").setAttribute("onfocus","this.placeholder=''");
	document.getElementById("write_category_text").setAttribute("onblur","this.placeholder=''");
		
	document.getElementById("write_ok_submit").setAttribute("onclick",";"); //odpowienie ustawienie onclicków
	document.getElementById("write_cancel_submit").setAttribute("onclick","zaladuj_ponownie()");
}

String.prototype.ustawZnak = function(miejsce, znak) //do klasy String dodaje nową funkcję - będzie ona podmieniała odgadnioną literę w zakrytym haśle
{
	if(miejsce>this.length+1) return this.toString();
	else return this.substr(0,miejsce) +znak+ this.substr(miejsce+1); //substr(od jakiego znaku wyjąć, do jakiego znaku wyjmować)
}

function pokaz_haslo()
{
	document.getElementById("board").innerHTML=zakryte_haslo;
}

function werdykt() //sprawdzenie czy nie nastąpił koniec rozgrywki (czy wszystkie litery zostały odgadnione)
{
	//wygrana
	if(haslo==zakryte_haslo)
	{
		wygrana.play();
		
		aktualizuj_has_i_kat();
		
		zablokuj_pusta_kategorie();
		
		document.getElementById("alphabet").style.backgroundColor="#18b228"; //dodanie zielonej podkładki pod napisy kończące daną rundę
		document.getElementById("alphabet").style.opacity="0.8";
		document.getElementById("alphabet").style.color="#ffffff";
		document.getElementById("alphabet").innerHTML='<span id="clue"><br/>Udało się! Podano prawidłowe hasło:<br/>'+haslo+'</span><div id="reset" onclick="reset()">JESZCZE RAZ?</div>';

		document.getElementById("write_ok_submit").style.color="#c5c6c9"; //zmiana wyglądu zielonego przycisku ok na szary
		document.getElementById("write_ok_submit").style.backgroundColor="#96989b";
		document.getElementById("write_ok_submit").style.cursor="default";
		document.getElementById("write_ok_submit").style.border="2px solid #96989b";
		document.getElementById("write_clue_text").setAttribute("placeholder",""); //usunięcie placeholderów
		document.getElementById("write_category_text").setAttribute("placeholder","");
		document.getElementById("write_clue_text").disabled=true; //zablokowanie pól tekstowych
		document.getElementById("write_category_text").disabled=true;
		
		document.getElementById("write_ok_submit").setAttribute("onclick","");
		zablokuj_odblokuj_checkboxy(true); //blokuje checkboxy
		
		if(napisano_haslo!=true)
		{
			if(ilosc_skuch==0) wynik+=75; //za wygraną bez żadnej skuchy dodaje dodatkowo +75, natomiast za wygraną z jedną skuchą dodaje dodatkowo +25
			else if(ilosc_skuch==1) wynik+=25;
			
			odswiez_wynik();
		}
		
		usun_pole_zgadywania();
	}
	
	//przegrana
	else if(ilosc_skuch>=8)
	{
		przegrana.play();
		
		aktualizuj_has_i_kat();
		
		zablokuj_pusta_kategorie();
		
		document.getElementById("alphabet").style.backgroundColor="#db1e1e"; //dodanie czerwonej podkładki pod napisy kończące daną rundę
		document.getElementById("alphabet").style.opacity="0.8";
		document.getElementById("alphabet").style.color="#ffffff";
		document.getElementById("alphabet").innerHTML='<span id="clue"><br/>CJ powieszony! Prawidłowe hasło:<br/>'+haslo+'</span><div id="reset" onclick="reset()">JESZCZE RAZ?</div>';
		
		document.getElementById("write_ok_submit").style.color="#c5c6c9"; //zmiana wyglądu zielonego przycisku ok na szary
		document.getElementById("write_ok_submit").style.backgroundColor="#96989b";
		document.getElementById("write_ok_submit").style.cursor="default";
		document.getElementById("write_ok_submit").style.border="2px solid #96989b";
		document.getElementById("write_clue_text").setAttribute("placeholder",""); //usunięcie placeholderów
		document.getElementById("write_category_text").setAttribute("placeholder","");
		document.getElementById("write_clue_text").disabled=true; //zablokowanie pól tekstowych
		document.getElementById("write_category_text").disabled=true; 
		
		document.getElementById("write_ok_submit").setAttribute("onclick","");
		zablokuj_odblokuj_checkboxy(true); //blokuje checkboxy
		
		usun_pole_zgadywania();
	}
}

function zgadnij_haslo() //sprawdza, czy gracz zgadł hasło wpisując w pole tekstowe
{
	var x=document.getElementById("clue_text").value;
	var dlugosc_x=x.length;
	
	x=x.toUpperCase();
	
	var y=x;
	for(i=0;i<dlugosc_x;i++) //żeby pokazał spacje w postaci podłogi "_" we wpisanym haśle
	{
		if(y.charAt(i)==" ") y=y.ustawZnak(i,"_");
	}
	
	if(x==haslo) //jeśli wpisane hasło pokrywa się z prawdziwym
	{
		if(napisano_haslo!=true) //cała procedura zliczania punktów rundy za wszystkie pojedynczo wystąpione litery w haśle, które gracz podał oraz za dotychczasowe skuchy w danej rundzie
		{
			for(i=0; i<35; i++) //zapełnianie pomocniczej tablicy literami
			{
				pomocniczne_litery[i]=litery[i];
			}
			
			wynik_runda=0;
			for(i=0; i<dlugosc_x; i++) //sumuje zdobyte punkty za każdą literę w odgadnionym haśle 
			{
				for(j=0; j<35; j++)
				{
					if((x.charAt(i)==litery[j])&&(pomocniczne_litery[j]!=""))
					{
						wynik_runda+=50;
						pomocniczne_litery[j]=""; //usuwa literę z pomocniczej tablicy, aby nie liczyć kilkukrotnie punktów gdy litera powtarza się w haśle - jedynie raz
					}
				}
			}
			wynik_runda=wynik_runda-(ilosc_skuch*50); //odejmuje punkty za ilość popełnionych skuch
			
			if(ilosc_skuch==0) wynik_runda+=75;//za wygraną bez żadnej skuchy dodaje dodatkowo +75, natomiast za wygraną z jedną skuchą dodaje dodatkowo +25
			else if(ilosc_skuch==1) wynik_runda+=25;
			
			wynik+=wynik_runda;
			wynik_runda=0;
			
			odswiez_wynik();
		}
		
		wygrana.play();
		
		aktualizuj_has_i_kat();
		
		zablokuj_pusta_kategorie();
		
		document.getElementById("alphabet").style.backgroundColor="#18b228"; //dodanie zielonej podkładki pod napisy kończące daną rundę
		document.getElementById("alphabet").style.opacity="0.8";
		document.getElementById("alphabet").style.color="#ffffff";
		document.getElementById("alphabet").innerHTML='<span id="clue"><br/>Nieźle! Podano prawidłowe hasło:<br/>'+haslo+'</span><div id="reset" onclick="reset()">JESZCZE RAZ?</div>';
		
		document.getElementById("write_ok_submit").setAttribute("onmouseover",";");
		document.getElementById("write_ok_submit").setAttribute("onmouseout",";");		
		document.getElementById("write_ok_submit").style.color="#c5c6c9"; //zmiana wyglądu zielonego przycisku ok na szary
		document.getElementById("write_ok_submit").style.backgroundColor="#96989b";
		document.getElementById("write_ok_submit").style.cursor="default";
		document.getElementById("write_ok_submit").style.border="2px solid #96989b";
		document.getElementById("write_clue_text").setAttribute("placeholder",""); //usunięcie placeholderów
		document.getElementById("write_category_text").setAttribute("placeholder","");
		document.getElementById("write_clue_text").disabled=true; //zablokowanie pól tekstowych
		document.getElementById("write_category_text").disabled=true;
		
		document.getElementById("write_ok_submit").setAttribute("onclick",";");
		zablokuj_odblokuj_checkboxy(true); //blokuję checkboxy
	}
	else
	{
		przegrana.play();
		
		if(napisano_haslo!=true)
		{
			wynik+=(wynik_runda-75); //odejmuje 75 punktów od wyniku z rundy za źle wpisane hasło
			wynik_runda=0;

			odswiez_wynik();
		}
		aktualizuj_has_i_kat();
		
		zablokuj_pusta_kategorie();
		
		document.getElementById("alphabet").style.backgroundColor="#db1e1e"; //dodanie czerwonej podkładki pod napisy kończące daną rundę
		document.getElementById("alphabet").style.opacity="0.8";
		document.getElementById("alphabet").style.color="#ffffff";
		document.getElementById("alphabet").innerHTML='<span id="clue"><br/>Niestety! Napisałeś:<br/>'+y+'<br/>Prawidłowe hasło:<br/></span>'+haslo+'<div id="reset2" onclick="reset()">JESZCZE RAZ?</div>';

		document.getElementById("write_ok_submit").style.color="#c5c6c9"; //zmiana wyglądu zielonego przycisku ok na szary
		document.getElementById("write_ok_submit").style.backgroundColor="#96989b";
		document.getElementById("write_ok_submit").style.cursor="default";
		document.getElementById("write_ok_submit").style.border="2px solid #96989b";
		document.getElementById("write_clue_text").setAttribute("placeholder",""); //usunięcie placeholderów
		document.getElementById("write_category_text").setAttribute("placeholder","");
		document.getElementById("write_clue_text").disabled=true; //zablokowanie pól tekstowych
		document.getElementById("write_category_text").disabled=true;
		
		document.getElementById("write_ok_submit").setAttribute("onclick","");
		zablokuj_odblokuj_checkboxy(true); //blokuję checkboxy
	}
	
	usun_pole_zgadywania();
}

function usun_pole_zgadywania() //usuwa pole tekstowe i przycisk do zgadywania haseł w czasie podsumowania rundy oraz utrzymuje odpowiednią odległość pomiędzy divami (aby calość nie przesunęła się gdy pole i przycisk znikają)
{
	document.getElementById("guess_rectangle").innerHTML="";
	document.getElementById("guess_rectangle").style.height="57px";
}

function odswiez_wynik() //aktualizuje wynik (z dopisaniem odpowiedniej ilości zer)
{
	if(napisano_haslo!=true)
	{
		var y=wynik+wynik_runda;
		var wynik_napis;
		
		if((y<10)&&(y>=0)) wynik_napis="Wynik: +00000"+y;
		else if((y<100)&&(y>=0)) wynik_napis="Wynik: +0000"+y;
		else if((y<1000)&&(y>=0)) wynik_napis="Wynik: +000"+y;
		else if((y<10000)&&(y>=0)) wynik_napis="Wynik: +00"+y;
		else if((y<100000)&&(y>=0)) wynik_napis="Wynik: +0"+y;
		else if((y<1000000)&&(y>=0)) wynik_napis="Wynik: +"+y;
		
		else if(y<0)
		{
			y=y*(-1);
			if((y<10)&&(y>=0)) wynik_napis="Wynik: -00000"+y;
			else if((y<100)&&(y>=0)) wynik_napis="Wynik: -0000"+y;
			else if((y<1000)&&(y>=0)) wynik_napis="Wynik: -000"+y;
			else if((y<10000)&&(y>=0)) wynik_napis="Wynik: -00"+y;
			else if((y<100000)&&(y>=0)) wynik_napis="Wynik: -0"+y;
			else if((y<1000000)&&(y>=0)) wynik_napis="Wynik: -"+y;
		}
		
		document.getElementById("score").innerHTML=wynik_napis;
	}
}

function aktualizuj_has_i_kat() //potrzebne, żeby aktualizował stan haseł i kategorii (które są już zablokowane) tylko jeśli nastąpiło wylosowanie hasła oraz doszło do werdykt() lub zgadnij_haslo()
{
	if(stan_has_i_kat==true)
	{
		dostepnosc_has[kat][has]=false;
		wystapien_hasel_w_kat[kat]++;
		wszystkich_hasel--;
		if(wystapien_hasel_w_kat[kat]==ilosc_hasel_w_kat[kat]) dostepnosc_kat[kat]=false;
	}
	
	stan_has_i_kat=false;
}

function zablokuj_pusta_kategorie() //blokuje checkboxy przy kategoriach, w których nie ma więcej haseł
{
	for(i=0; i<ilosc_kategorii; i++)
	{
		if(wystapien_hasel_w_kat[i]==ilosc_hasel_w_kat[i])
		{
			zaznaczenie_kategorii[i]=false;
			var x="check"+i;
			var y="c"+i;
			document.getElementById(x).checked=false;
			document.getElementById(x).disabled=true;
			document.getElementById(x).style.cursor="default";
			document.getElementById(y).setAttribute("onclick",";");
			document.getElementById(y).setAttribute("onmouseover",";");
			document.getElementById(y).setAttribute("onmouseout",";");
			document.getElementById(y).style.cursor="default";
			document.getElementById(y).style.backgroundColor="#8b8d91";
			document.getElementById(y).style.color="#b8babd";
		}
	}
}

function losowanie() //losuje hasło jeśli spełnione są odpowiednie warunki
{
	var sprawdzacz=false;
	kat=Math.floor(Math.random()*(ilosc_kategorii));

	for(i=0; i<ilosc_kategorii; i++)
	{
		if((dostepnosc_kat[kat]==true)&&(zaznaczenie_kategorii[kat]==true))
		{
			sprawdzacz=true;
			kategoria=kategorie[kat];
			kategoria=kategoria.toUpperCase(); //zamiana znaków w kategorii na wielkie
			
			document.getElementById("category").innerHTML="(Kategoria: "+kategoria+")";
			
			has=Math.floor(Math.random()*ilosc_hasel_w_kat[kat]);
			
			for(j=0; j<ilosc_hasel_w_kat[kat]; j++)
			{
				if(dostepnosc_has[kat][has]==true)
				{
					haslo=hasla[kat][has];
					haslo=haslo.toUpperCase(); //zamiana znaków w hasle na wielkie
					zakryj_haslo();
					
					aktualizuj_ilosc_hasel(kat); //wyświetla liczbę wszystkich haseł oraz wszystkie hasła w poszczególnych kategoriach

					stan_has_i_kat=true;
					break;
				}
				else
				{
					has++;
					if(has==ilosc_hasel_w_kat[kat]) has=0;
				}
			}
			break;
		}
		else 
		{
			kat++;
			if(kat==ilosc_kategorii) kat=0;
		}
	}
	
	if(sprawdzacz==false) zadna_kat_niezaznaczona_lub_nieaktywna(); //w przypadku, gdy żadna kategoria nie jest zaznaczona lub żadna nie jest dostępna
}

function zadna_kat_niezaznaczona_lub_nieaktywna()
{
	document.getElementById("board").innerHTML="brak haseł";
	document.getElementById("category").innerHTML="(Kategoria: wybierz)";
	document.getElementById("left_clues").innerHTML="Pozostałych haseł: ---";
	document.getElementById("guess_rectangle").innerHTML="";
	document.getElementById("alphabet").innerHTML="";
	document.getElementById("gallows").innerHTML='<img src="img/g0.bmp" alt=""/>';
}

function zmien_haslo() //wywołuje się po kliknięciu w żółty przycisk do zmiany haseł
{
	zmien_h.play();
	
	var k=kat;
	var h=has;
	var spr=false;

	for(j=0; j<ilosc_hasel_w_kat[k]; j++)
	{
		h++;
		if(h==ilosc_hasel_w_kat[k])
		{
			for(l=0; l<ilosc_kategorii; l++)
			{
				k++;
				if(k==ilosc_kategorii) k=0;
				
				if(zaznaczenie_kategorii[k]==true)
				{
					h=0;
					j=0;
					spr=true;
					break;
				}
			}
		}
		
		if((h==ilosc_hasel_w_kat[k])&&(spr==false)) h=0;
		
		if(dostepnosc_has[k][h]==true)
		{
			kategoria=kategorie[k];
			kategoria=kategoria.toUpperCase(); //zamiana znaków w kategorii na wielkie
			document.getElementById("category").innerHTML="(Kategoria: "+kategoria+")";
			
			haslo=hasla[k][h];
			haslo=haslo.toUpperCase(); //zamiana znaków w hasle na wielkie
			zakryj_haslo();	
			aktualizuj_ilosc_hasel(k); //wyświetla liczbę wszystkich haseł oraz wszystkie hasła w poszczególnych kategoriach
			//stan_has_i_kat=true;
			
			kat=k;
			has=h;
			break;
		}
	}
}

function znika_zolty_przycisk() //przycisk zmiany hasła na inne znika, gdy klikniemy jakąś literkę (ale tylko w trybie "czerwonym")
{
	document.getElementById("change_clue").innerHTML="";
	if(napisano_haslo==false) document.getElementById("change_clue").style.backgroundColor="#2f845d"; //czerwone tło przycisku w przypadku czerwonej wersji strony
	else document.getElementById("change_clue").style.backgroundColor="#8b00a5"; //fioletowe tło przycisku
	
	document.getElementById("change_clue").style.border="0";
	document.getElementById("change_clue").style.cursor="default";
	document.getElementById("change_clue").setAttribute("onclick",";");
}

function aktualizuj_ilosc_hasel(numer) //wyświetla liczbę pozostałych haseł (sumę haseł zaznaczonych kategorii) oraz wywołuje funkcję wyświetlającą liczbę wszystkich pozostałych haseł
{
	var id_x;
	for(i=0;i<ilosc_kategorii; i++) //uaklulnia pozostałą ilość haseł dla każdej kategorii
	{
		id_x="hasel"+i;
		document.getElementById(id_x).innerHTML=(ilosc_hasel_w_kat[i]-wystapien_hasel_w_kat[i]);
	}
	
	if(numer!=-1) //potrzebne, gdy gracz odznaczy kategorię która jako jedyna była zaznaczona i ilość haseł w tej kategorii ma się zwiększyć o 1 (liczba w nawiasie)
	{
		id_x="hasel"+numer;
		document.getElementById(id_x).innerHTML=((ilosc_hasel_w_kat[numer]-1)-wystapien_hasel_w_kat[numer]);
	}
	
	zapis_glowny_pozostalo_hasel();	
}

function zapis_glowny_pozostalo_hasel() //wyświetla liczbę wszystkich pozostałych haseł
{
	pozostalo_hasel=0;
	for(j=0; j<ilosc_kategorii; j++) //aktualizuje łączną liczbę haseł
	{
		if(zaznaczenie_kategorii[j]==true) pozostalo_hasel+=(ilosc_hasel_w_kat[j]-wystapien_hasel_w_kat[j]);
	}
	
	var y=(pozostalo_hasel-1); //zamiana zapisu, żeby występowały zera w zależności jak wielka jest liczba pozostałych haseł, zmniejsza o 1 bo jedno hasło jest aktualnie wyświetlane na planszy
	var x;
	if(y<10) x="Pozostałych haseł: 00"+y;
	else if(y<100) x="Pozostałych haseł: 0"+y;
	else if(y<1000) x="Pozostałych haseł: "+y;
	document.getElementById("left_clues").innerHTML=x; //wyświetlenie w postaci z zerami
}

function zakryj_haslo()
{
	długosc_hasla=haslo.length;
	
	zakryte_haslo = "";
	
	for(i=0; i<długosc_hasla; i++) //w przypadku, gdy w haśle występują znaki inne niż litery, mają one być widoczne
	{
		if(haslo.charAt(i)==" ") zakryte_haslo+=" ";
		else if(haslo.charAt(i)==",") zakryte_haslo+=",";
		else if(haslo.charAt(i)==".") zakryte_haslo+=".";
		else if(haslo.charAt(i)=="!") zakryte_haslo+="!";
		else if(haslo.charAt(i)=="'") zakryte_haslo+="'";
		else if(haslo.charAt(i)=="?") zakryte_haslo+="?";
		else if(haslo.charAt(i)=="1") zakryte_haslo+="1";
		else if(haslo.charAt(i)=="2") zakryte_haslo+="2";
		else if(haslo.charAt(i)=="3") zakryte_haslo+="3";
		else if(haslo.charAt(i)=="4") zakryte_haslo+="4";
		else if(haslo.charAt(i)=="5") zakryte_haslo+="5";
		else if(haslo.charAt(i)=="6") zakryte_haslo+="6";
		else if(haslo.charAt(i)=="7") zakryte_haslo+="7";
		else if(haslo.charAt(i)=="8") zakryte_haslo+="8";
		else if(haslo.charAt(i)=="9") zakryte_haslo+="9";
		else zakryte_haslo+="-";
	}
	
	pokaz_haslo();
}

function zmien_dostepnosc_kategorii(t) //sprawdza, które kategorie są włączone, a które wyłączone + zmienia liczbę haseł
{
	checkbox.play();
	
	var licznik=0; //ile kategorii jest zaznaczonych
	for(k=0; k<ilosc_kategorii; k++) //liczy, ile kategorii jest zaznaczonych
	{
		if(zaznaczenie_kategorii[k]==true) licznik++;
	}
	
	zaznaczenie_kategorii[t]=!(zaznaczenie_kategorii[t]); //zmienia zaznaczenie danej kategorii z false na true lub odwrotnie
	
	var x="check"+t;
	if(zaznaczenie_kategorii[t]==true) document.getElementById(x).checked=true;
	else document.getElementById(x).checked=false;
	
	zaladuj_divy();
	jedna_zaznaczona_jedno_haslo();
	zapis_glowny_pozostalo_hasel(); //wyświetla liczbę wszystkich pozostałych haseł
	
	if((t==kat)||(licznik==0)) //wejść ma tutaj tylko w przypadku, gdy w zmienianej kategorii znajduje się aktualnie wyświetlane hasło lub w przypadku, gdy żadna kategoria nie jest zaznaczona (potrzebne, aby nie działo się nic, gdy zmieniamy kategorię inną niż ta, z której hasło jest aktualnie wyświetlane
	{
		aktualizuj_ilosc_hasel(-1); //potrzebne, gdy gracz odznaczy kategorię która jako jedyna była zaznaczona i ilość haseł w tej kategorii ma się zwiększyć o 1 (liczba w nawiasie)
		
		var ochroniacz=false;
		for(i=0; i<ilosc_kategorii; i++)
		{
			x="check"+i;
			if((zaznaczenie_kategorii[i]==false)||(document.getElementById(x).disabled==true)) ochroniacz=true;
			else
			{
				ochroniacz=false;
				break;
			}
		}
		
		if(ochroniacz==true) zadna_kat_niezaznaczona_lub_nieaktywna(); //w przypadku, gdy żadna kategoria nie jest zaznaczona lub żadna nie jest dostępna
		else losowanie();
	}
}

function reset()
{
	if(wszystkich_hasel==0) //sprawdzenie, czy są jeszcze jakieś hasła
	{
		var id_string;
		
		document.getElementById("board").innerHTML="brak haseł";
		document.getElementById("category").innerHTML="(Kategoria: brak dostępnych)";
		document.getElementById("left_clues").innerHTML="Pozostałych haseł: ---";
		document.getElementById("guess_rectangle").innerHTML="";
		document.getElementById("alphabet").style.backgroundColor ="#919191"; 
		zablokuj_odblokuj_checkboxy(true); //blokuje checkboxy
		
		wynik+=wynik_runda;
		if(wynik>0) id_string='id="green_string"'; //żeby tekst przedstawiający wynik był albo czerwony albo zielony (w zależności od wyniku)
		else id_string='id="red_string"';
			
		document.getElementById("alphabet").innerHTML='<span id="clue"><br/>Wyczerpałeś wszystkie hasła!<br/><span '+id_string+'>Twój wynik: '+wynik+'</span></span><br/><br/><span id="reset" onclick="location.reload()">CHCESZ ZACZĄĆ PONOWNIE?</span>';
	}
	else if(pozostalo_hasel==0)
	{
		zadna_kat_niezaznaczona_lub_nieaktywna();
		document.getElementById("alphabet").style.backgroundColor="";
		document.getElementById("alphabet").style.color="";
		document.getElementById("alphabet").style.opacity="";
		zablokuj_odblokuj_checkboxy(false); //odblokowuje checkboxy
		napisano_haslo=false;
		kliknieto_przycisk=true;
		zmien_wyglad_strony(false);
		kolor_strony="czerwony";
		wynik+=wynik_runda;
		odswiez_wynik();
		
		odblokuj_p1(); //odblokowuje lewy górny prostokąt (do wpisywania hasła i kategorii dla przeciwnika)
	}
	else //w przeciwnym wypadku wywołuje funkcję przywracającą stronę do początkowej wartości (prawie)
	{
		zaladuj_ponownie(); //na końcu funkcji zaladuj_ponownie() jest wywołanie funkcji start() (czyli idzie od początku), ale ponadto jest jeszcze wyzerowanie lewego prostokąta
	}
}

function odblokuj_p1() //odblokowuje lewy górny prostokąt (do wpisywania hasła i kategorii dla przeciwnika)
{
	skasuj.play();
	
	document.getElementById("napis_wpisz_kategorie").style.color="#ffffff"; //zmiana koloru czcionki napisu nad polami do wpisywania hasła i kategorii dla przeciwnika na biały
	
	document.getElementById("write_ok_submit").style.color="#ffffff"; //zmiana wyglądu szarego przycisku 'ok' na zielony
	document.getElementById("write_ok_submit").style.backgroundColor="#36b03c";
	document.getElementById("write_ok_submit").style.cursor="pointer";
	document.getElementById("write_ok_submit").style.border="2px solid #14901a";
	document.getElementById("write_ok_submit").setAttribute("onmouseover","ziel_przyc_po_najechaniu()");
	document.getElementById("write_ok_submit").setAttribute("onmouseout","ziel_przyc_po_zjechaniu()");
	
	document.getElementById("write_cancel_submit").style.color="#c5c6c9"; //zmiana wyglądu czerwonego przycisku 'cancel' na szary
	document.getElementById("write_cancel_submit").style.backgroundColor="#96989b";
	document.getElementById("write_cancel_submit").style.cursor="default";
	document.getElementById("write_cancel_submit").style.border="2px solid #96989b";
	document.getElementById("write_cancel_submit").setAttribute("onmouseover",";");
	document.getElementById("write_cancel_submit").setAttribute("onmouseout",";");
	
	document.getElementById("write_clue_text").disabled=false; //odblokowanie pola tekstowego
	document.getElementById("write_clue_text").setAttribute("placeholder","Wpisz_hasło"); //zmiana wyglądu pola tekstowego do wpisywania hasła
	document.getElementById("write_clue_text").setAttribute("onfocus","this.placeholder=''");
	document.getElementById("write_clue_text").setAttribute("onblur","this.placeholder='Wpisz_hasło'");
	
	document.getElementById("write_category_text").disabled=false; //odblokowanie pola tekstowego
	document.getElementById("write_category_text").setAttribute("placeholder","Wpisz_kategorię"); //zmiana wyglądu pola tekstowego do wpisywania kategorii
	document.getElementById("write_category_text").setAttribute("onfocus","this.placeholder=''");
	document.getElementById("write_category_text").setAttribute("onblur","this.placeholder='Wpisz_kategorię'");
	
	document.getElementById("write_ok_submit").setAttribute("onclick","napisz_haslo()"); //odpowienie ustawienie onclicków
	document.getElementById("write_cancel_submit").setAttribute("onclick",";");
}

function zaladuj_ponownie() //czerwony przycisk do anulowania wpisanego przez nas hasła
{
	napisano_haslo=false;
	odblokuj_p1(); //odblokowuje lewy górny prostokąt (do wpisywania hasła i kategorii dla przeciwnika)
	zablokuj_odblokuj_checkboxy(false); //odblokowuje checkboxy
	kliknieto_przycisk=true;
	zmien_wyglad_strony(false);
	kolor_strony="czerwony";
	wynik+=wynik_runda;
		
	start();
}

function napisz_haslo() //wpisane przez gracza hasło
{
	var sprawdzacz1 = false; //sprawdzacze do spacji
	var sprawdzacz2 = false;
	
	var napisane_has=document.getElementById("write_clue_text").value;
	var napisana_kat=document.getElementById("write_category_text").value;
	
	var dlugosc_nap_has=napisane_has.length; //pobranie długości łańcucha hasło
	var dlugosc_nap_kat=napisana_kat.length; //pobranie długości łańcucha kategoria w celu usunięcia zbędnych spacji
	
	if((dlugosc_nap_has!=0)&&(dlugosc_nap_kat!=0)) //jeśli gracz wpisał coś w oba pola
	{
		for(i=0; i<dlugosc_nap_has; i++) //2 fory sprawdzające, czy w polach występują tylko spacje, jeśli są litery w obu to przechodzi do procedury wpisanego hasła
		{
			if(napisane_has.charAt(i)!=" ") sprawdzacz1=true;
		}
		
		for(i=0; i<dlugosc_nap_kat; i++)
		{
			if(napisana_kat.charAt(i)!=" ") sprawdzacz2=true;
		}
	}
	
	if((sprawdzacz1==true)&&(sprawdzacz2==true)) //sprawdzenie czy nie zostały wpisane tylko spacje, jeśli nie to uruchomia procedurę wpisanego hasła
	{
		zaladuj.play();
		
		var k=1;
		while(napisana_kat.charAt(dlugosc_nap_kat-k)==" ") //usuwa spacje na końcu łańcucha kategoria
		{
			napisana_kat=napisana_kat.ustawZnak((dlugosc_nap_kat-k),"")
			k++;
		}
		
		haslo=napisane_has;
		kategoria=napisana_kat;
		
		haslo=haslo.toUpperCase();
		kategoria=kategoria.toUpperCase();
		
		długosc_hasla = haslo.length;
		
		zakryte_haslo ="";
		
		for(i=0;i<długosc_hasla;i++)
		{
			if(haslo.charAt(i)==" ") zakryte_haslo+=" ";
			else if(haslo.charAt(i)==",") zakryte_haslo+=",";
			else if(haslo.charAt(i)==".") zakryte_haslo+=".";
			else if(haslo.charAt(i)==";") zakryte_haslo+=";";
			else if(haslo.charAt(i)==":") zakryte_haslo+=":";
			else if(haslo.charAt(i)=="<") zakryte_haslo+="<";
			else if(haslo.charAt(i)==">") zakryte_haslo+=">";
			else if(haslo.charAt(i)=="/") zakryte_haslo+="/";
			else if(haslo.charAt(i)=="?") zakryte_haslo+="?";
			else if(haslo.charAt(i)=="'") zakryte_haslo+="'";
			else if(haslo.charAt(i)=="|") zakryte_haslo+="|";
			else if(haslo.charAt(i)=="{") zakryte_haslo+="{";
			else if(haslo.charAt(i)=="}") zakryte_haslo+="}";
			else if(haslo.charAt(i)=="[") zakryte_haslo+="[";
			else if(haslo.charAt(i)=="]") zakryte_haslo+="]";
			else if(haslo.charAt(i)=="+") zakryte_haslo+="+";
			else if(haslo.charAt(i)=="=") zakryte_haslo+="=";
			else if(haslo.charAt(i)=="_") zakryte_haslo+="_";
			else if(haslo.charAt(i)=="~") zakryte_haslo+="~";
			else if(haslo.charAt(i)=="`") zakryte_haslo+="`";
			else if(haslo.charAt(i)=="\"") zakryte_haslo+="\"";
			else if(haslo.charAt(i)=="!") zakryte_haslo+="!";
			else if(haslo.charAt(i)=="@") zakryte_haslo+="@";
			else if(haslo.charAt(i)=="#") zakryte_haslo+="#";
			else if(haslo.charAt(i)=="$") zakryte_haslo+="$";
			else if(haslo.charAt(i)=="%") zakryte_haslo+="%";
			else if(haslo.charAt(i)=="^") zakryte_haslo+="^";
			else if(haslo.charAt(i)=="&") zakryte_haslo+="&";
			else if(haslo.charAt(i)=="*") zakryte_haslo+="*";
			else if(haslo.charAt(i)=="(") zakryte_haslo+="(";
			else if(haslo.charAt(i)==")") zakryte_haslo+=")";
			else if(haslo.charAt(i)=="-") zakryte_haslo+="-";
			else if(haslo.charAt(i)=="\\") zakryte_haslo+="\\";
			
			else if(haslo.charAt(i)=="0") zakryte_haslo+="0";
			else if(haslo.charAt(i)=="1") zakryte_haslo+="1";
			else if(haslo.charAt(i)=="2") zakryte_haslo+="2";
			else if(haslo.charAt(i)=="3") zakryte_haslo+="3";
			else if(haslo.charAt(i)=="4") zakryte_haslo+="4";
			else if(haslo.charAt(i)=="5") zakryte_haslo+="5";
			else if(haslo.charAt(i)=="6") zakryte_haslo+="6";
			else if(haslo.charAt(i)=="7") zakryte_haslo+="7";
			else if(haslo.charAt(i)=="8") zakryte_haslo+="8";
			else if(haslo.charAt(i)=="9") zakryte_haslo+="9";
			
			else zakryte_haslo+="-";
		}
		
		if(zakryte_haslo==haslo) alert("Hasło musi zawierać litery!");
		else
		{
			ilosc_skuch=0;
			napisano_haslo=true;
			kolor_strony="fioletowy";
			
			zmien_wyglad_strony(true);
			zaladuj_divy(); //ładuje divy z obrazkiem wisielca, alfabet oraz div z odgadywaniem hasła
			znika_zolty_przycisk();
			zablokuj_p1(); //blokuje lewy górny prostokąt (do wpisywania hasła i kategorii dla przeciwnika)
			zablokuj_odblokuj_checkboxy(true); //blokuje checkboxy
			
			document.getElementById("category").innerHTML="(Kategoria: "+kategoria+")"; 
			document.getElementById("left_clues").innerHTML="Pozostałych haseł: ---";
			document.getElementById("score").innerHTML="Wynik: -------";
			
			stan_has_i_kat=false;
			
			pokaz_haslo();
		}
	}
}

function zmien_wyglad_strony(fiolet) //zmienia wyglad strony na czerwony lub fioletowy w zależności czy hasło jest od gracza czy z puli haseł
{
	if(fiolet==true)
	{
		document.getElementById("logo").style.backgroundColor="#38163f"; //fioletowy wygląd
		document.getElementById("logo").style.borderBottom="1px solid #1d0b21";
		document.getElementById("footer").style.backgroundColor="#38163f";
		document.getElementById("footer").style.borderTop="1px solid #1d0b21";
		document.getElementById("refresh").style.backgroundColor="#38163f";
		document.getElementById("content").style.background='url("img/bgv.bmp")';
		document.getElementById("guess_rectangle").style.backgroundColor="#8b00a5";
	}
	else
	{
		document.getElementById("logo").style.backgroundColor="#a82f0a"; //czerwony wygląd
		document.getElementById("logo").style.borderBottom="1px solid #4c140d";
		document.getElementById("footer").style.backgroundColor="#a82f0a";
		document.getElementById("footer").style.borderTop="1px solid #4c140d";
		document.getElementById("refresh").style.backgroundColor="#a82f0a";
		document.getElementById("content").style.background='url("img/bg.bmp")';
		document.getElementById("guess_rectangle").style.backgroundColor="#dda154";
	}
}

function dzwieki() //odtwarzanie dźwięków, jeśli gracz zaznaczył tak na stronie
{
	if(dzwiek==true) 
	{
		tak = new Audio("");
		nie = new Audio("");
		wygrana = new Audio("");
		przegrana = new Audio("");
		zaladuj = new Audio("");
		skasuj = new Audio("");	
		zmien_h = new Audio("");	
		checkbox = new Audio("");	
		
		document.getElementById("sound_square").innerHTML='<i class="icon-volume-off"></i>';
		dzwiek=false;
	}
	else 
	{
		tak = new Audio("snd/tak.wav");
		nie = new Audio("snd/nie.wav");
		wygrana = new Audio("snd/wygrana.wav");
		przegrana = new Audio("snd/przegrana.wav");
		zaladuj = new Audio("snd/zaladuj.wav");
		skasuj = new Audio("snd/skasuj.wav");	
		zmien_h = new Audio("snd/zmien_h.wav");	
		checkbox = new Audio("snd/checkbox.wav");	
		
		document.getElementById("sound_square").innerHTML='<i class="icon-volume-high"></i>';
		dzwiek=true;
	}
}

function zegar()
{
	var today=new Date();
	
	var second=today.getSeconds();
	var minute=today.getMinutes();
	var hour=today.getHours();
	
	if(second<10) second="0"+second;
	if(minute<10) minute="0"+minute;
	if(hour<10) hour="0"+hour;

	document.getElementById("clock").innerHTML=hour+":"+minute+":"+second;
	
	setTimeout("zegar()",1000);
}

function checkbox_po_najechaniu(t) //checkbox po najechaniu kursorem
{
	var x="c"+t;
	document.getElementById(x).style.backgroundColor="#3a493b";
	document.getElementById(x).style.color="#000000";
}

function checkbox_po_zjechaniu(t) //checkbox po zjechaniu kursorem
{
	var x="c"+t;
	document.getElementById(x).style.backgroundColor="#79967b";
	document.getElementById(x).style.color="#ffffff";
}

function ziel_przyc_po_najechaniu() //zielony przycisk w lewym górnym prostokącie po najechaniu kursorem
{
	document.getElementById("write_ok_submit").style.color="#009303";
}

function ziel_przyc_po_zjechaniu() //zielony przycisk w lewym górnym prostokącie po zjechaniu kursorem
{
	document.getElementById("write_ok_submit").style.color="#ffffff";
}

function czerw_przyc_po_najechaniu() //czerwony przycisk w lewym górnym prostokącie po najechaniu kursorem
{
	document.getElementById("write_cancel_submit").style.color="#820303";
}

function czerw_przyc_po_zjechaniu() //czerwony przycisk w lewym górnym prostokącie po zjechaniu kursorem
{
	document.getElementById("write_cancel_submit").style.color="#ffffff";
}