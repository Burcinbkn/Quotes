function generate(){
    var quotes={
        "- Coco Chanel": '"In order to be irreplaceable one must always be different."',
        "-Vera Wang": '“I want people to see the dress, but focus on the woman.”',
        "-Karl Lagerfeld": '“Change is the healthiest way to survive.”',
        "-Alexander McQueen":'"People do not want to see clothes, they want to see something that fuels the imagination."' 
    }

    var authors = Object.keys(quotes);

    var author= authors[Math.floor(Math.random() * authors.length)]; 

    var quote =quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}