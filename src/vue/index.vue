<template>
  <el-table :data="formatData" :row-style="showRow" v-bind="$attrs" class="table">
    <el-table-column v-if="columns.length===0" width="150">
      <template slot-scope="scope">
        <span v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(0,scope.row)" @click="toggleExpanded(scope.$index)">
          <i class="el-icon-plus"></i>
          <!-- <i v-else class="el-icon-minus"></i> -->
        </span>
        {{scope.$index}}
      </template>
    </el-table-column>
    <el-table-column v-else v-for="(column, index) in columns" :key="column.value" :label="column.text" :width="column.width">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)">
          <i class="el-icon-plus" @click="toggleExpanded(scope.$index)"></i>
          <!-- <i v-else class="el-icon-minus" @click="toggleExpanded(scope.$index)"></i> -->
        </span>
        {{scope.row[column.value]}}
      </template>
    </el-table-column>
    <slot>
      <el-table-column prop="selectPerm" label="查看" width="100px">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.selectPerm" @change="messageCheck(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="updatePerm" label="修改" width="100px">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.updatePerm" @change="messageUpdate(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
    </slot>
  </el-table>
</template>

<script>
  /**
            Auth: Lei.j1ang
            Created: 2018/1/19-13:59
          */
  import treeToArray from './eval';
  export default {
    name: 'PublishBill',
    props: {
      emptyTree: String,
      data: {
        type: [Array, Object],
        required: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      evalFunc: Function,
      evalArgs: Array,
      expandAll: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        rows: [],
        allData: [],
        treeData: []
      };
    },
    watch: {
      emptyTree: {
        handler(val) {
          if (this.emptyTree === '1') {
            this.treeData = [];
            this.formatData = [];
          }
        }
      },
      treeData: {
        handler(val) {
          // 打印变化后的值
          this.$emit('treeData', val);
        },
        deep: true
      },
      formatData: {
        handler(val) {
          this.handleData();
        },
        deep: true
      }
    },
    computed: {
      // 格式化数据源
      formatData() {
        let tmp;
        if (!Array.isArray(this.data)) {
          tmp = [this.data];
        } else {
          tmp = this.data;
        }
        const func = this.evalFunc || treeToArray;
        const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll];
        return func.apply(null, args);
      }
    },
    methods: {
      handleData() {
        this.treeData = [];
        this.formatData.map((item, index) => {
          if (item.selectPerm || item.updatePerm) {
            const obj = {
              zhdm: item.id,
              selectPerm: item.selectPerm ? '1' : '0',
              updatePerm: item.updatePerm ? '1' : '0'
            };
            this.treeData.push(obj);
          }
        });
      },
      messageCheck(row) {
        const selected = row.selectPerm;
        childSelect(row);
        parentSelect(row);
        // 当该节点及其兄弟节点全部被选中或取消之后，父节点同样选中或取消
        function parentSelect(row) {
          const parent = row['parent'];
          if (parent) {
            const brotherNodes = row.parent.childrenNote;
            let len = 0;
            for (let i = 0; i < brotherNodes.length; i++) {
              if (brotherNodes[i].selectPerm) {
                len += 1;
              }
            }
            row.parent.selectPerm = len === brotherNodes.length;
            parentSelect(parent);
          }
        }
        // 选中或取消该节点的所有子节点
        function childSelect(row) {
          const children = row['childrenNote'];
          if (children) {
            for (let i = 0; i < children.length; i++) {
              children[i].selectPerm = selected;
              childSelect(children[i]);
            }
          }
        }
      },
      messageUpdate(row) {
        const selected = row.updatePerm;
        childSelect(row);
        parentSelect(row);
        // 当该节点及其兄弟节点全部被选中或取消之后，父节点同样选中或取消
        function parentSelect(row) {
          const parent = row['parent'];
          if (parent) {
            const brotherNodes = row.parent.childrenNote;
            let len = 0;
            for (let i = 0; i < brotherNodes.length; i++) {
              if (brotherNodes[i].updatePerm === true) {
                len += 1;
              }
            }
            if (len === brotherNodes.length) {
              row.parent.updatePerm = true;
            } else {
              row.parent.updatePerm = false;
            }
            parentSelect(parent);
          }
        }
        // 选中或取消该节点的所有子节点
        function childSelect(row) {
          const children = row['childrenNote'];
          if (children) {
            for (let i = 0; i < children.length; i++) {
              children[i].updatePerm = selected;
              childSelect(children[i]);
            }
          }
        }
      },
      showRow: function(row) {
        const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true);
        row.row._show = show;
        return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;';
      },
      // 切换下级是否展开
      toggleExpanded: function(trIndex) {
        const record = this.formatData[trIndex];
        record._expanded = !record._expanded;
      },
      // 图标显示
      iconShow(index, record) {
        return (index === 0 && record.childrenNote && record.childrenNote.length > 0);
        // return (record.childrenNote && record.childrenNote.length > 0);
      }
    }
  };

</script>
<style rel="stylesheet/css">
  @keyframes treeTableShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes treeTableShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>

<style lang="scss" rel="stylesheet/scss" scoped>
  .table {
    height: 550px;
    overflow: scroll;
  }

  .table::-webkit-scrollbar {
    width: 0px;
  }

  $color-blue: #2196F3;
  $space-width: 18px;
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: $space-width;
    height: 14px;
    &::before {
      content: ""
    }
  }

  .processContainer {
    width: 100%;
    height: 100%;
  }

  table td {
    line-height: 26px;
  }

  .tree-ctrl {
    position: relative;
    cursor: pointer;
    color: $color-blue;
    margin-left: -$space-width;
  }

</style>
