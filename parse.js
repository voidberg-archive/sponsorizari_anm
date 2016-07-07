var Xray = require("x-ray");

var xray = new Xray();

xray('http://web.anm.ro/L95/sponsor_list.asp', '.Grid tr.Row',
  [{
    crt: 'td:nth-child(1)',
    societate: 'td:nth-child(3)',
    nume: 'td:nth-child(4)',
    specialitatea: 'td:nth-child(5)',
    adresa1: 'td:nth-child(6)',
    adresa2: 'td:nth-child(7)',
    adresa3: 'td:nth-child(8)',
    adresa4: 'td:nth-child(9)',
    sponsorizare_natura: 'td:nth-child(10)',
    sponsorizare_descrierea: 'td:nth-child(11)',
    sponsorizare_suma: 'td:nth-child(12)',
    sponsorizare_data: 'td:nth-child(13)',
    sponsorizare_data_platii_predarii: 'td:nth-child(14)',
    altele_servicii_descrierea: 'td:nth-child(15)',
    altele_servicii_suma: 'td:nth-child(16)',
    altele_servicii_suma_transport: 'td:nth-child(17)',
    altele_servicii_suma_data: 'td:nth-child(18)',
    altele_servicii_platii: 'td:nth-child(19)',
    altele_cheltuieli: 'td:nth-child(20)',
    altele_suma: 'td:nth-child(21)',
    altele_data: 'td:nth-child(22)',
    altele_data_platii: 'td:nth-child(23)',
    total: 'td:nth-child(24)',
  }]
)
.paginate('tr.Footer a:nth-last-child(2)@href')
.limit(1445)
.write('./sponsorizari.json');
