export interface chartsWorld {
  layout: string
  type: string
  key: string
  title: string
  subtitle: string
  share: Share
  images: Images
  hub: Hub
  artists: Artist[]
  url: string
  highlightsurls: Highlightsurls
  properties: Highlightsurls
}

export interface Highlightsurls {}

export interface Artist {
  alias: string
  id: string
  adamid: string
}

export interface Hub {
  type: string
  image: string
  actions: Action[]
  options: Option[]
  explicit: boolean
  displayname: string
}

export interface Option {
  caption: string
  actions: Action2[]
  beacondata: Beacondata
  image: string
  type: string
  listcaption: string
  overflowimage: string
  colouroverflowimage: boolean
  providername: string
}

export interface Beacondata {
  type: string
  providername: string
}

export interface Action2 {
  name: string
  type: string
  uri: string
}

export interface Action {
  name: string
  type: string
  id?: string
  uri?: string
}

export interface Images {
  background: string
  coverart: string
  coverarthq: string
  joecolor: string
}

export interface Share {
  subject: string
  text: string
  href: string
  image: string
  twitter: string
  html: string
  avatar?: string
  snapchat: string
}

export interface CurrentSong {
  image: string
  key: string
  songUri: string | undefined
  title: string
  subtitle: string
}


export interface ipRegistryData {
  ip: string;
  type: string;
  hostname?: any;
  carrier: Carrier;
  company: Company;
  connection: Connection;
  currency: Currency;
  location: Location;
  security: Security;
  time_zone: Timezone;
  user_agent: Useragent;
}

export interface Useragent {
  header: string;
  name: string;
  type: string;
  version: string;
  version_major: string;
  device: Device;
  engine: Engine;
  os: Os;
}

export interface Os {
  name: string;
  type: string;
  version?: any;
}

export interface Engine {
  name: string;
  type: string;
  version: string;
  version_major: string;
}

export interface Device {
  brand: string;
  name: string;
  type: string;
}

export interface Timezone {
  id: string;
  abbreviation: string;
  current_time: string;
  name: string;
  offset: number;
  in_daylight_saving: boolean;
}

export interface Security {
  is_abuser: boolean;
  is_attacker: boolean;
  is_bogon: boolean;
  is_cloud_provider: boolean;
  is_proxy: boolean;
  is_relay: boolean;
  is_tor: boolean;
  is_tor_exit: boolean;
  is_vpn: boolean;
  is_anonymous: boolean;
  is_threat: boolean;
}

export interface Location {
  continent: Continent;
  country: Country;
  region: Continent;
  city: string;
  postal?: any;
  latitude: number;
  longitude: number;
  language: Language;
  in_eu: boolean;
}

export interface Country {
  area: number;
  borders: string[];
  calling_code: string;
  capital: string;
  code: string;
  name: string;
  population: number;
  population_density: number;
  flag: Flag;
  languages: Language[];
  tld: string;
}

export interface Language {
  code: string;
  name: string;
  native: string;
}

export interface Flag {
  emoji: string;
  emoji_unicode: string;
  emojitwo: string;
  noto: string;
  twemoji: string;
  wikimedia: string;
}

export interface Continent {
  code: string;
  name: string;
}

export interface Currency {
  code: string;
  name: string;
  name_native: string;
  plural: string;
  plural_native: string;
  symbol: string;
  symbol_native: string;
  format: Format;
}

export interface Format {
  negative: Negative;
  positive: Negative;
}

export interface Negative {
  prefix: string;
  suffix: string;
}

export interface Connection {
  asn: number;
  domain: string;
  organization: string;
  route: string;
  type: string;
}

export interface Company {
  domain: string;
  name: string;
  type: string;
}

export interface Carrier {
  name?: any;
  mcc?: any;
  mnc?: any;
}