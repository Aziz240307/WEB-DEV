import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
  {
    id: 1,
    name: 'iPhone 15',
    description: 'Latest Apple smartphone with powerful chip and camera.',
    price: 407000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/?c=750000000'
  }, 
  {
    id: 2,
    name: "Чехол для Apple iPhone 13 прозрачный", 
    description: "Прозрачный чехол для iPhone 13, защищает от царапин и ударов.",
    price: 10, 
    rating: 5.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-large", 
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/pa2/pc5/64215961.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000"
  }, 
  {
    id: 3,
    name: "Наушники Apple AirPods Pro 2",
    description: "Беспроводные наушники с активным шумоподавлением и улучшенным звуком.",

    price: 106000,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium", 
    images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000"
  },{
    id: 4,
    name: "Apple Watch Series 8",
    description: "Умные часы с большим дисплеем, мониторингом здоровья и фитнеса.",
    price: 189000,  
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1b/h98/65099848187934.jpg?format=gallery-medium", 
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h98/65099848187934.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2c/hc9/65099849924638.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf6/he3/65099852480542.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-chernyi-midnight-106362810/?c=750000000"
  },{
    id: 5,
    name: "iPad Pro 12.9",
    description: "Планшет с мощным процессором, большим дисплеем и поддержкой Apple Pencil.",
    price: 300000,
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium", 
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000"
  },{
    id: 6,
    name: "MacBook Air M2",
    description: "Легкий и мощный ноутбук с процессором M2 и длительным временем работы от батареи.",
    price: 458000,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium",
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p98/p35/16711031.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7c/p35/16711032.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000"
  },
{
    id: 7,
    name: "Apple AirPods Max",
    description: "Премиальные беспроводные наушники с активным шумоподавлением и высоким качеством звука.",
    price: 350000,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium",
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000"
},{
    id: 8,
    name: "Apple TV 4K",
    description: "Медиаплеер с поддержкой 4K HDR, доступом к стриминговым сервисам и игровым функциям.",  
    price: 120000,
    rating: 4.6,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h8b/h34/66933839167518.jpg?format=gallery-medium",
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h8b/h34/66933839167518.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h27/h9a/66933839429662.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h87/hc5/66933839953950.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/apple-tv-128gb-4k-2022-wi-fi-ethernet-108062591/?c=750000000"
},{
    id: 9,
    name: "Apple HomePod mini",
    description: "Компактная умная колонка с качественным звуком и поддержкой Siri.",
    price: 120000,
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h26/hfd/63967135006750.jpg?format=gallery-medium",
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/hfd/63967135006750.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he0/h86/63967138578462.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h31/h13/63967141199902.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/apple-homepod-mini-chernyi-100983175/?c=750000000"
},{
    id: 10,
    name: "Apple Magic Keyboard",
    description: "Беспроводная клавиатура с подсветкой и встроенным аккумулятором.",
    price: 170000, 
    rating: 4.4,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha6/he5/63769733103646.jpg?format=gallery-medium",
    images: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/he5/63769733103646.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h21/h31/63769733890078.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha6/he5/63769733103646.jpg?format=gallery-medium'],
    link: "https://kaspi.kz/shop/p/apple-smart-keyboard-dlja-apple-ipad-pro-12-9-2nd-generation-chernyi-9200170/?c=750000000"
}
];

share(product: any){
  const url = encodeURIComponent(product.link);
  window.open(`https://wa.me/?text=Check this product ${url}`);
}
selectedImages: { [key: number]: string } = {};

activeImageIndex: { [productId: number]: number } = {};

getActiveIndex(productId: number): number {
  return this.activeImageIndex[productId] ?? 0;
}

setActiveImage(productId: number, index: number): void {
  this.activeImageIndex[productId] = index;
}

getActiveImage(product: any): string {
  const i = this.getActiveIndex(product.id);
  return product.images?.[i] ?? product.image;
}

nextImage(productId: number): void {
  const product = this.products.find((p: any) => p.id === productId);
  if (!product?.images?.length) return;

  const current = this.getActiveIndex(productId);
  const next = (current + 1) % product.images.length;
  this.setActiveImage(productId, next);
}

prevImage(productId: number): void {
  const product = this.products.find((p: any) => p.id === productId);
  if (!product?.images?.length) return;

  const current = this.getActiveIndex(productId);
  const prev = (current - 1 + product.images.length) % product.images.length;
  this.setActiveImage(productId, prev);
}
}

