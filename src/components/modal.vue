<template>
  <transition name="modal">
    <div class="vm_modal_mask" v-show="modalVisibal" @click.self="modalCancel">
      <div class="vm_modal">
        <div class="vm_modal_body" v-html="render" />
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props : ['render', 'show', 'handCancel'],
    data : function(){
      return {
        downLoadUrl: '',
        modalVisibal: false,
      }
    },
    created: function() {
      global.aaa = this;
    },
    watch: {
      'show': function() {
        this.$set(this, 'modalVisibal', this.show);
      }
    },
    mounted: function() {
    },
    methods: {
      modalCancel() {
        if(this.handCancel){
          this.handCancel();
        } else {
          this.$set(this, 'modalVisibal', false);
        }
      },
    },
    computed: {
    },
    components : {
    }
  }
</script>
<style lang="sass">
  .vm_modal_mask {
    position: fixed;
    overflow: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    font-size: 14px;
    background-color: rgba(0, 0, 0, .65);
    opacity: 1;
    transform: scale(1);
    transition: all ease .3s;
    &.modal-leave-to,
    &.modal-enter {
      opacity: 0;
      transform: scale(0);
    }
    >.vm_modal {
      width: 80%;
      min-height: 40px;
      left: 50%;
      top: 10%;
      margin-top: 53px;
      margin-bottom: 30px;
      background-color: #fff;
      transform: translateX(-50%);
      position: absolute;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,.15);
      padding: 15px;
      box-sizing: border-box;
      .vm_modal_body {
        // border: #eee solid 1px;
      }
    }
  }
</style>
