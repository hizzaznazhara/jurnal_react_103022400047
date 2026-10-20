const NAMA_PANGGILAN = 'ijaz';
const N = 47; 
const gayajudul = 

function App(){
  const jam = 9;
  
  return {
    <>
    <section id="center">
      <h1 className='judul' style={}> Kantin Hizzaz</h1>
      <p> {jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
      <p>  Saldo Awal kartu kantin: RP{(N * 1000)}</p>
      <button> disabled bayar </button>
    </section>
    </>
  }
}

