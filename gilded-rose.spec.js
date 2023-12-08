import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it("Sulfuras, Hand of Ragnaros does not change", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 1, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(1);
  });
});

/* 
import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe('updateQuality', () => {
  it('quality + 1, sellIn -1', () => {
    const testItem = new Item('Aged Brie', 5, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(11);
    expect(testItem.sellIn).toBe(4);
  });
});

describe('updateQuality', () => {
  it('sellIn does not go below 0', () => {
    const testItem = new Item('Aged Brie', 0, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(11);
    expect(testItem.sellIn).toBe(0);
  });
});

describe('updateQuality', () => {
  it('quality and sellIn --', () => {
    const testItem = new Item('Elixir of the Mongoose', 5, 10)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(9);
    expect(testItem.sellIn).toBe(4);
  });
});

describe('updateQuality', () => {
  it('quality and sellIn do not change', () => {
    const testItem = new Item('Sulfuras, Hand of Ragnaros', 10, 80)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(10);
  });
});

describe('updateQuality', () => {
  it('quality increases by 2', () => {
    const testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 12, 25)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(26);
    expect(testItem.sellIn).toBe(11);
  });
});

describe('updateQuality', () => {
  it('quality increases by 2', () => {
    const testItem = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 25)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(28);
    expect(testItem.sellIn).toBe(5);
  });
});

describe('updateQuality', () => {
  it('quality decreases twice as fast', () => {
    const testItem = new Item('Conjured Item', 6, 25)
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(23);
    expect(testItem.sellIn).toBe(5);
  });
}); */