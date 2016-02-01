/**
 * Funkcja, która ładuje plik, którego URL przekazujemy
 * w parametrze, to kontenera w HTML-u: <div id="content"></div>
 * @param {string} url
 */
function enter(url) {
    $('#content').load(url);
}

// 1) Nasłuchujemy na zmianę hash.
// Zmiana następi wtedy kiedy użytkownik kliknął w link w menu.
// Alternatywą jest wpisanie "z palca" odpowiedniego hasha.
// Uwaga: przy hashu niepoprawnym użytkownik zobaczy błąd w konsoli.
$(window).on('hashchange', function () {
    // Usuwamy 1 znak, którym jest hash (#)
    var hash = location.hash.substr(1);

    // Budujemy odpowiedni URL do pliku.
    var page = 'templates/' + hash + '.html';

    // Ładujemy stronę.
    enter(page);
});

// 2) Domyślną stroną jest home.html - ekran główny.
enter('templates/home.html');
