const person = {
    firstnam: "willem",
     lastname: "bartson",
      age: 16,
       study: "software develepor",
        score: 5
    };
const facebook = {
    username: "Willemaar",
     titel: "maandag",
      story: "ik ben moe",
       date: 4-8-24,
        vieuws: 18
    };
const eetrecepten = {
    titel1: "eet recepten",
     description: "lekkere burger",
      healty: "veel groente nodig"
    };
const auto = {
    titel2: "2019 RAM Laramie 4x4 crew cab LPG",
     description1: "Het is een prachtige auto met enorm veel ruimte erin om al je baggage erin te stoppen, maar niet alleen dat het heeft ook een automatishe transmissie. Maar dat is niet alles want het heeft een SUV carrosserie.",
      price: 47.950,
       killometer: "102.726 km",
        builddate: 2019
};
const dirk ={
    title3: "Hardanger Gerookte zalm",
     description2: "Gerookte Noorse zalm, aquacultuurproduct uit Noorwegen",
      sale: "150g voor € 3,99",
       price: 3.99,
        weaight: "150g"
};
const tweakers = {
    title4:"4k-QD-oledmonitor",
     description3: "De Samsung Odyssey OLED G8 G80SD is een van de betaalbaarste 4k-QD-oledschermen. Het scherm ziet er luxe uit, maar de aansluitingen zijn ietwat beperkt: geen USB-C-poort en een USB-hub met maar twee poorten. De Tizen-software brengt allerlei extra functies met zich mee, maar werkt omslachtig als je de G80SD puur als monitor gebruikt. Let ook op dat je bepaalde toestemmingen niet klakkeloos verleent tijdens de set-up als je gesteld bent op je privacy. Uniek voor QD-oled is de matte afwerking, effectief tegen reflecties, maar colorfringing blijft een aandachtspunt, evenals inbranden. Samsung geeft twee jaar garantie, een jaar korter dan sommige concurrenten. Ten koste van een hoog energiegebruik is de beeldkwaliteit over het geheel genomen uitstekend: een vrijwel oneindig contrast en bijna perfecte responstijden, uniformiteit en kijkhoeken. De kleurweergave is best goed voor zowel sRGB als hdr-content, maar niet zo geweldig als bij sommige concurrenten. Zeker voor hdr-beeld is de maximale helderheid beperkt, wat ook geldt voor andere QD-oledmonitors.",
      
};
const array = ["brood", "sla", "tomaat"];
console.log(array);

const bread = document.querySelector(".brd")
const slaa = document.querySelector(".sl")
const tomato = document.querySelector(".tmt")

bread.textContent = array[0]
slaa.textContent = array[1]
tomato.textContent = array[2]

const array1 = ["zalm", 3.99, "dirk", "150g", "Gerookte Noorse zalm, aquacultuurproduct uit Noorwegen"]
console.log(array1);

const salm = document.querySelector(".zlm")
const money = document.querySelector(".prc")
const shop = document.querySelector(".wnkl")
const fat = document.querySelector(".gwcht")
const waat = document.querySelector(".bschr")

salm.textContent = array1[0]
money.textContent = array1[1]
shop.textContent = array1[2]
fat.textContent = array1[3]
waat.textContent = array1[4]



