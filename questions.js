/* Bank soalan contoh — guru boleh import/ubah melalui menu Urus Soalan. */
const DEFAULT_QUESTIONS = [
  ['bab1','Apakah punca penting Dahagi India 1857?','Penggunaan peluru bersalut lemak','Pembukaan Terusan Suez','Pembentukan ASEAN','Perjanjian Versailles','A','Isu peluru yang dipercayai disalut lemak lembu dan babi menyinggung sentimen agama.'],
  ['bab1','Siapakah tokoh yang dikaitkan dengan Dahagi India?','Mangal Pandey','Mahatma Gandhi','Jawaharlal Nehru','Muhammad Ali Jinnah','A','Mangal Pandey ialah sepoy yang terlibat dalam kebangkitan awal.'],
  ['bab1','Dahagi India berlaku pada tahun?','1757','1857','1905','1947','B','Dahagi India meletus pada 1857.'],
  ['bab1','Syarikat yang memerintah India sebelum 1858 ialah?','Syarikat Hindia Timur Inggeris','VOC','Syarikat Borneo Utara','Syarikat Hudson','A','Syarikat Hindia Timur Inggeris menguasai pentadbiran India.'],
  ['bab1','Kesan Dahagi India ialah?','Pentadbiran diserah kepada Mahkota British','India merdeka serta-merta','Mughal berkuasa semula','VOC mengambil alih','A','Akta Kerajaan India 1858 memindahkan kuasa kepada Mahkota British.'],
  ['bab2','Dasar Liberal di Indonesia bermula pada?','1870','1811','1901','1945','A','Dasar Liberal diperkenalkan pada 1870.'],
  ['bab2','Undang-undang utama Dasar Liberal ialah?','Agrarische Wet','Akta Rowlatt','Piagam Madinah','Akta India','A','Agrarische Wet 1870 membuka peluang modal swasta.'],
  ['bab2','Tujuan Dasar Liberal adalah untuk?','Menggalakkan pelaburan swasta','Menutup perdagangan','Memerdekakan Indonesia','Menghapuskan tanaman eksport','A','Dasar ini membuka ekonomi tanah jajahan kepada modal swasta.'],
  ['bab2','Tanaman komersial utama di Indonesia termasuk?','Getah dan kopi','Gandum sahaja','Kapas sahaja','Kentang sahaja','A','Ladang swasta menumpukan tanaman eksport seperti getah dan kopi.'],
  ['bab2','Kesan Dasar Liberal kepada petani ialah?','Eksploitasi tanah dan buruh','Semua petani kaya','Tiada perubahan','Bebas cukai sepenuhnya','A','Keuntungan banyak memihak kepada pemodal, sementara petani dieksploitasi.'],
  ['bab3','Perang Dunia Pertama bermula pada tahun?','1914','1918','1939','1945','A','Perang Dunia Pertama bermula pada 1914.'],
  ['bab3','Peristiwa pencetus perang ialah pembunuhan?','Archduke Franz Ferdinand','Tsar Nicholas II','Kaiser Wilhelm I','Winston Churchill','A','Franz Ferdinand dibunuh di Sarajevo.'],
  ['bab3','Kuasa Bersekutu termasuk?','Britain, Perancis dan Rusia','Jerman, Itali dan Jepun','Austria sahaja','Turki sahaja','A','Triple Entente membentuk blok Bersekutu utama.'],
  ['bab3','Perjanjian yang menamatkan perang dengan Jerman ialah?','Versailles','Tordesillas','Bangkok','Lausanne','A','Perjanjian Versailles dimeterai pada 1919.'],
  ['bab3','Sistem peperangan utama di Barat ialah?','Perang parit','Perang gerila sahaja','Perang laut sahaja','Perang siber','A','Front Barat terkenal dengan perang parit.']
].map((q,i)=>({id:`q${i+1}`,chapter:q[0],subtopic:'Sejarah STPM',difficulty:i%3===0?'Sukar':'Sederhana',type:'objektif',text:q[1],options:q.slice(2,6),answer:q[6],explanation:q[7],marks:10,time:30,active:true}));
