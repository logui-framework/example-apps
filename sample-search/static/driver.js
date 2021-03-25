document.addEventListener('DOMContentLoaded', function() {
    
    let formElement = document.querySelector('#search-form');

    formElement.addEventListener('submit', submitForm);
});

function submitForm(e) {
    e.preventDefault();

    document.querySelector('#submit-button').disabled = true;

    setTimeout(() => {
        let queryString = document.querySelector('#input-box').value;

        if (queryString.length == 0) {
            alert("Please don't submit a blank query!");
            return;
        }
    
        let queryTextElement = document.querySelector('#query-text');
        queryTextElement.innerHTML = queryString;
    
        document.querySelector('#left-rail-results').innerHTML = '';
        document.querySelector('#entity-card').style.display = 'block';
    
        addFakeResults();
        document.querySelector('#submit-button').disabled = false;

        document.querySelector('#landing-instructions').style.display = 'none';
        document.querySelector('.results-stats').style.display = 'block';
    },
    350);
}

function addFakeResults() {
    let fakeResults = [
        `<li data-rank="1">
            <span class="title"><a href="https://www.tudelft.nl" target="_blank">Delft University of Technology</a></span>
            <span class="url">https://www.tudelft.nl</span>
            <span class="snippet">Delft University of Technology also known as TU Delft, is the oldest and largest Dutch public technological university. </span>
        </li>`,
        `<li data-rank="2">
            <span class="title"><a href="https://en.wikipedia.org/wiki/Delft" target="_blank">Delft - Wikipedia</a></span>
            <span class="url">http://en.wikipedia.org/wiki/Delft</span>
            <span class="snippet">Delft is a popular tourist destination in the Netherlands, famous for its historical connections with the reigning House of Orange-Nassau, for its blue pottery, for...</span>
        </li>`,
        `<li data-rank="3">
            <span class="title"><a href="https://en.wikipedia.org/wiki/Delftware" target="_blank">Delftware - Wikipedia</a></span>
            <span class="url">http://en.wikipedia.org/wiki/Delftware</span>
            <span class="snippet">Delftware or Delft pottery, also known as Delft Blue (Dutch: Delfts blauw), is a general term now used for Dutch tin-glazed earthenware, a form of faience.</span>
        </li>`,
        `<li data-rank="4">
            <span class="title"><a href="https://www.holland.com/global/tourism/destinations/more-destinations/delft.htm" target="_blank">Visit Delft - These are the best things to do - Holland.com</a></span>
            <span class="url">https://www.holland.com/</span>
            <span class="snippet">Delft is famous for its ceramic Delft Blue pottery. It is known as the birth place of the famous painter Johannes Vermeer, known from "the girl with the Pearl". And it is known as a charming canal-ringed town with historical monuments and medieval architecture.</span>
        </li>`,
        `<li data-rank="5">
            <span class="title"><a href="https://www.delft.nl" target="_blank">Homepage | Gemeente Delft</a></span>
            <span class="url">http://www.delft.nl</span>
            <span class="snippet">Municipality Delft · Municipal services. Moving from abroad · Reporting a change of address · Official matters. Immigration procedure · Housing. Housing in the ...</span>
        </li>`,
    ];

    for (let result of fakeResults) {
        appendFakeResult(result);
    }

}

function appendFakeResult(markupString) {
    let resultsContainer = document.querySelector('#left-rail-results');

    let tempContainer = document.createElement('div');
    tempContainer.innerHTML = markupString.trim();

    resultsContainer.appendChild(tempContainer.firstChild);
}