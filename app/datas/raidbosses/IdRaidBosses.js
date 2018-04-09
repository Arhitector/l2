
const l2IdBosses = {
  // <-- Raid Boss lvl 20-29 -->
  25372: 'Discarded Guardia',
  25375: 'Zombie Lord Farakelsus',
  25378: 'Madness Beast',
  25146: 'Serpent Demon Bifrons',
  25357: 'Sukar Wererat Chief',
  25373: 'Malex Herald of Dagoniel',
  25380: 'Kaysha Herald of Icarus',
  25001: 'Greyclaw Kutus',
  25362: 'Tracker Leadder Sharuk',
  25366: 'Kuroboros\' Priest',
  25060: 'Unrequited Kael',
  25127: 'Langk Matriarch Rashkos',
  25019: 'Pan Dryad',
  25078: 'Princess\' Guard',
  25149: 'Zombie Lord Crowl',
  25166: 'Ikuntai',
  25369: 'Soul Scavenger',
  25426: 'Betrayer of Urutu Freki',
  25429: 'Mammon Collector Talos',
  25360: 'Tiger Hornet',
  25365: 'Patriarch Kuroboros',
  25038: 'Tirak',
  25272: 'Partisan Leader Talakin',
  25095: 'Elf Renoa',
  // <-- Raid Boss lvl 20-39 -->
  25004: 'Turek Mercenary Captain',
  25079: 'Cat`s Eye Bandit',
  25112: 'Agent of Beres, Meana',
  25169: 'Ragraman',
  25188: 'Apepi - ',
  25352: 'Giant Wasteland Basilisk',
  25501: 'Boss Akata',
  25392: 'Captain of Queen`s Royal Guards',
  25401: 'Skyla',
  25128: 'Vuku Grand Seer Gharmash',
  25391: 'Nurka`s Messenger',
  25404: 'Corsair Captain Kylon',
  25020: 'Breka Warlock Pastu',
  25023: 'Stakato Queen Zyrnna',
  25189: 'Cronos`s Servitor Mumu',
  25383: 'Revenant of Sir Calibus',
  25041: 'Remmel',
  25063: 'Chertuba of Great Soul',
  25098: 'Sejarr`s Servitor',
  25118: 'Guilotine, Warden of the Execution Grounds',
  25152: 'Flame Lord Shadar',
  25185: 'Tasaba Patriarch Hellena',
  25223: 'Soul Collector Acheron',
  25354: 'Gargoyle Lord Sirocco',
  25388: 'Red Eye Captain Trakia',
  25398: 'Eye of Beleth',
  25211: 'Sebek',
  25385: 'Evil Spirit Tempest',
  25506: 'Rayito The Looter',
  25170: 'Lizardmen Leader Hellion',
  25394: 'Premo Prime',
  25082: 'Leader of Cat Gang',
  25504: 'Nellis` Vengeful Spirit',
  // <-- Raid Boss lvl 40-49 -->
  25064: 'Wizard of Storm Teruk',
  25115: 'Icarus Sample 1',
  25134: 'Leto Chief Talkin',
  25155: 'Shaman King Selu',
  25208: 'Water Couatle Ateka',
  25214: 'Fafurion`s Page Sika',
  25410: 'Road Scavenger Leader',
  25487: 'Water Spirit Lian',
  25415: 'Nakondas',
  25490: 'Gwindorr',
  25007: 'Retreat Spider Cletu',
  25088: 'Crazy Mechanic Golem',
  25192: 'Earth Protector Panathen',
  25085: 'Timak Orc Chief Ranger',
  25099: 'Rotten Tree Repiro',
  25418: 'Dread Avenger Kraven',
  25431: 'Flamestone Golem',
  25438: 'Thief Kelbar',
  25057: 'Biconne of Blue Sky',
  25102: 'Shacram',
  25173: 'Tiger King Karuta',
  25260: 'Iron Giant Totem',
  25395: 'Archon Suscepter',
  25437: 'Timak Orc Gosmos',
  25441: 'Evil Spirit Cyrion',
  25498: 'Fafurion`s Henchman Istary',
  25044: 'Barion',
  25412: 'Necrosentinel Royal Guard',
  25158: 'King Tarlk',
  25420: 'Orfen`s Handmaiden',
  25026: 'Katu Van Leader Atui',
  25047: 'Karte',
  25456: 'Mirror of Oblivion',

  // <-- Raid Boss lvl 50-59 -->
  25273: 'Carnamakos',
  25013: 'Ghost of Peasant Leader',
  25119: 'Messenger of Fairy Queen Berun - ',
  25131: 'Carnage Lord Gato - ',
  25217: 'Cursed Clara - ',
  25277: 'Lilith\'s Witch Marilion - ',
  25484: 'Zaken\'s Chief Mate Tillion - ',
  25050: 'Verfa - ',
  25460: 'Deadman Ereve - ',
  25067: 'Captain of Red Flag Shaka - ',
  25473: 'Grave Robber Kim - ',
  25512: 'Gigantic Chaos Golem - ',
  25496: 'Fafurion\'s Envoy Pingolpin - ',
  25029: 'Atraiban - ',
  25509: 'Dark Shaman Varangka - ',
  25481: 'Magus Kenishee - ',
  25159: 'Paniel The Unicorn - ',
  25010: 'Furious Thieles - ',
  25070: 'Enchanted Forest Watcher Ruell - ',
  25103: 'Sorcerer Isirr - ',
  25137: 'Beleth\'s Seer Sephia - ',
  25176: 'Black Lily - ',
  25241: 'Harit Hero Tamash - ',
  25259: 'Zaken\'s Butcher Krantz - ',
  25280: 'Pagan Watcher Cerberon - ',
  25434: 'Bandit Leader Barda - ',
  25475: 'Ghost Knight Kabed - ',
  25493: 'Eva\'s Spirit Niniel - ',
  25122: 'Refugee Hopeful Leo - ',
  25423: 'Fairy Queen Timiniel - ',
  25463: 'Harit Guardian Garangky - ',
  25230: 'Timak Seer Ragoth - ',
  25032: 'Eva\'s Guardian Millenu - ',
  25089: 'Soulless Wild Boar - ',
  25182: 'Demon Kurikups - ',
  25238: 'Abyss Brukunt - ',
  25392: 'Captain of Queen\'s Royal Guards - ',

  // <-- Raid Boss lvl 60-69 -->
  25016: 'The 3rd Underwater Guardian - ',
  25162: 'Giant Marpanak - ',
  25179: 'Guardian of the Statue of Giant Karum - ',
  25256: 'Taik High Prefect Arak - ',
  25407: 'Lord Ishka - ',
  25423: 'Fairy Queen Timiniel - ',
  25226: 'Roaring Lord Kastor - ',
  25106: 'Ghost of the Well Lidia - ',
  25467: 'Gorgolos - ',
  25032: 'Eva\'s Guardian Millenu - ',
  25051: 'Rahha - ',
  25125: 'Fierce Tiger King Angel - ',
  25140: 'Hekaton Prime - ',
  25182: 'Demon Kurikups - ',
  25234: 'Ancient Weird Drake - ',
  25255: 'Gargoyle Lord Tiphon - ',
  25444: 'Enmity Ghost Ramdal - ',
  25478: 'Shilen\'s Priest Hisilrome - ',
  25322: 'Demon\'s Agent Falston - ',
  25470: 'Last Titan Utenus - ',
  25238: 'Abyss Brukunt - ',
  25263: 'Kernon\'s Faithful Servant Kelone - ',
  25073: 'Bloody Priest Rudelto - ',
  25233: 'Spirit of Andras, The Betrayer - ',

  // <-- Raid Boss lvl 70-79 -->
  25035: 'Shilen\'s Messenger Cabrio - ',
  25092: 'Korim - ',
  25163: 'Roaring Skylancer - ',
  25198: 'Fafurion\'s Herald Lness - ',
  25252: 'Palibati Queen Themis - ',
  25269: 'Beast Lord Behemoth - ',
  25281: 'Anakim\'s Nemesis Zakaron - ',
  25325: 'Flame of Splendor Barakiel - ',
  25453: 'Meanas Anor - ',
  25328: 'Eilhalder von Hellmann - ',
  25447: 'Immortal Savior Mardil - ',
  25199: 'Water Dragon Seer Sheshark - ',
  25235: 'Vanor Chief Kandra - ',
  25248: 'Doom Blade Tanatos - ',
  27262: 'Death Lord Hallate - ',
  25523: 'Plague Golem - ',
  25109: 'Antharas Priest Cloe - ',
  25202: 'Krian Padisha Sobekk - ',
  25296: 'Icicle Emperor Bumbalump - ',
  25054: 'Kernon - ',
  25229: 'Storm Winged Naga - ',
  25244: 'Last Lesser Giant Olkuth - ',
  25249: 'Palatanos of Horrific Power - ',
  25266: 'Bloody Empress Decarbia - ',
  25276: 'Death Lord Ipos - ',
  25282: 'Death Lord Shax - ',
  25524: 'Flamestone Giant - ',
  25205: 'Ocean Flame Ashakiel - ',
  25143: 'Fire of Wrath Shuriel - ',
  25245: 'Last Lesser Giant Glaki - ',
  25293: 'Hestia, Guardian Deity of the Hot Springs - ',
  25290: 'Daimon The White-Eyed - ',
  25126: 'Longhorn Golkonda - ',
  25450: 'Cherub Galaxia - ',

  // <-- Raid Boss lvl 80-89 -->
  25299: 'Ketra\'s Hero Hekaton - ',
  25309: 'Varka\'s Hero Shadith - ',
  25514: 'Queen Shyeed - ',
  25319: 'Ember - ',
  25527: 'Uruka - ',
  25315: 'Ketra\'s Chief Horus - ',
  25306: 'Soul Of Fire Nastron - ',
  25316: 'Soul Of Water Ashutar - ',
  25517: 'Master Anays - ',
  29062: 'High Priestess Van Halter - ',
  29065: 'Sailren - ',

  // <-- Grand Boss -->
  29020: 'Baium - ',
  29028: 'Valakas - ',
  29019: 'Antharas - ',
  29022: 'Zaken - ',
  29054: 'Benom - ',
  29006: 'Core - ',
  29014: 'Orfen - ',
  29001: 'Queen Ant - ',
  29046: 'Scarlet Van Halisha 1 - ',
  29047: 'Scarlet Van Halisha 2 - ',
}
