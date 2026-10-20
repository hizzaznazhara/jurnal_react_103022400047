const NAMA_PANGGILAN = 'ijaz';
const N = 47; 
const gayajudul = {color: '1F3A5F' fontSize: '29px'}; 

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

function DaftarMahasiswa() {
const mahasiswa = [
{ id: 1, nama: "Ani", nim: "10121001" },
{ id: 2, nama: "Budi", nim: "10121002" },
{ id: 3, nama: "Citra", nim: "10121003" },
];
return (
<div>
{mahasiswa.map((mhs) => (
<CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
))}
</div>
);
}
