/*jshint esversion:6*/

// Array of Objects containing locations
const locationArray = [

      {name :'Joss Bay Surf School - Broadstairs',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.jossbay.co.uk/',
      marker : { lat: 51.37987015653222, lng : 1.4459945772694534 }},

      {name :'Canoe Wild - Canterbury',
      destination :'River',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.canoewild.co.uk/courses-lessons',
      marker : { lat: 51.29659620413883, lng : 1.1282678271973294 }},

      {name :'Paddleboarding London',
      destination :'River',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://paddleboardinglondon.co.uk/',
      marker : { lat:51.540889653485245, lng : -0.1483264693173633 }},

      {name :'Ullswater Paddleboarding',
      destination :'Lake',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.ullswaterpaddleboarding.co.uk/',
      marker :   {lat:54.602528434586624, lng: -2.852419437363534 }},

      {name :'Coniston Water - Lake District',
      destination :'Lake',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.visitcumbria.com/amb/coniston/.com',
      marker : { lat: 54.348359608552784, lng: -3.070523343748786 }},

      {name :'River Cam - Cambridge',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://waterways.org.uk/waterways/discover-the-waterways/river-cam',
      marker : { lat: 52.19101403733575, lng: 0.11217061592322643 }},

      {name :'Burgh Island - South Devon',
      destination :'Sea',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.visitsouthdevon.co.uk/things-to-do/burgh-island-p1541123',
      marker : { lat: 50.27996594154964, lng: -3.9000468861976336 }},

      {name :'Woolacombe Surf Centre - Devon',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.woolacombesurfcentre.com/surf-sup-kayak-hire/',
      marker : { lat: 51.1728868538233, lng: -4.209865091690429}},

      {name :'The Hoxton Special - Mounts Bay, Cornwall',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://thehoxtonspecial.com/paddleboarding/',
      marker : { lat: 50.12895863657015, lng: -5.492604443998252 }},

      {name :'Sup in a Bag - Cornwall',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.supinabag.co.uk/',
      marker : { lat: 50.31404855454317, lng: -5.2050803945794035}},

      {name :'Symonds Yat - River Wye, Herefordshire',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.visitherefordshire.co.uk/discover/symonds-yat-rock',
      marker : { lat: 51.84636433944448, lng: -2.646524323037186}},

      {name :'Cuckmere Haven - East Sussex',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.nationaltrust.org.uk/visit/sussex/cuckmere-valley',
      marker : { lat: 50.759579286574805, lng: 0.14828326002924996}},

      {name :'Brighton Watersports- East Sussex',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.thebrightonwatersports.co.uk/',
      marker : { lat: 50.82033033948836, lng: -0.14273495377941892}},

      {name :'Paddle Richmond - London',
      destination :'River',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.paddlerichmond.co.uk/',
      marker : { lat: 51.45803466495877, lng: -0.3061995561725605 }},

      {name :'West Cliff Beach - Whitby',
      destination :'Sea',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://seearoundbritain.com/venues/west-cliff-beach-whitby',
      marker : { lat: 54.49211119569256, lng: -0.6223178449836911}},

      {name :'Hickling Broad - Norfolk',
      destination :'Lake',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.norfolkoutdooradventures.co.uk/',
      marker : { lat: 52.73868284375335, lng: 1.5792854682748 }},

      {name :'The River Tay - Perthshire, Scotland',
      destination :'River',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'http://www.paddlesurfscotland.com/',
      marker : { lat: 56.50902230486181, lng: -3.414042607272759}},

      {name :'Loch Tay - Perthshire, Scotland',
      destination :'Lake',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://lochtay-vacations.co.uk/local-activities/site-activities/stand-up-paddle-board-sup-hire',
      marker : { lat: 56.487189446558105, lng: -4.241308987402993 }},

      {name :'Loch Ness - Scottish Highlands',
      destination :'Lake',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://iye.scot/canoe-kayak-loch-ness/',
      marker : { lat: 57.32959791070306, lng: -4.4227257397810975}},

      {name :'North Coast 500 - Scotland',
      destination :'Sea',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.northcoast500.com/',
      marker : { lat: 57.47982492363161, lng: -4.204053011480662 }},

      {name :'Glencoe - Scottish Highlands',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://ruggedcoast.scot/',
      marker : { lat: 56.679791558203604, lng: -5.130094725343883 }},

      {name :'Stackpole Quay- Pembrokeshire, Wales',
      destination :'Sea',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.visitpembrokeshire.com/explore-pembrokeshire/beaches/stackpole-quay',
      marker : { lat: 51.623912076714085, lng: -4.900296209545261 }},

      {name :'Mawddach Estuary - Snowdonia, Wales',
      destination :'Sea',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.supbarmouth.co.uk/',
      marker : { lat: 52.71936119419464, lng: -4.053012298784031}},

      {name :'Black Rock Sands - Porthmadog, Wales',
      destination :'Sea',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.visitsnowdonia.info/black-rock-sands',
      marker : { lat: 52.91049880702502, lng: -4.162995942355557}},

      {name :'Cardiff Bay - Wales',
      destination :'Sea',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.ciww.com/activities/stand-up-paddleboarding/',
      marker : { lat: 51.44883128997467, lng: -3.1809364257976083}},

      {name :'Bala Lake - Snowdonia, Wales',
      destination :'Lake',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.balawatersports.com/adventure-activities-watersports/stand-up-paddleboarding/',
      marker : { lat: 52.90703484014486, lng: -3.600713735350915}},

      {name :'Strangford Lough - County Down, Northern Ireland',
      destination :'Sea',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://strangfordloughactivitycentre.com/outdoor-activities/stand-up-paddle-boarding-sup-northern-ireland/',
      marker : { lat: 54.47779772490483, lng: -5.6595740750461}},

      {name :'Islandmagee - Northern Ireland',
      destination :'Sea',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://islandmageesup.com/',
      marker : { lat: 54.847118979738774, lng: -5.72650760025576}},

      {name :'Benone Strand - Northern Ireland',
      destination :'Sea',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://longlinesurfschool.co.uk/portfolio_entries/stand-up-paddleboard/',
      marker : { lat: 55.14356977254304, lng: -6.933098422303137}},

      {name :'Derwentwater - Keswick, Cumbria',
      destination :'Lake',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.visitcumbria.com/kes/derwentwater/',
      marker : { lat: 54.57956184039879, lng: -3.147665926169121}},

      {name :'River Wear - Durham',
      destination :'River',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://adventureaccess.co.uk/activities/durham-city-paddling/',
      marker : { lat: 54.83878055172788, lng: -1.3280825076706593}},

      {name :'Lake Semerwater - Wensleydale',
      destination :'Lake',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.lakesemerwater.co.uk/watersports.php',
      marker : { lat: 54.28187461586949, lng: -2.115252057988104}},

      {name :'River Barle - Wensleydale',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://somersetrivers.uk/somerset-rivers/waters/barle/',
      marker : { lat: 51.109085503586556, lng: -3.667484830647081}},

      {name :'River Beaulieu - New Forest',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://beaulieuriver.co.uk/',
      marker : { lat: 50.80015666918733, lng: -1.4244175077483194}},

      {name :'River Ancholme - North Lincs',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://waterways.org.uk/waterways/discover-the-waterways/river-ancholme',
      marker : { lat: 53.55341416418197, lng: -0.49585556158851724}},

      {name :'River Aire - Yorkshire',
      destination :'River',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://britishcanoeing.org.uk/uploads/documents/River-Aire-Bingley.pdf',
      marker : { lat: 53.73181795235486, lng: -1.3581426548914166}},

      {name :'Old Beford River - Thetford',
      destination :'River',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://waterways.org.uk/waterways/discover-the-waterways/old-bedford-river',
      marker : { lat: 52.52342343602057, lng: 0.2509710147609412}},

      {name :'River Alde - Suffolk',
      destination :'River',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.ikencanoe.co.uk/',
      marker : { lat: 52.15091734759989, lng: 1.5105785713970208}},

      {name :'River Stour - Sandwich, Kent',
      destination :'River',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.riverstourtrust.org/boat-trips/paddling-the-river-stour/',
      marker : { lat: 51.294925421445605, lng: 1.331526223768307}},

      {name :'River Medway- Gillingham, Kent',
      destination :'River',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://medwaywatersports.co.uk/',
      marker : { lat: 51.39583533857076, lng: 0.5628848137059936}},

      {name :'Moo Canoes - London',
      destination :'River',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.moocanoes.com/',
      marker : { lat: 51.51221987333958, lng: -0.03852276089940568}},

      {name :'Ladram Bay - Budleigh, Devon',
      destination :'Sea',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.ladrambay.co.uk/',
      marker : { lat: 50.65914800385981, lng: -3.278609864251154}},

      {name :'Loch Harport - Isle Of Skye, Scotland',
      destination :'Lake',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://en.wikipedia.org/wiki/Carbost,_Loch_Harport',
      marker : { lat: 57.32183862107947, lng: -6.363034056716489}},

      {name :'Colonsay - Inner Hebrides, Scotland',
      destination :'Sea',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.colonsaybikesandboards.co.uk/sup-hire/',
      marker : { lat: 56.106762293289826, lng: -6.214037875738858}},

      {name :'Colonsay - Inner Hebrides, Scotland',
      destination :'Sea',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.colonsaybikesandboards.co.uk/sup-hire/',
      marker : { lat: 56.106762293289826, lng: -6.214037875738858}},

      {name :'Porthgwarra Beach - Cornwall',
      destination :'Sea',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.visitcornwall.com/beaches/toilets-nearby/west-cornwall/lands-end/porthgwarra-beach',
      marker : { lat: 50.037695800248024, lng: -5.671939348227876}},

      {name :'Durdle Door - Dorset',
      destination :'Sea',
      hire: 'No',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://www.visit-dorset.com/listing/durdle-door/126276301/',
      marker : { lat: 50.62136933201647, lng: -2.2768712130212205}},

      {name :'Wast Water- Lake District',
      destination :'Lake',
      hire: 'No',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://www.visitcumbria.com/wc/wastwater/',
      marker : { lat: 54.467142483550965, lng: -3.2872729143287134}},

      {name :'Crummock Water- Lake District',
      destination :'Lake',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.visitcumbria.com/cm/crummock-water/',
      marker : { lat: 54.56422677628979, lng: -3.30540621441176}},

      {name :'Lake Vyrnwy - Powys, Wales',
      destination :'Lake',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.lake-vyrnwy.com/',
      marker : { lat: 52.77845364900192, lng: -3.488006843753708}},

      {name :'Thirlmere - Lake District',
      destination :'Lake',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://www.visitcumbria.com/kes/thirlmere/',
      marker : { lat: 54.53887047440164, lng: -3.063947165693131}},

      {name :'River Cherwell - Oxford ',
      destination :'River',
      hire: 'Yes',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://en.wikipedia.org/wiki/River_Cherwell',
      marker : { lat: 51.89496947771337, lng: -1.293377164529778}},

      {name :'River Bure - Norfolk Broads',
      destination :'River',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Beginner',
      website : 'https://www.broads-authority.gov.uk/boating/navigating-the-broads/water-depths/river-bure',
      marker : { lat: 52.720510319987476, lng: 1.4058804091205757}},

      {name :'River Dart - Totnes, Devon',
      destination :'River',
      hire: 'No',
      lessons :'Yes',
      expertise : 'Expert',
      website : 'https://riverdart.co.uk/',
      marker : { lat: 50.44582246574891, lng: -3.6907721675691856}},

      {name :'River Glen - Lincolnshire',
      destination :'River',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Expert',
      website : 'https://waterways.org.uk/waterways/discover-the-waterways/river-glen',
      marker : { lat: 52.78293148572504, lng: -0.25981956788715604}},

      {name :'River Orwell - Suffolk',
      destination :'River',
      hire: 'Yes',
      lessons :'No',
      expertise : 'Beginner',
      website : 'https://allaboutipswich.com/blog/2019/river-orwell',
      marker : { lat: 52.00535738639512, lng: 1.2219147634493612}}
    ];