import React from 'react';

const Header =() => {
    return(
        <header class='top'>
        <body class = 'poisk'>
          <form>
            <p><input type="search" name="q" placeholder="Поиск по сайту"/>
              <input type="submit" value="Найти"/></p>
            </form>
            </body>
            <nav>
              <ul class="hr">
                <li>Все</li>
                <li>Designers</li>
                <li>Analysts</li>
                <li>Managers</li>
                <li>iOS</li>
                <li>Android</li>
              </ul>
            </nav>
          </header>
    )
}

export default Header;