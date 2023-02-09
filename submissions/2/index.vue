<template>
  <div id="items">
    <h1>{{ items.name }}</h1>
    <template v-for="(group, index) in groupedItems" :key="index">
      <div class="item">
        <h3>Items with Score {{ group.score }}</h3>
        <ul>
          <li
            v-for="(item, index) in group.items"
            :key="index"
            :class="group.items.length === 1 && 'only-one'"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data: function () {
    return {
      groupedItems: {},
    };
  },
  methods: {
    groupBy: function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    processGroupedItems: function () {
      var tempItems = this.items.items;
      var sortedItems = tempItems.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      });
      var tempObj = this.groupBy(sortedItems, 'score');
      var groupedData = Object.keys(tempObj).map((key) => {
        return { score: key, items: tempObj[key] };
      });
      this.groupedItems = groupedData;
    },
  },
  beforeMount() {
    this.processGroupedItems();
  },
};
</script>
