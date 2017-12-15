window.onload = main;


var tubeColors = ['#B36305', '#E32017', '#FFD300', '#00782A', '#F3A9BB',
                '#A0A5A9', '#9B0056', '#000000', '#003688', '#0098D4', '#95CDBA'];
var tubeLines = ['bakerloo line', 'central line', 'circle line', 'district line',
                'hammersmith & city line', 'jubilee line', 'metropolitan line',
                "northern line", 'piccadilly line', 'victoria line', 'waterloo & city line'];
var funFacts = ["In 1924, the first baby was born on the Underground, on a train at Elephant & Castle on the Bakerloo line",
                "The longest journey without change is on the Central line from West Ruislip to Epping, and is a total of 34.1 miles",
                "You can now no longer go around the Circle Line in a full circle. From 2009, the Circle Line terminated at Edgware Road",
                "The fictitious station of Walford East, which features in the long-running soap opera Eastenders, is supposed to be on the District Line",
                "The first section of the Underground ran between Paddington (Bishop's Road) and Farringdon Street. The same section now forms part of the Circle, Hammersmith & City, and Metropolitan lines",
                "The Jubilee Line was named in honour of Queen Elizabeth’s Silver Jubilee in 1977, but did not open until 1979",
                "On the Metropolitan line, trains can reach over 96kph",
                "The phrase “Mind the Gap” originated on the Northern Line in 1968",
                "The shortest distance between two adjacent stations on the underground network is only 260 metres. The tube journey between Leicester Square and Covent Garden on the Piccadilly Line takes only about 20 seconds, but costs £4.90 (cash fare). Yet it still remains one of the most popular journeys with tourists",
                "One of the early names proposed for the Victoria Line was the Viking line",
                "The Waterloo and City Line has the fewest stations (no intermediate stations)"];

