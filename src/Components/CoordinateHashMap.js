


const places = {
    DaleHall: "Dale Hall",
    NielsonHall: "Nielson Hall",
    CouchCenter: "Couch Center",
    Walkertower: "Walker Tower",
    Cross: "Cross",
    HeadingtonHall: "Headington Hall",
    DunhamCollege: "Dunham College",
    SarkysFitnessCenter: "Sarkys Fitness Center",
    PriceCollege: "Price College",
    GaylordHall: "Gaylord Hall",
    Catlett: "Catlett",
    DevonHall: "Devon Hall",
    GallogyHall: "Gallogy Hall",

    WagnerHall: "Wagner Hall",
    PhysicalScienceCenter: "Physical Science Center",
    FelgarHall: "Felgar Hall",
    CarsonEngineeringCenter: "Carson Engineering Center",
    SarkysEnergyCenter: "Sarkys Energy Center",
    Union: "Oklahoma Memorial Union",
    BizzellLibrary: "Bizzell Library",
    ReynolsPerformingArtsCenter: "Reynolds Performing Arts Center",
    GaylordStatium: "Gaylord Statium",
    CopelandHall: "Copeland Hall",
    GouldHall: "Gould Hall",
    KaufmanHall: "Kaufman Hall",
    FarzanehHall: "Farzaneh Hall",
    DavidLBorenHall: "David L. Boren Hall",
    OUFoodPantry: "OU Food Pantry",
    HaystackCoffee: "Haystack Coffee",
    DavidBurrPart: "David Burr Park",
    CarpenterHall: "Carpenter Hall",
    BurtonHall: "Burton Hall",
    Goddard: "Goddard Health Center",
    JimThorpeMulticulturalCenter: "Jim Thorpe Multicultural Center",
    ThurmanJWhiteForumBuilding: "Thurman J White, Forum Building",
    



}

const latitude = new Map();
latitude.set(places.DaleHall, '35.204335612633905');
latitude.set(places.NielsonHall, '35.2071511036927')
latitude.set(places.CouchCenter, '35.20020467875125')
latitude.set(places.Walkertower, '35.201638806947244')
latitude.set(places.Cross, '35.19946587519702')
latitude.set(places.HeadingtonHall, '35.203296748057205')
latitude.set(places.DunhamCollege, '35.20354655564377')
latitude.set(places.SarkysFitnessCenter, '35.20148887992214')
latitude.set(places.PriceCollege, '35.207954909754434')
latitude.set(places.GaylordHall, '35.20417368861974')
latitude.set(places.Catlett, '35.210371762233834')
latitude.set(places.DevonHall, '35.21075243791006')
latitude.set(places.GallogyHall, '35.21013069465332')
 


const longitude = new Map();
longitude.set(places.DaleHall, '-97.44654550199276');
longitude.set(places.NielsonHall, '-97.4466913268683')
longitude.set(places.CouchCenter, '-97.44520044632148')
longitude.set(places.Walkertower, '-97.44489423282806')
longitude.set(places.Cross, "-97.44235850399258");
longitude.set(places.HeadingtonHall, '-97.44104712476732');
longitude.set(places.DunhamCollege, '-97.44378657974262');
longitude.set(places.SarkysFitnessCenter, '-97.4428844306612')
longitude.set(places.PriceCollege, '-97.44388057786237')
longitude.set(places.GaylordHall, '-97.44491060071839')
longitude.set(places.Catlett, '-97.44825158117717')
longitude.set(places.DevonHall, '-97.44182023070236')
longitude.set(places.GallogyHall, '-97.44194773238489')






export {longitude, latitude, places};


