export interface Product{
  id: number,
  name: string,
  description: string,
  rating: number,
  images: number,
  price: number,
  memory: number,
  color: string,
  kaspiLink:string,
  sortType:string
}

export const products = [
  {
    id: 1,
    name: "Iphone12",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.77,
    images: 1,
    price: 380000,
    memory: 256,
    color: "purple",
    kaspiLink: "https://kaspi.kz/shop/p/apple-iphone-12-128gb-fioletovyi-101395751/?c=750000000#!/item",
    sortType: "phone"
  },
  {
    id: 2,
    name: "Samsung A51",
    description: "Tested for battery health and guaranteed to have a minimum battery capacity of 80%. Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). ",
    rating: 3.5,
    images: 2,
    price: 164990,
    memory: 64,
    color: "black",
    kaspiLink: "https://kaspi.kz/shop/p/samsung-galaxy-a51-6-gb-128-gb-chernyi-100068493/?c=750000000#!/item",
    sortType: "phone"
  },
  {
    id: 3,
    name: "Oppo A91",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.99,
    images: 3,
    price: 163990,
    memory: 128,
    color: "purple",
    kaspiLink: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item",
    sortType: "phone"
  },
  {
    id: 10,
    name: "Lenova IdeaPAD",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 2.9,
    images: 10,
    price: 164990,
    memory: 256,
    color: "green",
    kaspiLink: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item",
    sortType: "laptop"
  },
  {
    id: 4,
    name: "Macbook Pro",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.5,
    images: 4,
    price: 993990,
    memory: 512,
    color: "green",
    kaspiLink: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item",
    sortType: "laptop"
  },
  {
    id: 5,
    name: "Asus Rog",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.7,
    images: 5,
    price: 419990,
    memory: 512,
    color: "black",
    kaspiLink: "https://kaspi.kz/shop/p/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryi-101686597/?c=750000000#!/item",
    sortType: "laptop"
  },
  {
    id: 6,
    name: "Acer Nitro 5",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.7,
    images: 6,
    price: 559990,
    memory: 512,
    color: "black",
    kaspiLink: "https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qbcer-005-chernyi-106111779/?c=750000000#!/item",
    sortType: "laptop"
  },
  {
    id: 7,
    name: "Redmi note 9",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 3.9,
    images: 7,
    price: 128990,
    memory: 256,
    color: "red",
    kaspiLink: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item",
    sortType: "phone"
  },
  {
    id: 8,
    name: "Vivo Pro",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.2,
    images: 8,
    price: 319990,
    memory: 32,
    color: "black",
    kaspiLink: "https://kaspi.kz/shop/p/vivo-v25-pro-12-gb-256-gb-chernyi-106708277/?c=750000000#!/item",
    sortType: "phone"
  },
  {
    id: 9,
    name: "Nokia 6300",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 3.2,
    images: 9,
    price: 29890,
    memory: 8,
    color: "white",
    kaspiLink: "https://kaspi.kz/shop/p/nokia-6300-ds-belyi-100875450/?c=750000000#!/item",
    sortType: "phone"
  },
  {
    id: 11,
    name: "Electric kettle",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.4,
    images: 11,
    price: 6000,
    memory: 1.7,
    color: "white",
    kaspiLink: "https://kaspi.kz/shop/p/elektrochainik-monte-mt-1815g-belyi-108488533/?c=750000000#!/item",
    sortType: "household"
  },
  {
    id: 12,
    name: "Fridge KBC 390",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 3.8,
    images: 12,
    price: 224900,
    memory: 2.9,
    color: "green",
    kaspiLink: "https://kaspi.kz/shop/p/kleo-kbc-390-chb-belyi-104970651/?c=750000000#!/item",
    sortType: "household"
  },
  {
    id: 13,
    name: "Microwave ARG MS-20",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 4.5,
    images: 13,
    price: 34425,
    memory: 4.7,
    color: "black",
    kaspiLink: "https://kaspi.kz/shop/p/arg-ms-2021m-chernyi-2900958/?c=750000000#!/item",
    sortType: "household"
  },
  {
    id: 14,
    name: "Waffle iron DASH",
    description: "Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.). Tested for battery health and guaranteed to have a minimum battery capacity of 80%.",
    rating: 2.5,
    images: 14,
    price: 34425,
    memory: 1.2,
    color: "red",
    kaspiLink: "https://kaspi.kz/shop/p/vafel-nitsa-dash-f-607-krasnyi-102531842/?c=750000000#!/item",
    sortType: "household"
  }

]