var stations = [["Elephant & Castle", "Lambeth North", "Waterloo", "Embankment", "Charing Cross",
                "Piccadilly Circus", "Oxford Circus", "Regent's Park", "Baker Street", "Marylebone", "Edgware Road",
                "Paddington", "Warwick Avenue", "Maida Vale", "Kilburn Park", "Queen's Park", "Kensal Green",
                "Willesden Junction", "Harlesden", "Stonebridge Park",
                "Wembley Central", "North Wembley", "South Kenton", "Kenton", "Harrow & Wealdstone"],
                ["Epping", "Theydon Bois", "Debden", "Loughton", "Buckhurst Hill", "Grange Hill", "Chigwell",
                "Roding Valley", "Woodford", "South Woodford", "Snaresbrook", "Hainault", "Fairlop", "Barkingside",
                "Newbury Park", "Gants Hill", "Redbridge", "Wanstead", "Leytonstone", "Leyton", "Stratford",
                "Mile End", "Bethnal Green", "Liverpool Street", "Bank", "St.Paul's", "Chancery Lane", "Holborn",
                "Tottenham Court Road", "Oxford Circus", "Bond Street", "Marble Arch", "Lancaster Gate",
                "Queensway", "Notting Hill Gate", "Holland Park", "Shepherd's Bush", "White City", "East Acton",
                "North Acton", "West Acton", "Ealing Broadway", "Hanger Lane",
                "Perivale", "Greenford", "Northolt", "South Ruislip", "Ruislip Gardens", "West Ruislip"],
                ["Tower Hill", "Aldgate", "Liverpool Street", "Moorgate", "Barbican", "Farringdon",
                "King's Cross", "Euston Square", "Great Portland Street", "Baker Street", "Edgware Road",
                "Paddington", "Bayswater", "Notting Hill Gate", "High Street Kensington", "Gloucester Road",
                "South Kensington", "Sloane Square", "Victoria", "St.James's Park", "Westminster",
                "Embankment", "Temple", "Blackfriars", "Mansion House", "Cannon Street", "Monument"],
                ["Upminster", "Upminster Bridge", "Hornchurch", "Elm Park", "Dagenham East", "Dagenham Heathway",
                "Becontree", "Upney", "Barking", "East Ham", "Upton Park", "Plaistow", "West Ham", "Bromley-by-Bow",
                "Bow Road", "Mile End", "Stepney Green", "Whitechapel", "Aldgate East", "Tower Hill", "Monument",
                "Cannon Street", "Mansion House", "Blackfriars", "Temple", "Embankment", "Westminster",
                "St. James's Park", "Victoria", "Sloane Square", "South Kensington", "Gloucester Road", "High Street Ken.",
                "Earl's Court", "West Brompton", "Fulham Broadway", "Parsons Green", "Putney Bridge", "East Putney",
                "Southfields", "Wimbledon Park", "Wimbledon", "West Kensington", "Barons Court", "Hammersmith",
                "Ravenscourt Park", "Stamford Brook", "Turnham Green",
                "Gunnersbury", "Kew Gardens", "Richmond", "Chiswick Park", "Acton Town", "Ealing Common", "Ealing Broadway"],
                ["Hammersmith", "Goldhawk Road", "Shepherd's Bush", "Latimer Road", "Ladbroke Grove",
                "Westbourne Park", "Royal Oak", "Paddington", "Edgware Road", "Baker Street", "Great Portland Street",
                "Euston Square", "King's Cross", "Farringdon", "Barbican",
                "Moorgate", "Liverpool Street", "Aldgate", "Tower Hill", "Aldgate East", "Whitechapel"],
                ["Stanmore", "Canons Park", "Queensbury", "Kingsbury", "Wembley Park", "Neasden", "Dollis Hill",
                "Willesden Green", "Kilburn", "West Hampstead", "Finchley Road", "Swiss Cottage",
                "St.John's Wood", "Baker Street", "Bond Street", "Green Park", "Westminister", "Waterloo",
                "Southwark", "London Bridge", "Bermondsy", "Canada Water", "Canary Wharf", "Canning Town",
                "West Ham", "Stratford"],
                ["Aldgate", "Liverpool Street", "Moorgate", "Barbican", "Farringdon", "King's Cross", "Euston Square",
                "Great Portland Street", "Baker Street", "Finchley Road", "Wembley Park", "Preston Road",
                "Northwick Park", "Marylebone", "Harrow-on-the-hill", "West Harrow", "Rayners Lane", "Eastcote",
                "Ruislip Manor", "Ruislip", "Ickenham", "Hillingdon", "Uxbridge", "North Harrow", "Pinner",
                "Northwood Hills", "Northwood", "Moor Park", "Croxley", "Watford", "Rickmansworth", "Chorleywood",
                "Chalfont Latimer", "Chesham", "Amersham"],
                ["Morden", "South Wimbledon", "Colliers Wood", "Tooting Broadway", "Tooting Bec", "Balham",
                "Clapham South", "Clapham Common", "Clapham North", "Stockwell", "Oval", "Kennington",
                "Elephant Castle", "Borough", "London Bridge", "Bank", "Moorgate", "Old Street", "Angel",
                "King's Cross", "Waterloo", "Embankment", "Charing Cross", "Leicester Square",
                "Tottenham Court Road", "Goodge Street", "Warren Street", "Euston", "Mornington Crescent",
                "Camden town", "Kentish Town", "Tufnell Park", "Archway", "Highgate", "East Finchley",
                "Finchley Central", "Mill Hill East", "West Finchley", "Woodside Park", "Totteridge", "Hiigh Barnet",
                "Chalk Farm", "Belsize Park", "Hampstead", "Golders Green", "Brent Cross", "Hendon Central", "Colindale",
                "Burnt Oak", "Edgware"],
                ["Cockfosters", "Oakwood", "Southgate", "Arnos Grove", "Bounds Green", "Wood Green", "Turnpike Lane",
                "Manor House", "Finsbury Park", "Arsenal", "Holloway Road", "Caledonian Road", "King's Cross",
                "Russell Square", "Holborn", "Covent Garden", "Leicester Square", "Piccadilly Circus",
                "Green Park", "Hyde Park Corner", "Knightsbridge", "South Kensington",
                "Gloucester Road", "Earl's Court", "Barons Court", "Hammersmith",
                "Acton Town", "South Ealing", "Northfields", "Boston Manor", "Osterley",
                "Hounslow East", "Hounslow Central", "Hounslow West", "Hatton Cross",
                "Heathrow Terminal 4", "Heathrow Terminals 1, 2, 3", "Ealing Common",
                "North Ealing", "Park Royal", "Alperton", "Sudbury Town", "Sudbury Hill", "South Harrow", "Rayners Lane"],
                ["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Victoria", "Green Park", "Oxford Circus",
                "Warren Street", "Euston", "King's Cross", "Highbury & Islington", "Finsbury Park",
                "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow Central"],
                ["Waterloo", "Bank"]];


function main(){
    var URLParameter = getURLParameter("tubeLine");
    displayTubeResult(URLParameter);
}

function getURLParameter(name) {
    var queryString = window.location.search;

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(queryString);
    //Define expression pattern 
    //If match succeeds the exec() method returns an array
    //[0] returns the full string matched, [1],..[n] returns parenthesized '(..)' matches, if any
    if (!results) {
        //If match failed
        return null;
    }
    if (!results[2]) {
        return '';
    }

    //Replace '+' space expression which occur zero or more times with a space ' '
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function displayTubeResult(line) {
    line = line.trim();
    //Check if valid tube line
    var indexPos = tubeLines.indexOf(line.toLowerCase());
    console.log(indexPos);

    if (indexPos != -1) {
        document.getElementById("tubeColor").style.background = tubeColors[indexPos];
        document.getElementById("tubeName").innerHTML = line;
        document.getElementById("tubeStations").innerHTML = stations[indexPos].join("<br>");
        document.getElementById("funFacts").innerHTML = funFacts[indexPos];
    }
    else {
        document.getElementById("error").innerHTML = "Your search did not match any records. Please try again.";
        document.getElementById("tubeData").style.display = "none";
    }

}