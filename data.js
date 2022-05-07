const raw = [
    "1903 Ilinden-Preobrazhenie Uprising",
    "1904-1908 Macedonian Struggle",
    "1904-1905 Russo-Japanese War",
    "1905 Łódź insurrection",
    "1905 Revolution of 1905",
    "1906-1908 Theriso revolt",
    "1907 1907 Romanian Peasants' Revolt",
    "1910 Albanian Revolt of 1910",
    "1910 5 October 1910 revolution",
    "1911 Albanian Revolt of 1911",
    "1911-1912 Italo-Turkish War",
    "1912 Albanian Revolt of 1912",
    "1912-1913 Balkan Wars",
    "1912-1913 First Balkan War",
    "1913 Tikveš Uprising",
    "1913 Second Balkan War",
    "1913 Ohrid-Debar Uprising",
    "1914 Peasant Revolt in Albania",
    "1914-1918 World War I - 19,174,335 deaths",
    "1916 Noemvriana",
    "1917 Toplica Uprising",
    "1918 Judenburg mutiny",
    "1918 Cattaro Mutiny",
    "1918 Aster Revolution",
    "1918 Radomir Rebellion",
    "1918 Finnish Civil War",
    "1916 Easter Rising",
    "1917 Russian Revolution",
    "1917 February Revolution",
    "1917 July Days",
    "1917 Polubotkivtsi uprising",
    "1917 Kornilov affair",
    "1917 October Revolution",
    "1917 Junker mutiny",
    "1917 Kerensky-Krasnov uprising",
    "1917-1921 Russian Civil War",
    "1917-1918 Soviet-Turkish War",
    "1917-1921 Ukrainian War of Independence",
    "1917-1921 Ukrainian-Soviet War",
    "1918-1919 Polish-Ukrainian War",
    "1918-1924 Left-wing uprisings against the Bolsheviks",
    "1918 Left SR uprising",
    "1921 Kronstadt rebellion",
    "1918-1922 Heimosodat",
    "1918 Viena expedition",
    "1918 Aunus expedition",
    "1918-1920 Petsamo expeditions",
    "1918-1920 National revolt of Ingrian Finns",
    "1921-1922 East Karelian Uprising",
    "1918-1920 Estonian War of Independence",
    "1918-1925 Allied intervention in the Russian Civil War",
    "1918-1920 North Russia Intervention",
    "1918-1922 Siberian Intervention",
    "1918 Georgian-Armenian War",
    "1918-1920 Georgian-Ossetian conflict (1918-20)",
    "1918-1919 Georgian-Russian conflict over Sochi",
    "1918-1920 Armenian-Azerbaijani War",
    "1918-1920 Latvian War of Independence",
    "1918-1920 Lithuanian Wars of Independence",
    "1918-1919 Lithuanian-Soviet War",
    "1919 Lithuanian War of Independence (War against the Bermontians)",
    "1920 Polish-Lithuanian War",
    "1919-1921 Polish-Soviet War",
    "1921 Georgian-Russian War",
    "1924 Georgian Uprising against Soviet Union",
    "1919-1920 Revolutions and interventions in Hungary (1918-20)",
    "1918-1919 Hungarian-Romanian War",
    "1918-1919 Hungarian-Czechoslovak War",
    "1919 Sejny Uprising",
    "1919 Khotyn Uprising",
    "1918 Georgian-Turkish War",
    "1918-1919 Austro-Slovene conflict in Carinthia",
    "1918-1958 Polish-Czechoslovak border conflicts",
    "1919 Polish-Czech war for Teschen Silesia",
    "1918-1919 German Revolution",
    "1918-1919 Greater Poland Uprising",
    "1919-1923 Turkish War of Independence",
    "1919-1922 Greco-Turkish War",
    "1918-1921 Franco-Turkish War",
    "1920 Turkish-Armenian War",
    "1919-1923 Royalist and separatist revolts",
    "1919 Christmas Uprising",
    "1919-1920 Italo-Yugoslav War",
    "1919-1921 Silesian Uprisings",
    "1919 First Silesian Uprising",
    "1920 Second Silesian Uprising",
    "1921 Third Silesian Uprising",
    "1919-1922 Irish War of Independence",
    "1920 Husino rebellion",
    "1920 Vlora War",
    "1920 Kapp Putsch",
    "1920 Ruhr Uprising",
    "1920 Slutsk Defence Action",
    "1920-1924 Biennio Rosso",
    "1921 Uprising in West Hungary",
    "1921 February Uprising",
    "1921 Charles IV of Hungary's attempts to retake the throne",
    "1922-1923 Irish Civil War",
    "1923 Corfu incident",
    "1923 September Uprising",
    "1923 Klaipėda Revolt",
    "1923 Leonardopoulos-Gargalidis coup d'état attempt",
    "1924 1924 Estonian coup d'état attempt",
    "1924 August Uprising",
    "1925 Incident at Petrich",
    "1932 Mäntsälä rebellion",
    "1933 Casas Viejas incident",
    "1933 Anarchist uprising in Spain (1933)",
    "1934 Asturian miners' strike of 1934",
    "1934 Austrian Civil War",
    "1935 1935 Greek coup d'état attempt",
    "1936-1939 Spanish Civil War",
    "1938 1938 Greek coup d'état attempt",
    "1939 Hungarian invasion of Carpatho-Ukraine",
    "1939-1965 Spanish Maquis",
    "1939-1940 S-Plan",
    "1939-1945 World War II",
    "1939 Nazi German invasion of Poland",
    "1939 Soviet invasion of Poland",
    "1939-1940 Winter War (Soviet invasion of Finland)",
    "1940 Battle of the Netherlands",
    "1940 Battle of Belgium",
    "1940 Battle of France",
    "1940 Italian invasion of France",
    "1940 Soviet invasion of the Baltic States",
    "1940 Soviet occupation of Bessarabia and Northern Bukovina",
    "1940 Battle of Britain",
    "1940-1941 Greco-Italian War",
    "1941-1945 Soviet-German War",
    "1941-1945 Yugoslav anti-fascist resistance movement",
    "1941-1944 Continuation War",
    "1941 Uprising in Montenegro",
    "1942-1944 Northern Campaign",
    "1942-1956 Ukrainian Insurgent Army",
    "1943 Italian Campaign",
    "1944 Western Allied invasion of Germany",
    "1944 Warsaw Uprising",
    "1944 Slovak National Uprising",
    "1945 Second Battle of the Alps",
    "1945 Battle of Berlin",
    "1944-1956 Guerrilla war in the Baltic states",
    "1945-1949 Greek Civil War",
    "1946-1948 Corfu Channel incident",
    "1947-1962 Romanian anti-communist resistance movement",
    "1953 Uprising in East Germany",
    "1955-1959 Cyprus Emergency",
    "1956 Uprising in Poznań",
    "1956 Hungarian Revolution",
    "1956-1962 Operation Harvest",
    "1958 Opération Corse",
    "1958 First Cod War",
    "1959-2011 Basque conflict",
    "1961-1967 South Tyrol insurgency",
    "1962-1964 Jura conflict[3]",
    "1967 Greek coup d'état",
    "1968 Warsaw Pact invasion of Czechoslovakia",
    "1968-1998 The Troubles",
    "1970-1984 Unrest in Italy",
    "1972 Bugojno group",
    "1972-1973 Second Cod War",
    "1974 Turkish invasion of Cyprus",
    "1974 Carnation Revolution",
    "1975-1976 Third Cod War",
    "1975 Portuguese coup d'état attempt",
    "1976-present Corsican Insurgency",
    "1981 Spanish coup d'état attempt",
    "1986 Evros River incident",
    "1989 Romanian Revolution",
    "1990-1991 Soviet attacks on Lithuanian border posts",
    "1991 January Events",
    "1991 The Barricades",
    "1990 Log Revolution",
    "1991-2001 Yugoslav Wars",
    "1991 Ten-Day War",
    "1991-1995 Croatian War of Independence",
    "1992-1995 Bosnian War",
    "1992-1994 Croat-Bosniak War",
    "1998-1999 Kosovo War",
    "April 23, 1998 April 23, 1998 Albanian-Yugoslav border ambush",
    "December 3, 1998 Albanian-Yugoslav border incident (December 1998)",
    "December 14, 1998 December 14, 1998, Albanian-Yugoslav border ambush",
    "April 3, 1999 Albania-Yugoslav border incident (April 1999)",
    "1999-2001 Insurgency in the Preševo Valley",
    "2001 2001 insurgency in Macedonia",
    "1991-1992 Georgian war against Russo-Ossetian alliance",
    "1991-1993 Georgian Civil War",
    "1991Transnistria conflict",
    "1992-present Transnistria War",
    "1992 East Prigorodny Conflict",
    "1992-1993 War in Abkhazia",
    "1993 1993 Cherbourg incident",
    "1993 1993 Russian constitutional crisis",
    "1994-1996 First Chechen War",
    "1995-1996 Imia/Kardak military crisis",
    "1997-1998 Cyprus Missile Crisis",
    "1997 Albanian civil war of 1997",
    "1997 Operation Libelle",
    "1997-present Dissident Irish Republican campaign",
    "1998 Six-Day War of Abkhazia",
    "1999 War of Dagestan",
    "1999-2009 Second Chechen War",
];

const remaining = []
const processed = raw.map(line => {

    // e.g. "1997-present Dissident Irish Republican campaign"
    const now = (new Date()).getFullYear()
    line = line.replace('present', `${now}`)

    // e.g. "1903 Ilinden-Preobrazhenie Uprising"
    let m = line.match(/^(\d{4}) ?([^-].+)$/)
    if (m) {
          return [m[2], new Date(m[1], 1, 1), new Date(m[1], 12, 31)];
    }

    // e.g. "1904-1908 Macedonian Struggle"
    m = line.match(/^(\d{4})-(\d{4}) ?(.+)$/)
    if (m) {
        return [m[3], new Date(m[1], 1, 1), new Date(m[2], 12, 31)]
    }

    remaining.push(line)
    return null;

}).filter(x => x !== null)

// console.log(`Raw: ${raw.length}`)
// console.log(`P1 : ${processed.length}`)
// console.log(`Rem: ${remaining.length}`)

const data = {
    columns: [
        { type: 'string', id: 'Name'  },
        { type: 'date',   id: 'Start' },
        { type: 'date',   id: 'End'   },
    ],
    rows: processed,
};