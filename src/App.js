import gambar from './greninja2.png';
import gambar1 from './greninja3.png';
import gambar2 from './greninja4.png';
import pokebal from './Poké_Ball_icon.svg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokebal} className="App-logo" alt="logo" />
        <h1>POKEMON KYU</h1>
        <p><b>
          Bagian yang di modifikasi <code>src/App.js dan src/App.css</code>
          </b>
        </p>
        <a
          className="App-link"
          href="https://www.pokemon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Pokemon
        </a>
      </header>
      <body>
          <div className="text">
              <p align="justify">Pokémon adalah makhluk misterius dengan banyak rahasia. Beberapa Pokémon tinggal bersama manusia dan beberapa 
              tinggal di alam bebas di padang rumput, gua, atau laut, tapi banyak hal tentang ekologi mereka yang masih belum diketahui. 
              Salah satu fitur utama mereka adalah bahwa mereka dapat ditangkap menggunakan Poké Ball, yang memungkinkan mereka dibawa-bawa.</p>
              <img src={pokebal} className="App-logo" alt="logo" />
              <img src={pokebal} className="App-logo" alt="logo" />
              <img src={pokebal} className="App-logo" alt="logo" />
          </div>
         
          <div className="img">
          <img src={gambar1} className="img" alt="gambar3" />
            <p>Froakie adalah Pokémon berbentuk katak kecil. Bulu putih yang lembut di lehernya berfungsi sebagai bantal untuk menyerap serangan. 
            Ia dikenal lincah dan gesit, sering menggunakan gelembung yang dihasilkannya untuk pertahanan. Froakie adalah starter Pokémon tipe 
            Air yang dapat dipilih oleh pemain di awal permainan Pokémon X dan Y.</p>
          </div>
          <div className="img">
          <img src={gambar2} className="img" alt="gambar4" />
            <p>Frogadier adalah evolusi dari Froakie. Pokémon ini lebih tinggi dan lebih ramping, menekankan kelincahan dan kecepatan. 
            Ia dapat melompat hingga lebih dari 20 kaki di udara. Seperti Froakie, ia juga menggunakan gelembung sebagai alat pertahanan dan serangan. 
            Frogadier dikenal sangat ahli dalam menghindari serangan lawan.</p>
          </div>
          <div className="img">
          <img src={gambar} className="img" alt="gambar" />
            <p>Greninja adalah evolusi terakhir dari Froakie. Pokémon ini menyerupai ninja dan memiliki kecepatan serta kelincahan yang luar biasa. 
            Lidah panjang yang dililitkan di lehernya seperti syal menjadi ciri khasnya. Greninja adalah salah satu Pokémon yang sangat populer, 
            terutama setelah menjadi bagian dari tim utama karakter utama dalam serial anime Pokémon.</p>
          </div>
          
      </body>
    </div>
  );
}

export default App;
