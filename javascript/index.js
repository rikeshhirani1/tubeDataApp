var tubeLines = ['Bakerloo line', 'Central line', 'Circle line', 'District line', 
                'Hammersmith & City line', 'Jubilee line', 'Metropolitan line',
                'Northern line', 'Piccadilly line', 'Victoria line', 'Waterloo & City line'];

var defaultTubeLines = ['bakerloo line', 'central line', 'circle line', 'district line',
                        'hammersmith & city line', 'jubilee line', 'metropolitan line',
                        "northern line", 'piccadilly line', 'victoria line', 'waterloo & city line'];

//Typeahead script
var tubeLines = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: tubeLines
});

$('.stationsValue').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
},
{
    name: 'tubeLines',
    source: tubeLines
});


function validateForm() {
    var input = document.getElementsByName("tubeLine")[0].value;
    input = input.trim();

    if (input == "" || defaultTubeLines.indexOf(input.toLowerCase()) == -1) {
        document.getElementById("searchError").style.display = "block";
        return false;
    }
}