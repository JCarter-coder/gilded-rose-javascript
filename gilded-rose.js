export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
};

/* 
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for(let item of items) {
      if(item.name === 'Aged Brie') {
          if(item.quality <= 50) {
              item.quality ++;
              item.sellIn --;
          }
          item.quality = Math.min(50, item.quality);
          item.sellIn = Math.max(0, item.sellIn);
      }

      if(item.name === 'Elixir of the Mongoose') {
          if(item.quality <= 50) {
              item.quality--;
              item.sellIn--;
          }
          item.quality = Math.min(50, item.quality);
          item.sellIn = Math.max(0, item.sellIn);
      }

      if(item.name === 'Sulfuras, Hand of Ragnaros') {
        if(item.quality <= 50) {
            item.quality = item.quality;
            item.sellIn = item.sellIn;
          }
        }

      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn <= 0) {
          item.quality = 0;
          } else if (item.sellIn <= 6) {
            item.quality += 3;
          } else if (item.sellIn <= 11) {
            item.quality += 2;
          } else {
            item.quality += 1;
          }
        
          item.sellIn--;
          item.quality = Math.min(50, item.quality);
          item.sellIn = Math.max(0, item.sellIn);
        }

        if(item.name.includes('Conjured')) {
          if(item.sellIn <= 50) {
          item.quality -= 2;
          item.sellIn--;
        } else {
          item.quality--;
          item.sellIn--;
        }
        item.quality = Math.min(50, item.quality);
        item.sellIn = Math.max(0, item.sellIn);
      }
      
      if(item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.name !== 'Sulfuras, Hand of Ragnaros' && item.name !== 'Elixir of the Mongoose' && !item.name.includes('Conjured')) {
        item.quality--;
        item.sellIn--;
      }
  }     
} */